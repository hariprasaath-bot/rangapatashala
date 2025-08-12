import { Injectable, signal, effect, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDarkMode = signal(false);
  public readonly isDarkMode = this._isDarkMode.asReadonly();

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      this._isDarkMode.set(savedTheme === 'dark');
    }

    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const isDark = this.isDarkMode();
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        if (isDark) {
          document.body.classList.add('dark-theme');
        } else {
          document.body.classList.remove('dark-theme');
        }
      }
    });
  }

  toggleTheme() {
    this._isDarkMode.update(value => !value);
  }
}
