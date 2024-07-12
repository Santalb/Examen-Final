import { Routes } from '@angular/router';
import { LoginComponent } from './Principal/login/login.component';
import { InicioComponent } from './Interfaces/inicio/inicio.component';

export const routes: Routes = [
  { path: 'home', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
