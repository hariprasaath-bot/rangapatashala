import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from './shared/footer/footer';
import { MenuBarComponent } from './shared/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBarComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rangapatashala');
}
