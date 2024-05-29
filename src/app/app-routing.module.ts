import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomerComponent } from './Components/features/customer/list-customer/list-customer.component';
import { AddCustomerComponent } from './Components/features/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './Components/features/customer/edit-customer/edit-customer.component';
import { ListSupplierComponent } from './Components/features/supplier/list-supplier/list-supplier.component';
import { EditSupplierComponent } from './Components/features/supplier/edit-supplier/edit-supplier.component';
import { AddSupplierComponent } from './Components/features/supplier/add-supplier/add-supplier.component';
import { LoginComponent } from './Components/features/auth/login/login.component';
import { NewRequirementComponent } from './Components/features/new-requirement/new-requirement.component';
import { ListNewrequirementComponent } from './Components/features/new-requirement/list-customerrequirement/list-newrequirement/list-newrequirement.component';

const routes: Routes = [
{
  path :'admin/categories',
  component: ListCustomerComponent
  },
{
  path :'admin/customer/add',
  component: AddCustomerComponent
 },


 {
  path :'admin/getNewcustomerrequirement',
  component: ListNewrequirementComponent
 },








{
 path :'login',
 component:LoginComponent
 
 
  },
{

  path :'admin/newrequirement',
  component:NewRequirementComponent
},

  
  
   
 


 {
  path :'Admin/customer/:id',
  component: EditCustomerComponent
 },
 {

path :'admin/supplier',
component:ListSupplierComponent


 },

 
 {
  path :'admin/supplier/add',
  component: AddSupplierComponent
 },

 {

  path :'Admin/supplier/:id',
  component:EditSupplierComponent
  
  
   },







];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
