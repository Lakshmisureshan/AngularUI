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
import { Router } from '@angular/router';
import { AddCustomerRequirementDetail } from './Model/add-customerrequirementdetail.model';
@Component({
  selector: 'app-new-requirement',
  templateUrl: './new-requirement.component.html',
  styleUrls: ['./new-requirement.component.css']
})
export class NewRequirementComponent implements OnInit {
  userForm: FormGroup;

  model: AddCustomerRequirement;
  model1: AddCustomerRequirementDetail;
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
    { headerName: 'Product ID', field: 'productId'},
    { headerName: 'Product Name', field: 'name',  sortable: true, filter: true },
    // Add more columns as needed
  ];

















 
defaultcolDef ={
flex:1,
minwidth:100

}


  gridApi: any;
  constructor( private fb: FormBuilder, private newrequirementservice :NewrequirementService, private customerservice :CustomerService, private divionservice:DivisionService, private productservice:ProductService, private router:Router)
  {
    this.userForm = this.fb.group({
     
      selectedCustomerId: ['', Validators.required],
      selectedDivisionId: ['', Validators.required],
      Date:  ['',Validators.required],
      refno :this.refereno,
 
      // other form controls
    });


this.model1 ={

crid:"",
productid :0
  
}


    this.model = {
      cRreferenceNo: "",
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

 console.log(this.selectedProductId);

   if (productid !== null && productid !== undefined && productid !== '') {

     this.placeholder2 = ''; // Clear placeholder text

   } else {

     this.placeholder2 = 'Select Product'; // Reset placeholder text

    }

  }



  onGridReady(params: any): void {
    this.gridApi = params.api;
  }


  addDataToGrid(event: Event): void {
    alert(this.selectedProductId);
    if (this.selectedProductId) {
     
        const rowDataItem = {
          productId: this.selectedProductId.productId,
          name: this.selectedProductId.name,
         
        };

        console.log("cbhfghfgh",rowDataItem);
        this.rowData.push(rowDataItem);
        this.gridApi?.setGridOption('rowData', this.rowData);
      
    }
    event.stopPropagation();
  }








onFormSubmit(){
this.submitted = true;
if (this.userForm.valid) {
 this.model.cRreferenceNo  = this.userForm.value.refno;
this.model.customerid =this.selectedCustomerId.id;
this.model.divisionid=this.selectedDivisionId.dvid;
this.model.Date = this.userForm.value.Date;
this.model.approvedrejectedstatus = 1;
this.model.customerRequirementStatusid =1
this.model.Approvedby=1
 }
 alert(this.model);
this.newrequirementservice.createcustomerrequirementheader(this.model)
.subscribe({
  next: (response) => {

    alert(JSON.stringify(response));
    var crid=response.cRreferenceNo;
 alert(response.cRreferenceNo);
 
   for (const rowDataItem of this.rowData) {
    this.model1.productid =rowDataItem.productId;
    this.model1.crid = crid; 

    this.newrequirementservice.createcustomerrequirementDetail(this.model1)
    .subscribe({
      next: (detailResponse) => {
        // Handle detail insertion response if needed
        console.log("Detail inserted:", detailResponse);
      },
      error: (error) => {
        // Handle error if detail insertion fails
        console.error("Error inserting detail:", error);
      }
    });


























  }
    this.router.navigateByUrl('admin/categories');
  }
});








}
}


