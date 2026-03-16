import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: Register },
];
