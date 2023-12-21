import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() p:any=[]
@Output() item=new EventEmitter()
buttonselect:boolean=false
@Output() num=new EventEmitter()

constructor(){}
add(){
this.item.emit({item:this.p,quantity:this.num})

}

}
