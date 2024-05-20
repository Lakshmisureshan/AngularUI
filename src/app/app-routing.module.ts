import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomerComponent } from './Components/features/customer/list-customer/list-customer.component';
import { AddCustomerComponent } from './Components/features/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './Components/features/customer/edit-customer/edit-customer.component';
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
  path :'Admin/customer/:id',
  component: EditCustomerComponent
 }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
