import { Component } from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrls: ['./courses.scss'],
  standalone: true,
  imports: [CourseCardComponent, CommonModule, ButtonModule],
})
export class CoursesComponent {
  courses = [
    {
      title: 'NEET Preparation',
      description:
        'Comprehensive preparation for medical college entrance with Biology, Chemistry, and Physics.',
      rating: 4.8,
      duration: '1-2 Years',
      students: '450+ students',
      price: '₹15,000/month'
    },
    {
      title: 'JEE Mains Preparation',
      description:
        'Master Physics, Chemistry, and Mathematics with our proven methodology for top engineering institutions.',
      rating: 4.9,
      duration: '1-2 Years',
      students: '520+ students',
      price: '₹12,000/month'
    },
    {
      title: 'Class 10th Board Preparation',
      description:
        'Complete preparation for Class 10 board examinations with focus on concept clarity and practice.',
      rating: 4.7,
      duration: '1 Year',
      students: '320+ students',
      price: '₹10,000/month'
    }
  ];
}
