import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selct',
  templateUrl: './selct.component.html',
  styleUrls: ['./selct.component.css']
})
export class SelctComponent {
@Input() data:any=[]
@Output() selectedval:any=new EventEmitter()
filtercategory(event:any){
this.selectedval.emit(event)
}
}
