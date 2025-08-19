import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../theme.service';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    CommonModule,
    ToggleSwitchModule ,
    FormsModule,
    RouterModule
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class MenuBarComponent {
  items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
    { label: 'Courses', icon: 'pi pi-fw pi-calendar', routerLink: '/courses' },
    { label: 'Wall of Love', icon: 'pi pi-fw pi-pencil', routerLink: '/wall-of-love' },
    { label: 'Contact', icon: 'pi pi-fw pi-file', routerLink: '/contact' }
  ];
  mobileMenu = false;

  constructor(public themeService: ThemeService) {}

  onThemeSwitchChange() {
    this.themeService.toggleTheme();
  }
}
