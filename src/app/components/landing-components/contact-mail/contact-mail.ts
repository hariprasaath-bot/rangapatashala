import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact-mail',
  templateUrl: './contact-mail.html',
  styleUrls: ['./contact-mail.scss'],
  standalone: true,
  imports: [InputTextModule, ButtonModule]
})
export class ContactMailComponent {}
