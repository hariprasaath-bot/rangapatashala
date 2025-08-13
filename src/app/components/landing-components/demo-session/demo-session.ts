import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModule } from 'primeng/select';
;
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';


@Component({
  selector: 'app-demo-session',
  standalone: true,
  templateUrl: './demo-session.html',
  styleUrls: ['./demo-session.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    DatePickerModule,
    TextareaModule,
    CheckboxModule,
    ButtonModule,
    RouterModule,
    InputTextModule
  ]
})
export class DemoSessionComponent {
  form!: FormGroup;
  selectedFlow: 'demo' | 'enroll' = 'demo';
  demoDate?: Date;
  startDate?: Date;
  selectedCourse?: string;
  selectedTimeSlot?: string;
  selectedDuration?: string;

  courses = [
    { label: 'NEET Preparation', value: 'neet' },
    { label: 'JEE Mains Preparation', value: 'jee' },
    { label: 'Class 10th Board Preparation', value: 'class10' }
  ];

  timeSlots = [
    { label: '9:00 AM - 10:00 AM', value: 'slot1' },
    { label: '11:00 AM - 12:00 PM', value: 'slot2' },
    { label: '4:00 PM - 5:00 PM', value: 'slot3' }
  ];

  preferredDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      studentName: ['', Validators.required],
      parentName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9()+\-\s]*$/)]],
      age: [null, [Validators.min(3), Validators.max(25)]],
      course: [null, Validators.required],
      grade: [''],
      demoDate: [null],
      timeSlot: [''],
      topics: [''],
      startDate: [null],
      duration: [''],
      previousExperience: [''],
      preferredDays: [[]],
      goals: [''],
      requirements: [''],
      agree: [false, Validators.requiredTrue]
    });
  }

  toggleDay(day: string) {
    const selected: string[] = [...this.form.get('preferredDays')!.value];
    const idx = selected.indexOf(day);
    if (idx > -1) selected.splice(idx, 1); else selected.push(day);
    this.form.get('preferredDays')!.setValue(selected);
  }

  isDaySelected(day: string): boolean {
    return (this.form.get('preferredDays')!.value as string[]).includes(day);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(this.form.value));
  }
}


