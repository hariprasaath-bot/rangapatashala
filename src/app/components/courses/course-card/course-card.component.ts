import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
  
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.html',
  standalone: true,
  imports: [CardModule, CommonModule, ButtonModule]
})
export class CourseCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() rating?: number;
  @Input() duration?: string;
  @Input() students?: string;
  @Input() price?: string;

  getIcon(title: string) {
    const lower = title.toLowerCase();
    if (lower.includes('neet')) return 'pi-heart';
    if (lower.includes('jee')) return 'pi-bolt';
    if (lower.includes('class 10')) return 'pi-chart-line';
    return 'pi-image';
  }
}
