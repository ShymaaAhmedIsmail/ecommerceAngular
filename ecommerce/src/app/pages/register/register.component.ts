import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

userinfo = {
  username: "",
    email:"",
    password:"",
    cofirmpass:"",
}
login:boolean=false
register:boolean=true

  saveData(): void {
    if (this.userinfo.username && this.userinfo.username.trim() !== ''&&this.userinfo.email && this.userinfo.email.trim() !== '' &&this.userinfo.password && this.userinfo.password.trim() !== '' && this.userinfo.cofirmpass && this.userinfo.cofirmpass.trim() !== '') {
      if(this.userinfo.password==this.userinfo.cofirmpass){
        localStorage.setItem('userinfo',JSON.stringify(this.userinfo) );
        alert('register suceessful');
        this.login=true
        this.register=false
      }
      else{
        alert('the password cofirm is incorrect');
      }
    
    } else {
      alert('Please enter some data!');
    }
  }
  loginfun(){
    this.login=true
    this.register=false
  }
}
