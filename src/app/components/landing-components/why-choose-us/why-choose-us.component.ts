import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  reasons = [
    {
      icon: 'pi-users',
      title: 'Expert Teachers',
      description: 'Learn from experienced educators with proven track records in their subjects.',
      highlighted: true
    },
    {
      icon: 'pi-book',
      title: 'Comprehensive Curriculum',
      description: 'Complete coverage of NEET, JEE, and board exam syllabi with regular updates.',
      highlighted: true
    },
    {
      icon: 'pi-sitemap',
      title: 'Small Batch Sizes',
      description: 'Personalized attention with limited students per batch for better interaction.',
      highlighted: true
    },
    {
      icon: 'pi-chart-line',
      title: 'Proven Results',
      description: 'High success rates with students achieving their dream colleges and careers.',
      highlighted: true
    }
  ];
}
