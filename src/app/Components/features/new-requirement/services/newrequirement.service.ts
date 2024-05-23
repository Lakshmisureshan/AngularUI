import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewrequirementService {

  constructor(private http:HttpClient) { }


  getmaxCustomerrequirementrefno(): Observable<number> {
    return this.http.get<number>('https://localhost:7124/api/CustomerRequirement/GetLastcustomerRequirementreferenceno');
  }



}
