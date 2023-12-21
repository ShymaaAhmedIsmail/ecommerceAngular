import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShardedService {

  constructor(private http:HttpClient) { 

  }
  login(userinfo :any){
    return this.http.post("https://fakestoreapi.com/auth/login",userinfo)
  }
}
