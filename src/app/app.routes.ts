import { Routes } from '@angular/router';
import { LoginComponent } from './Principal/login/login.component';
import { FormEmpleComponent } from './Interfaces/form-emple/form-emple.component';

export const routes: Routes = [
  { path: 'home', component: LoginComponent },
  { path: 'form', component: FormEmpleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
