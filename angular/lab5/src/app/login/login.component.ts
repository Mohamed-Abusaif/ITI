import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginValues = {
    email: '',
    password: ''
  }
  login(form: any){
    console.log("Login button clicked");
    console.log(form);

    //write code to go to list route 

    




  }

}
