import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { LandingPage } from './pages/landing-page/landing-page';
import { Register } from './pages/auth/register/register';

export const routes: Routes = [
  {path: '', component: LandingPage},
  { path: 'register', component: Register},
  { path: 'login', component: Login},
];
