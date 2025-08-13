import { Injectable, Renderer2, RendererFactory2, Inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public isDarkMode = signal<boolean>(false);
  private renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    const savedTheme = localStorage.getItem('theme') === 'dark';
    this.isDarkMode.set(savedTheme);
    this.updateTheme(savedTheme);
  }

  toggleTheme() {
    const newMode = !this.isDarkMode();
    this.isDarkMode.set(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    this.updateTheme(newMode);
  }

  private updateTheme(isDark: boolean) {
    if (isDark) {
      this.renderer.addClass(this.document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(this.document.body, 'dark-theme');
    }
  }
}
