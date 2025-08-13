import { Component } from '@angular/core';

import { WhyChooseUsComponent } from '../why-choose-us/why-choose-us.component';
import { CoursesComponent } from '../../courses/courses';
import { WallOfLoveComponent } from '../wall-of-love/wall-of-love';
import { ContactComponent } from '../contact/contact';
import { ButtonModule } from 'primeng/button';
import { HeroComponent } from '../hero/hero';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, WhyChooseUsComponent, CoursesComponent, WallOfLoveComponent, ContactComponent, ButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
