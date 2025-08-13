import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CardModule],
  template: `
    <div class=" text-center py-8 px-4">
      <h2 class="text-4xl font-bold mb-3">Why Choose Rangapatashala?</h2>
      <p class="text-xl text-color-secondary mb-6">We specialize in academic excellence for competitive exams and board preparations. Quality education with proven results at affordable prices.</p>
      <div class="grid">
        <div class="col-12 md:col-4 p-3">
          <p-card styleClass="h-full">
            <ng-template pTemplate="header">
              <div class="flex justify-content-center p-3">
                <i class="pi pi-sitemap text-4xl" style="color: var(--primary-color)"></i>
              </div>
            </ng-template>
            <h3 class="text-xl font-bold">Targeted Preparation</h3>
            <p class="text-color-secondary">Focused curriculum designed specifically for NEET, JEE Mains, and board exams with exam-specific strategies and practice materials.</p>
          </p-card>
        </div>
        <div class="col-12 md:col-4 p-3">
          <p-card styleClass="h-full">
            <ng-template pTemplate="header">
              <div class="flex justify-content-center p-3">
                <i class="pi pi-users text-4xl" style="color: var(--primary-color)"></i>
              </div>
            </ng-template>
            <h3 class="text-xl font-bold">Expert Faculty</h3>
            <p class="text-color-secondary">Experienced teachers with proven track records in competitive exam coaching and board exam preparations with personalized attention.</p>
          </p-card>
        </div>
        <div class="col-12 md:col-4 p-3">
          <p-card styleClass="h-full">
            <ng-template pTemplate="header">
              <div class="flex justify-content-center p-3">
                <i class="pi pi-chart-line text-4xl" style="color: var(--primary-color)"></i>
              </div>
            </ng-template>
            <h3 class="text-xl font-bold">Proven Results</h3>
            <p class="text-color-secondary">High success rates in competitive exams with students securing top ranks in NEET, JEE, and excellent board exam scores.</p>
          </p-card>
        </div>
      </div>
    </div>
  `,
})
export class WhyChooseUsComponent {}
