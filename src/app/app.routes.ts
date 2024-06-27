import { Routes } from '@angular/router';
import { AlumnosComponent } from './alumno/alumnos/alumnos.component';
import { CursosComponent } from './curso/cursos/cursos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/cursos', pathMatch: 'full'},
  { path: 'cursos', component: CursosComponent},
  { path: 'alumnos', component: AlumnosComponent},
];
