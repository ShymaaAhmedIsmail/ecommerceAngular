import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getAllproducts(){
    return this.http.get("https://fakestoreapi.com/products")

  }
  getproductinfo(id:any){
    return this.http.get(`https://fakestoreapi.com/products/`+id)
   }
 
  getAllcatergory(){
    return this.http.get("https://fakestoreapi.com/products/categories")

  }
  getspecificcatergory(key:any){
    return this.http.get("https://fakestoreapi.com/products/category/" +key)

  }
  addnewProduct(product:any){
    return this.http.post("https://fakestoreapi.com/carts",product)
  }
  createcart(model:any){
    return this.http.post("https://fakestoreapi.com/carts",model)

  }
}
