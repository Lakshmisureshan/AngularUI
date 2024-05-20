import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../Models/customer.model';
import { UpdateCustomer } from '../Models/updatecustomer.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements  OnInit , OnDestroy{
id :string |null =null;
paramassubstription ?:Subscription;
updatecustomersubscription ?: Subscription;
customer ?:Customer;
  constructor(private route: ActivatedRoute, private customerservice:CustomerService, private router:Router)
  {


  }

  ngOnInit(): void {
this.paramassubstription =this.route.paramMap.subscribe({
next :(paramas) => {
this.id = paramas.get('id');

if(this.id){
this.customerservice.getCategoryById(this.id).subscribe({

next :(response)=>{

this.customer=response;
}


});
}






}

})
}

ngOnDestroy(): void {
this.paramassubstription?.unsubscribe();
this.updatecustomersubscription?.unsubscribe();
}
onFormSubmit(): void {


if (this.customer && this.id)

{

var updatecustomer :UpdateCustomer={
name : this.customer.name,
address : this.customer.address,
country : this.customer.country,
emailID : this.customer.emailID,
phoneNo : this.customer.phoneNo,


};
console.log(updatecustomer);

this.updatecustomersubscription=this.customerservice.updatecustomer(this.id, updatecustomer).subscribe({


next : (response)=>{
this.router.navigateByUrl('./admin/customer');


  }
});


}


}


}
