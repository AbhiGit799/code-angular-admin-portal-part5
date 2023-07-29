import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { AuthService } from '../auth.service';
import { MustMatchValidator } from 'src/app/shared/validations/validation.validator';
import { Global } from '../../../shared/utility/global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  submitted: boolean = false;
  @ViewChild('nav') elnav: any;

  constructor(private _fb: FormBuilder, private _toastr: ToastrService, private _httpService: HttpService) { 

  }

  ngOnInit(){
    this.setLoginForm();
    this.setRegisterForm();
  }

  setLoginForm() {
    this.loginForm = this._fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  //strike sign means depricated.
  setRegisterForm() {
    this.registerForm = this._fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      userTypeId: [1],
      password: ['', Validators.compose([Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")])],
      confirmPassword: ['', Validators.required]
    },
      {
        validators: MustMatchValidator('password', 'confirmPassword')
      }
    );
  }

  get ctrl() {
    return this.registerForm.controls;
  }

  login() {
    if (this.loginForm.get('userName').value === "") {
      this._toastr.error("UserName is required !!", "Login");
    } else if (this.loginForm.get('password').value === "") {
      this._toastr.error("Password is required !!", "Login");
    } else {
      if (this.loginForm.valid) {
        // Call API
        this._httpService.post(Global.BASE_API_PATH + "UserMaster/Login/", this.loginForm.value).subscribe(res => {
          console.log(res);

          if (res.isSuccess) {
            alert("Login Success !!");
          }
        });
      }
    }
  }

  register(formData: FormGroup) {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this._httpService.post(Global.BASE_API_PATH + "UserMaster/Save/", formData.value).subscribe(res => {
      if (res.isSuccess) {
        this._toastr.success("Registration has been successfully done !!", "Registration");
        this.registerForm.reset({
          firstName: '',
          lastName: '',
          email: '',
          userTypeId: 1,
          password: '',
          confirmPassword: '',
        });
        this.submitted = false;
        this.elnav.select('logintab');
      } else {
        this._toastr.error(res.errors[0], "Registration")
      }
    });

  }

}







