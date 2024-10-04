import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
})
export class PersonalCardComponent  implements OnInit {

  private _isFav:boolean = false;
  @Input('name') name:string="";

  @Input('surname') surname:string="";

  @Input('age') age:number=0;

  @Input() set isFav(value:boolean){
    this._isFav = value;
  }

  get isFav():boolean{
    return this._isFav;
  }
  @Output() favClicked:EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}
  onFavClick(evt:MouseEvent){
    this.favClicked.emit();
  }


}
