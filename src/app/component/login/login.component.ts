import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService, ConstantService, HelperService } from './../../service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private constantService: ConstantService,
    private helperService: HelperService,
    private router: Router
  ) { }


  signInForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)])
  });


  v() { return this.signInForm.value }


  ngOnInit(): void {
    if (this.helperService.lsGetItem('email') || this.helperService.lsGetItem('token')) {
      if(this.helperService.lsGetItem('role') == '"ADMIN"'){
      this.router.navigate(['admin']);
      }else{
        this.router.navigate(['user']);
      }
    }
  }

  onSubmit() {
    if (!this.signInForm.valid) { return }
    this.apiService.postService(this.constantService.APIConfig.USER_LOGIN, this.signInForm.value).subscribe((res) => {
      if (res.status) {
        this.helperService.lsSetItem('email', res?.data?.email);
        this.helperService.lsSetItem('token', res?.data?.token);
        this.helperService.lsSetItem('role', res?.data?.role);

        if(res?.data?.role == 'ADMIN'){
          this.router.navigate(['admin']);
        }
        else{
          this.router.navigate(['user']);
        }

      } else {
        this.helperService.lsRemove('email')
        this.helperService.lsRemove('token')
        this.helperService.lsRemove('role');

      }
    })

    return this.signInForm.reset();
  }

  clearForm() {
    this.signInForm.reset();
  }
}
