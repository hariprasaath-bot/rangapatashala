import { Routes } from '@angular/router';
import { HomeComponent } from './components/landing-components/home/home';
import { DemoSessionComponent } from './components/landing-components/demo-session/demo-session';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'demo-session', component: DemoSessionComponent }
];
