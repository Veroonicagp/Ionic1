import { Component } from '@angular/core';

export interface Person{
  name:string,
  surname:string,
  age:number
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string = '';
  apellido: string = '';
  edad: number = 0;

  people:Person[] =[];
  constructor() {
  }
  agregarPersona() {
    // Validar que los campos no estén vacíos
    if (this.nombre.trim() !== '' && this.apellido.trim() !== '' && this.edad !== 0) {
      // Agregar persona a la lista
      this.people.push({
        name: this.nombre,
        surname:this.apellido,
        age:this.edad
      });

      // Limpiar los campos
      this.nombre = '';
      this.apellido = '';
      this.edad = 0;
    } else {
      console.log('Por favor, ingrese un nombre, apellido y edad');
    }
  }





}
