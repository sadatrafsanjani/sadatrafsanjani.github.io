import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {LoginRequest} from "../dto/request/LoginRequest";
import {AuthenticationService} from "../service/authentication.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loginRequest!: LoginRequest;

  constructor(private titleService: Title,
              private router: Router,
              private spinner: NgxSpinnerService,
              private authenticationService: AuthenticationService) {
    this.loginRequest = {
      username: '',
      password: ''
    }
  }

  ngOnInit(): void {

    this.titleService.setTitle("Login");
    this.redirectIfLoggedIn();

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  redirectIfLoggedIn(){

    if(this.authenticationService.isLoggedIn()){

      this.router.navigateByUrl('/blog/dashboard');
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(){

    this.spinner.show();

    this.loginRequest.username = this.username?.value;
    this.loginRequest.password = this.password?.value;

    this.authenticationService.login(this.loginRequest).subscribe((response : any) => {

      this.router.navigateByUrl('/blog/dashboard');

      this.spinner.hide();
    });
  }

}
