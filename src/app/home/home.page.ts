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

  people:Person[] =[];
  constructor() {
    this.people.push({
      name:"fernando",
      surname:"lucas gahah",
      age:20
    });
    this.people.push({
      name:"haiuad",
      surname:"lucas gahah",
      age:23
    });
  }



}
