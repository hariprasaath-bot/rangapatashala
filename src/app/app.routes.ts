import { Routes } from '@angular/router';
import { HomeComponent } from './components/landing-components/home/home';
import { DemoSessionComponent } from './components/landing-components/demo-session/demo-session';
import { CoursesComponent } from './components/courses/courses';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'demo-session', component: DemoSessionComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'contact', component: ContactComponent },
];
