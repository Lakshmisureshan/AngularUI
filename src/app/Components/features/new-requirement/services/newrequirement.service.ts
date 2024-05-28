import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCustomerRequirement } from '../Model/add-customerrequirement.model';
import { CustomerRequirement } from '../Model/customerrequirement.mode';
import { AddCustomerRequirementDetail } from '../Model/add-customerrequirementdetail.model';
import { CustomerRequirementDetail } from '../Model/customerrequirementdetail.model';

@Injectable({
  providedIn: 'root'
})
export class NewrequirementService {

  constructor(private http:HttpClient) { }


  getmaxCustomerrequirementrefno(): Observable<number> {
    return this.http.get<number>('https://localhost:7124/api/CustomerRequirement/GetLastcustomerRequirementreferenceno');
  }

  createcustomerrequirementheader(data: AddCustomerRequirement) : Observable<CustomerRequirement> {
    return this.http.post<CustomerRequirement>('https://localhost:7124/api/CustomerRequirement/CreateCustomerRequirement', data);
  }
  
  


  createcustomerrequirementDetail(data: AddCustomerRequirementDetail) : Observable<CustomerRequirementDetail> {
    return this.http.post<CustomerRequirementDetail>('https://localhost:7124/api/CustomerRequirement/CreateCustomerRequirementDetail', data);
  }





}
