import { Component } from '@angular/core';
import { Person } from '../share/interfaces/person';
import { PersonCard } from '../share/interfaces/person_card';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string = '';
  apellido: string = '';
  edad: number = 0;
  isFav: boolean = false;

  people:PersonCard[] =[];
  constructor() {
  }
  onFavClicked(idx:number){
    this.people[idx].isFav = !this.people[idx].isFav
  }
  agregarPersona() {
    if (this.nombre.trim() !== '' && this.apellido.trim() !== '' && this.edad !== 0) {
      this.people.push({
        name: this.nombre,
        surname:this.apellido,
        age:this.edad,
        isFav:this.isFav
      });

      this.nombre = '';
      this.apellido = '';
      this.edad = 0;
    } else {
      console.log('Por favor revise los datos introducidos');
    }
  }





}
