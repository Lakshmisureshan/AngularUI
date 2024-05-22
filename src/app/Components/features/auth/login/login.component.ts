import { Component } from '@angular/core';
import { LoginRequest } from '../Models/login-request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userForm: FormGroup;
  model:LoginRequest;
  constructor( private fb: FormBuilder)
  {


    this.userForm = this.fb.group({
     email: ['', Validators.required],
     password: ['', Validators.required],
       // other form controls
    });



this.model ={
 email :'',
 password: ''
};
  }


  onFormSubmit(){
    this.model.email = this.userForm.value.email;
    this.model.password = this.userForm.value.password;
    console.log(this.model);
  }


}
