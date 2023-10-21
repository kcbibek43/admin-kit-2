import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './dashboard/cards/cards.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { MarketComponent } from './market/market.component';
import { CartComponent } from './cart/cart.component';
import { CreateuserComponent } from './users/createuser/createuser.component';
import { ViewusersComponent } from './users/viewusers/viewusers.component';

const routes: Routes = [
  {
    path : "",
    component : UsersComponent
  },
  {
    path : "dashboard",
    component : CardsComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "register",
    component : RegisterComponent
  },
  {
    path : "users",
    component : UsersComponent,
  },
  {
    path : "users/create",
    component : CreateuserComponent
  },
  {
    path : "user/:id",
    component : ViewusersComponent
  },

  {
    path : "products",
    component : ProductsComponent
  },
  {
    path : "market",
    component : MarketComponent
  },
  {
    path : "cart",
    component : CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
