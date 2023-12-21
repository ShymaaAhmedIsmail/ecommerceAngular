import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AllproductComponent } from './components/allproduct/allproduct.component';
import { ProductsdetailsComponent } from './components/productsdetails/productsdetails.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { CardComponent } from './shared/components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { ROUTES, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SelctComponent } from './shared/components/selct/selct.component';
import { FormsModule } from '@angular/forms';
import { UseraccountComponent } from './pages/useraccount/useraccount.component';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProductsComponent } from './adminpages/products/products.component';
import { DashboardComponent } from './adminpages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllproductComponent,
    ProductsdetailsComponent,
    CartComponent,
    CardComponent,
    HomeComponent,
    SelctComponent,
    UseraccountComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AboutComponent,
    LandingComponent,
    ProductsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()    
    
  ],
  providers: [
 
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
