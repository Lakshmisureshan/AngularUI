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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListSupplierComponent } from './Components/features/supplier/list-supplier/list-supplier.component';
import { EditCustomerComponent } from './Components/features/customer/edit-customer/edit-customer.component';
import { EditSupplierComponent } from './Components/features/supplier/edit-supplier/edit-supplier.component';
import { AddSupplierComponent } from './Components/features/supplier/add-supplier/add-supplier.component';
import { NewRequirementComponent } from './Components/features/new-requirement/new-requirement.component';
import { LoginComponent } from './Components/features/auth/login/login.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListProductComponent } from './Components/features/Product/list-product/list-product.component';
import { AgGridModule } from 'ag-grid-angular';
import { ListNewrequirementComponent } from './Components/features/new-requirement/list-customerrequirement/list-newrequirement/list-newrequirement.component'; 

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
      ListCustomerComponent,
      AddCustomerComponent,
      ListSupplierComponent,
      EditCustomerComponent,
      EditSupplierComponent,
      AddSupplierComponent,
      NewRequirementComponent,
      LoginComponent,
      ListProductComponent,
      ListNewrequirementComponent,
     
    
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
    ReactiveFormsModule,
    NgSelectModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
