import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm : FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('' , [Validators.required, Validators.minLength(3)]),
      email: new FormControl('' , [Validators.required, Validators.email]),
      //username contains no spaces
      username: new FormControl('' , [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z0-9]*$')]), 
      password: new FormControl('' , [Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@%$#])[A-Za-z\\d@%$#]{8,}$'),]),
      confirmPassword: new FormControl('')
    });
  }

  register() {
    console.log(this.registerForm.value);
  }
}
