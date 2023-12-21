import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ServiceService } from 'src/app/products/service.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart:any=[]
  total:any=0
  newtotal:any=0
  order:boolean=false
constructor(private activate:ActivatedRoute,private service:ServiceService,private tostr:ToastrService){
 
}
ngOnInit(){
  this.getcart()
  this.gettotal()
}
getcart(){
if("cart" in localStorage){
this.cart=JSON.parse(localStorage.getItem("cart")!)
console.log(this.cart)
}
}
gettotal(){
  this.total=0
  this.cart.forEach((element:any) => {   
  this.total+=element.item.price*element.quantity
  });

}
deleteall(){
  this.cart.length=0
  localStorage.removeItem('cart');
this.total=0
}
deleteproduct(index:number){
  this.cart.splice(index,1)
  this.gettotal()
  localStorage.setItem("cart",JSON.stringify(this.cart))
 
}

incQuantity(index:any){
  this.cart[index].quantity++
  this.gettotal()
  localStorage.setItem("cart",JSON.stringify(this.cart))
  
}
decQuantity(index:any){
  this.cart[index].quantity--
  this.gettotal()
  localStorage.setItem("cart",JSON.stringify(this.cart))
}

addcart(){
  let products=this.cart.map((item:any)=>{
return {productId:item.item.id,quantity:item.quantity}
  })
 let model= {
   
    userId:5,
    date:new Date(),
    products:products
    
}
this.service.createcart(model).subscribe(res=>{
 this.order=true
})
}

}


