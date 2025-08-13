import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../theme.service';
import { ToggleSwitchModule } from 'primeng/toggleswitch';


@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    CommonModule,
    ToggleSwitchModule ,
    FormsModule
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class MenuBarComponent {
  items = [
    { label: 'Home', icon: 'pi pi-fw pi-home' },
    { label: 'Courses', icon: 'pi pi-fw pi-calendar' },
    { label: 'Wall of Love', icon: 'pi pi-fw pi-pencil' },
    { label: 'Contact', icon: 'pi pi-fw pi-file' }
  ];

  constructor(public themeService: ThemeService) {}

  onThemeSwitchChange() {
    this.themeService.toggleTheme();
  }
}
