import { Component } from '@angular/core';
import { NavigationServiceService } from '../../services/navigation-service.service';
import { UserLogin } from '../../interfaces/UserLogin';
import { UserService } from '../../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Rol } from '../../interfaces/Rol';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {     

  user: UserLogin = {
    username: "",
    password: ""
  }
  constructor(private navigationService: NavigationServiceService, private userService: UserService, private cookies: CookieService){}

  goRegister(){
    this.navigationService.goRegister();
  }

  login(){
    this.userService.authenticate(this.user).subscribe((response: any) => {
      console.log(response);
      if(response){
        this.userService.setToken(response.token)
        this.userService.getRol(this.userService.getToken()).subscribe((rol: any) => {
        this.cookies.set("rol", rol.rol);
        })
        setTimeout(() => {
          window.location.href = ""  
        }, 100);
      }
    })
  }
}
