import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from './Components/Core/navbar/navbar/navbar.component';
import { ListCustomerComponent } from './Components/features/customer/list-customer/list-customer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './Components/features/customer/add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
      ListCustomerComponent,
      AddCustomerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,MatMenuModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
