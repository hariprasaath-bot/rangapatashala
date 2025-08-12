import { Component, inject } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../theme.service';
import { Button } from "primeng/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ToggleSwitchModule, FormsModule, Button],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  items: MenuItem[];
  themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode;

  constructor() {
    this.items = [
      { label: 'Home', routerLink: ['/'] },
      { label: 'Courses', routerLink: ['/courses'] },
      { label: 'Wall of Love', routerLink: ['/wall-of-love'] },
      { label: 'Contact', routerLink: ['/contact'] }
    ];
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
