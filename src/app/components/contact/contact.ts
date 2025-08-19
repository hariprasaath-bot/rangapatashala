import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, NgForm } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule, 
    ButtonModule, 
    FormsModule, 
    CardModule,  
    TextareaModule, 
    CheckboxModule,
    SelectModule
  ]
})
export class ContactComponent {
  
  supportCards = [
    {
      title: 'Phone Support',
      icon: 'pi-phone',
      description: 'Speak directly with our education counselors',
      detail: '<strong>+1 (234) 567-8900</strong>',
      subDetail: 'Mon-Fri 9:00 AM - 8:00 PM IST',
      buttonLabel: 'Call Now'
    },
    {
      title: 'Email Support',
      icon: 'pi-envelope',
      description: 'Get detailed responses to your queries',
      detail: '<strong>info@rangapatashala.com</strong>',
      subDetail: 'Response within 24 hours',
      buttonLabel: 'Send Email'
    },
    {
      title: 'Live Chat',
      icon: 'pi-comment',
      description: 'Instant support for quick questions',
      detail: 'Available on website',
      subDetail: 'Mon-Fri 9:00 AM - 6:00 PM IST',
      buttonLabel: 'Start Chat'
    },
    {
      title: 'Book Consultation',
      icon: 'pi-calendar',
      description: 'Free 1-on-1 career guidance session',
      detail: '30-minute session',
      subDetail: 'Flexible scheduling',
      buttonLabel: 'Book Now'
    }
  ];

  courses = [
    { label: 'NEET Crash Course', value: 'neet-crash' },
    { label: 'JEE Advanced Prep', value: 'jee-advanced' },
    { label: 'Board Exam Tutoring', value: 'board-exam' },
    { label: 'Other Inquiry', value: 'other' }
  ];

  onSubmit(form: NgForm) {
    if (form.valid) {
      // TODO: Implement API call for form submission
      alert('Form submitted!');
    }
  }
}
