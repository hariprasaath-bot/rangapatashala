import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, DividerModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
