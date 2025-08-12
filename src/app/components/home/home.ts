import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, CardModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
