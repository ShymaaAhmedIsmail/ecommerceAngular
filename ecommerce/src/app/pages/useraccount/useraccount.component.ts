import { Component } from '@angular/core';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent {
  login:boolean=true
  register:boolean=false

  loginfun(){
    this.login=true
    this.register=false
  }
  registerfun(){
    this.register=true
    this.login=false

  }
}
