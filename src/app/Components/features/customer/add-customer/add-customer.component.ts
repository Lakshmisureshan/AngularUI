import { Component } from '@angular/core';
import { Customer } from '../Models/customer.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { AddCustomer } from '../Models/addcustomer.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  myForm: FormGroup;
  model: AddCustomer;
  constructor(private customerservice:CustomerService ,private router: Router,

    private fb: FormBuilder

  ){

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      // Other form controls
    });






    this.model = {
  
      name:'',
      address:'',
      country :'',
      phoneNo :'',
      emailID:''
    }

  }

  onFormSubmit(): void {
    console.log(this.model);
    this.customerservice.createcustomer(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('admin/categories');
      }
    });
  }




}
