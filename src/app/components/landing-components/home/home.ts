import { Component } from '@angular/core';

import { WhyChooseUsComponent } from '../why-choose-us/why-choose-us.component';
import { WallOfLoveComponent } from '../wall-of-love/wall-of-love';
import { ButtonModule } from 'primeng/button';
import { HeroComponent } from '../hero/hero';
import { ContactMailComponent } from '../contact-mail/contact-mail';
import { FeaturedCoursesComponent } from '../featured-courses/featured-courses.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, WhyChooseUsComponent, WallOfLoveComponent, ContactMailComponent, ButtonModule, FeaturedCoursesComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
