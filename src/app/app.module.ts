import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { CardsComponent } from './dashboard/cards/cards.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { MarketComponent } from './market/market.component';
import { CartComponent } from './cart/cart.component';
import { CreateuserComponent } from './users/createuser/createuser.component';
import { ViewusersComponent } from './users/viewusers/viewusers.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    CardsComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    ProductsComponent,
    MarketComponent,
    CartComponent,
    CreateuserComponent,
    ViewusersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgChartsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
