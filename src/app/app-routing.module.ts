import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'elctronic',component:ElectronicsComponent},
  {path:'home/elctronic',component:ElectronicsComponent},
  {path:'detils/:id',component:DetailsComponent},
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent }, 
  { path: '**', redirectTo: '' }
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
