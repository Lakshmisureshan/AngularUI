import { Injectable } from '@angular/core';
import { LoginRequest } from '../Models/login-request.model';
import { Observable } from 'rxjs';
import { LoginResponse } from '../Models/login-response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


login(request:LoginRequest) :Observable<LoginResponse>
{

  return this.http.post<LoginResponse>('https://localhost:7124/api/Auth/login', request);
}


}
