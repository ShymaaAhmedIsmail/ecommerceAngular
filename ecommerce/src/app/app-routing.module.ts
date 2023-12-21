import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductComponent } from './components/allproduct/allproduct.component';
import { ProductsdetailsComponent } from './components/productsdetails/productsdetails.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { UseraccountComponent } from './pages/useraccount/useraccount.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './adminpages/products/products.component';
import { DashboardComponent } from './adminpages/dashboard/dashboard.component';

const routes: Routes = [
  {path:"home",component: HomeComponent},
 {path:"products",component: AllproductComponent} ,
 {path:"details/:id",component: ProductsdetailsComponent} ,
 {path:"cart",component: CartComponent} ,
 {path:"account",component:UseraccountComponent},
 {path:"contact",component:ContactComponent},
 {path:"about",component:AboutComponent},
 {path:"admin",component:DashboardComponent},
 {path:"**",redirectTo: "home",pathMatch:"full"} ,




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
