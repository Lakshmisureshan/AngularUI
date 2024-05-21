import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SupplierService } from '../Services/supplier.service';
import { Supplier } from '../Model/supplier.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent  implements OnInit {
  id :string |null =null;
  paramassubstription ?:Subscription;
  updatecustomersubscription ?: Subscription;
  supplier ?:Supplier;
  userForm!: FormGroup;
  submitted = false;
constructor(private route: ActivatedRoute,private supplierservice:SupplierService,private fb: FormBuilder )
{
  this.userForm = this.fb.group({
    name: ['', Validators.required],
    country: ['', Validators.required],
    // other form controls
   
    emailID: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    address :['', Validators.required],

    phoneNo :['', Validators.required]
    // other form controls
  });



}

ngOnInit(): void {
 this. paramassubstription =this.route.paramMap.subscribe({
next :(params) =>{
 this.id = params.get('id');
if(this.id){
this.supplierservice.getSupplierById(this.id).subscribe({
next :(response) =>{
  this.supplier=response;

  this.userForm.patchValue({
    name: this.supplier.name,
    country: this.supplier.country,
    emailID: this.supplier.emailID,
    address: this.supplier.address,
    phoneNo: this.supplier.phoneNo
  });
 
}

})
}
}
})
}
  onFormSubmit(){


  }

}
