import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShardedService } from 'src/app/shared/service/sharded.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userinfo:any
  email:any
  password:any
  emailinp:any
  passwordinp:any
 adminemail:string="admin123@gmail.com"
 adminpass:string="admin@123"
constructor(private service:ShardedService, private router :Router ){

}
login(){
this.userinfo= localStorage.getItem('userinfo')
this.userinfo=JSON.parse(this.userinfo)
this.email=this.userinfo.email
this.password=this.userinfo.password
if(this.email==this.emailinp&&this.password==this.passwordinp){
  alert("login is successful")
this.router.navigate(['/home'])
}
else if(this.adminemail==this.emailinp&&this.adminpass==this.passwordinp){
  this.router.navigate(['/admin'])
}
else{
  alert("email or password is not correct")
}
console.log(this.email)
}


}
