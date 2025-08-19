import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CourseCardComponent } from '../../courses/course-card/course-card.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-featured-courses',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, ButtonModule],
  templateUrl: './featured-courses.component.html',
  styleUrls: ['./featured-courses.component.scss']
})
export class FeaturedCoursesComponent {
  
  allCourses = [
    {
      title: 'NEET Preparation',
      description: 'Comprehensive preparation for medical college entrance with Biology, Chemistry, and Physics.',
      rating: 4.8,
      duration: '1-2 Years',
      students: '450+ students',
      price: '15,000',
      image: 'assets/neet.jpg',
      tags: ['Competitive'],
      featured: true
    },
    {
      title: 'JEE Mains Preparation',
      description: 'Master Physics, Chemistry, and Mathematics with our proven methodology for top engineering institutions.',
      rating: 4.9,
      duration: '1-2 Years',
      students: '520+ students',
      price: '12,000',
      image: 'assets/jee.jpg',
      tags: ['Competitive', 'Advanced'],
      featured: true
    },
    {
      title: 'Class 10th Board Preparation',
      description: 'Complete preparation for Class 10 board examinations with focus on concept clarity and practice.',
      rating: 4.7,
      duration: '1 Year',
      students: '320+ students',
      price: '10,000',
      image: 'assets/class10.jpg',
      tags: ['Foundation', 'Intermediate'],
      featured: true
    }
  ];

  featuredCourses = this.allCourses.filter(course => course.featured);

  constructor(private router: Router) {}

  viewAllCourses() {
    this.router.navigate(['/courses']);
  }

  onDemo(course: any) {
    this.router.navigate(['/demo-session'], { queryParams: { flow: 'demo', course: course.title } });
  }

  onEnroll(course: any) {
    this.router.navigate(['/demo-session'], { queryParams: { flow: 'enroll', course: course.title } });
  }
}
