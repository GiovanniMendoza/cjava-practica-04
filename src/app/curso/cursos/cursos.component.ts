import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  public curso: Curso = { id: 0, nombre: '', horas: 0, creditos: 0, categoria: 'Otros'};

  //creando un arreglo de la clase curso
  public cursos: Curso[] = this.listarCursos;

  get listarCursos():Curso[]{
    return [
      { id: 1, nombre: 'html 5', horas: 4, creditos: 5, categoria: 'Software'},
      { id: 2, nombre: 'javascript', horas: 10, creditos: 7, categoria: 'Software'},
      { id: 3, nombre: 'css', horas: 5, creditos: 8, categoria: 'Software'},
      { id: 4, nombre: 'Java', horas: 20, creditos: 10, categoria: 'Software'},
      { id: 5, nombre: 'Scrum Master', horas: 15, creditos: 20, categoria: 'Gestion'}
    ];
  }

}
