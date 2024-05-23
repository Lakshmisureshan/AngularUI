import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddCustomerRequirement } from './Model/add-customerrequirement.model';
import { NewrequirementService } from './services/newrequirement.service';
import { Customer } from '../customer/Models/customer.model';
import { CustomerService } from '../customer/services/customer.service';
@Component({
  selector: 'app-new-requirement',
  templateUrl: './new-requirement.component.html',
  styleUrls: ['./new-requirement.component.css']
})
export class NewRequirementComponent implements OnInit {
  userForm: FormGroup;
  model: AddCustomerRequirement;
  submitted = false;
  refereno ?:number|undefined;
  customers: Customer[] = [];
  selectedCustomerId: number | undefined;
  placeholder: string = 'Select Customer';
  constructor( private fb: FormBuilder, private newrequirementservice :NewrequirementService, private customerservice :CustomerService)
  {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      customerid: ['', Validators.required],
      divisionid: ['', Validators.required],
      Date:  ['',Validators.required],
      refno :this.refereno,
 
      // other form controls
    });





    this.model = {
      CRreferenceNo: '',
      customerid: 0,
      divisionid: 0,
      Approvedby: 0,
      approvedrejectedstatus:0,
      Date: new Date(),
      customerRequirementStatusid:1
    };


  }
  ngOnInit(): void {
    this.newrequirementservice.getmaxCustomerrequirementrefno().subscribe({
      next :(response) =>{
        console.log(response);
      this.refereno=response;
      this.userForm.patchValue({
        refno: this.refereno
      });
      }
      });


  
this.customerservice.getallCustomers().subscribe({
  next :(response) =>{
    console.log(response);
    alert(response);
 this.customers=response;
  }

});












  }

  onCustomerIdChange(customerId: any) {
    alert(customerId);
   // this.selectedCustomerId = customerId; // Update selectedCustomerId here
    // Manually clear placeholder text if a value is selected
   // if (customerId !== null && customerId !== undefined && customerId !== '') {
    //  this.placeholder = ''; // Clear placeholder text
   // } else {
   //   this.placeholder = 'Select Customer'; // Reset placeholder text
   // }
  }
  onFormSubmit(){



  }


}
