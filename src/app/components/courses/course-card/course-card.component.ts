import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
  
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.component.scss'],
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
  @Input() image?: string;
  @Input() tags?: string[];
  @Input() features?: string[];
  @Input() age?: string;
  @Output() demo = new EventEmitter<void>();
  @Output() enroll = new EventEmitter<void>();

  // fallback image used when course image is missing or fails to load
  // use existing project asset as fallback
  fallbackImage = '/course-fallback.jpg';

//   // called from template when image load fails
 onImgError(event: HTMLImageElement) {
    event.src = this.fallbackImage;
  }

  getIcon(title: string) {
    const lower = title.toLowerCase();
    if (lower.includes('neet')) return 'pi-heart';
    if (lower.includes('jee')) return 'pi-bolt';
    if (lower.includes('class 10')) return 'pi-chart-line';
    return 'pi-image';
  }
}
