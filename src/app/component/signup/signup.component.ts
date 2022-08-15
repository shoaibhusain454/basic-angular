import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  constructor(private formBuilder: FormBuilder) { }

  signInForm = this.formBuilder.group({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    confirmPassword: new FormControl('', [Validators.required])
  });


  v() { return this.signInForm.value }

 

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.signInForm.valid) { return }
    else {
      console.log(this.signInForm.value)
      return this.signInForm.reset();
    }
  }

  clearForm(){
     this.signInForm.reset();
  }

}
