import { Component } from '@angular/core';
import { NavigationServiceService } from '../../services/navigation-service.service';
import { User } from '../../interfaces/User'
import { UserService } from '../../services/user.service';
import { UserRegister } from '../../interfaces/UserRegister';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  register: UserRegister = {
    username: "",
    name: "",
    surnames: "",
    gmail: "",
    password: "",
    password2: ""
  }

  constructor(private navigationService: NavigationServiceService, private userService: UserService, private cookies: CookieService){}

  goLogin(){
    this.navigationService.goLogin();
  }

  checkPasswords(form: NgForm) {
    const password1 = form.value.password;
    const password2 = form.value.password2;

    if (password1 !== password2) {
      form.controls['password2'].setErrors({ 'passwordMismatch': true });
    } else {
      form.controls['password2'].setErrors(null);
    }
  }

  saveUser(){
    console.log(this.register)
    this.userService.newUser(this.register).subscribe((respuesta: any) =>{
      console.log(respuesta);
      if (respuesta){
        setTimeout(() => {
          this.navigationService.goLogin();
        }, 100);
      }
    })
  }
}
