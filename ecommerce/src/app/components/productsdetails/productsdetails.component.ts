import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/products/service.service';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.css']
})
export class ProductsdetailsComponent {
  id:any
  details:any
  loading:boolean=false
constructor(private activate:ActivatedRoute, private service:ServiceService){
this.id=this.activate.snapshot.paramMap.get("id")
console.log(this.id)
this.service.getproductinfo(this.id).subscribe(res=>{
  this.loading=true
  this.details=res
  console.log(this.details)
})
}



}
