import { Component } from '@angular/core';
import { ServiceService } from 'src/app/products/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  allproducts:any=[]
  constructor(private service:ServiceService){
    this.getproucts()
  }
  getproucts(){
  
    this.service.getAllproducts().subscribe(res=>{
     
  console.log(res)
  this.allproducts=res
  console.log("alll",this.allproducts)
    },err=>{
      alert("error")
    })
  }
}
