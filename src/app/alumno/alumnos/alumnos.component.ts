import { Component } from '@angular/core';
import { Alumno } from './alumno';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {

  public alumno: Alumno = {id:0, nombres:'', apellidos:'', fechaNacimiento: new Date, direccion:'', correo:'', telefono:''};

  public alumnos : Alumno[] = this.listarAlumnos;

  get listarAlumnos():Alumno[]{
    return [
      {id:1, nombres:'Giovanni', apellidos:'Mendoza', fechaNacimiento: new Date, direccion:'Benjamin 456', correo:'amendoza@cjava.gob.pe', telefono:'4310285'},
      {id:2, nombres:'Carlos', apellidos:'Zevallos', fechaNacimiento: new Date, direccion:'Orbegoso 867', correo:'czecallos@cjava.gob.pe', telefono:'2589678'},
      {id:3, nombres:'Frank', apellidos:'Reyes', fechaNacimiento: new Date, direccion:'Dalis 123', correo:'freyes@cjava.gob.pe', telefono:'2489657'}
    ];
  }


}
