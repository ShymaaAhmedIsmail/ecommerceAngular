import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/products/service.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent {
  allproducts:any=[]
  allcategory:any=[]
  category:any
  specific:any
  loading:boolean=false
  singleproduct:any
  product :any
productid:any
cart:any=[]
exit:any
quantity:number=1

constructor(private activate:ActivatedRoute, private serivice:ServiceService){}
ngOnInit() {
  this.getproucts()
  this.getcategory()

}
getproucts(){
  this.loading=false
  this.serivice.getAllproducts().subscribe(res=>{
    this.loading=true
console.log(res)
this.allproducts=res
  },err=>{
    alert("error")
  })
}
getcategory(){
  this.loading=false
  this.serivice.getAllcatergory().subscribe(res=>{
  this.loading=true
this.allcategory=res
console.log(this.allcategory)
  },err=>{
    alert("error")
  })
}
filtercategory(event:any){
  this.loading=false

  let val=event.target.value
  this.category=val

  console.log(this.category)
  if (this.category=="All"){
    this.loading=true
    this.getproucts()
  }else{
    this.serivice.getspecificcatergory(val).subscribe(res=>{
      this.allproducts=res
      this.loading=true
  console.log(res)
    })
  }

}
addtocart(event:any){
   if("cart" in localStorage){
    this.cart=JSON.parse(localStorage.getItem("cart")!)
    this.exit=this.cart.find((item:any)=> item.item.id==event.item.id)
   console.log(this.exit)
    if(this.exit){
      alert("product already in your cart")
  
  
  
    }
    else{
      this.cart.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cart))
    }
 
   }
   else{
    this.cart.push(event)
localStorage.setItem("cart",JSON.stringify(this.cart ))
   }
}

  

}

