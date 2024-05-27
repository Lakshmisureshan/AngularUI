import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddCustomerRequirement } from './Model/add-customerrequirement.model';
import { NewrequirementService } from './services/newrequirement.service';
import { Customer } from '../customer/Models/customer.model';
import { CustomerService } from '../customer/services/customer.service';
import { DivisionService } from '../division/services/division.service';
import { Division } from '../division/Models/division.model';
import { ProductService } from '../Product/Services/product.service';
import { Product } from '../Product/Models/product.model';
import { AgGridAngular } from 'ag-grid-angular';
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
  divisions: Division[] = [];
  products: Product[] = [];
  //divisions: Division[] = [];

  selectedCustomerId: any;

  selectedDivisionId: any;
  selectedProductId:any;

  placeholder: string = 'Select Customer';
  placeholder1:string='Select Division';
  placeholder2:string='Select Product';
  rowData: any[] = []; // Data to be displayed in the grid

  columnDefs = [
    { field: 'productid' },
    { field: 'name' }

    // Add more columns as needed
  ];

 














  gridApi: any;
  constructor( private fb: FormBuilder, private newrequirementservice :NewrequirementService, private customerservice :CustomerService, private divionservice:DivisionService, private productservice:ProductService)
  {
    this.userForm = this.fb.group({
     
      selectedCustomerId: ['', Validators.required],
      selectedDivisionId: ['', Validators.required],
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
    
 this.customers=response;
  }



  
});

this.productservice.getAllProducts().subscribe({
  next :(response) =>{
    console.log(response);
    
 this.products=response;
  }



  
});

this.divionservice.gteAllDivisions().subscribe({
  next :(response) =>{
    console.log(response);
    
 this.divisions=response;
  }

});








  }
  compareFn(item1: any, item2: any): boolean {
    return item1 && item2 ? item1.dvid === item2.dvid : item1 === item2;
  }
  onCustomerIdChange(customerId: any) {

   

    this.selectedCustomerId = customerId; // Update selectedCustomerId here

 

   if (customerId !== null && customerId !== undefined && customerId !== '') {

     this.placeholder = ''; // Clear placeholder text

   } else {

     this.placeholder = 'Select Customer'; // Reset placeholder text

    }

  }
  onDivisionChange(divisionid: any) {


    

    this.selectedDivisionId= divisionid; // Update selectedCustomerId here

 

   if (divisionid !== null && divisionid !== undefined && divisionid !== '') {

     this.placeholder1 = ''; // Clear placeholder text

   } else {

     this.placeholder1 = 'Select Division'; // Reset placeholder text

    }

  }

  onProductChange(productid: any) {


    

    this.selectedProductId= productid; // Update selectedCustomerId here

 

   if (productid !== null && productid !== undefined && productid !== '') {

     this.placeholder2 = ''; // Clear placeholder text

   } else {

     this.placeholder2 = 'Select Product'; // Reset placeholder text

    }

  }



  onGridReady(params: any): void {
    this.gridApi = params.api;
  }


  addDataToGrid(): void {
    if (this.selectedProductId) {
     
        const rowDataItem = {
          productid: this.selectedProductId.productid,
          name: this.selectedProductId.name,
         
        };

        alert(rowDataItem);
        this.rowData.push(rowDataItem);
        this.gridApi?.setRowData(this.rowData);
      
    }
  }








  onFormSubmit(){
    this.submitted = true;
    console.log(this.userForm.valid);
    if (this.userForm.valid) {
    this.model.CRreferenceNo = this.userForm.value.refno;
console.log( this.model.CRreferenceNo );
    this.model.customerid =this.selectedCustomerId.id;
this.model.divisionid=this.selectedDivisionId.dvid;
this.model.Date = this.userForm.value.Date;
this.model.CRreferenceNo =this.userForm.value.refno;
console.log(this.selectedDivisionId.dvid);
console.log(this.model);
  }
  }

}
