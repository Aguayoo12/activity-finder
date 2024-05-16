import { Component } from '@angular/core';
import { NavigationServiceService } from '../../services/navigation-service.service';
import { UserService } from '../../services/user.service';
import { log } from 'console';
import { CookieService } from 'ngx-cookie-service';
import { UserGet } from '../../interfaces/UserGet';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  logoImage: string = 'https://i.ibb.co/bBSYnfS/logobueno-Photo-Room-png-Photo-Room.png'
  user!: UserGet 
  token: string = this.cookies.get('token');

  constructor(private navigationService: NavigationServiceService, private cookies: CookieService, private userService: UserService, private router: Router){}
  ngOnInit() {
    // this.token = this.cookies.get('token');
    // this.loadUserDetails();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.token = this.cookies.get('token');
        if(this.token != '')
        this.loadUser();
      }
    });
  }

  goLogin(){
    this.navigationService.goLogin();
  }


  singOut(){
    this.cookies.delete('token');
  }

  goAllActivities(){
    this.navigationService.goAllActivities()
  }

  goAddActivity(){
    this.navigationService.goAddActivity()
  }

  goUserActivity(){
    this.navigationService.goUserActivity()
  }

  goCategorias(){
    this.navigationService.goCategorias()
  }

  goDashboard(){
    this.navigationService.goDashboard()
  }

  goAdmin(){
    this.navigationService.goAdmin()
  }

  loadUser(){
    this.userService.getUser(this.token).subscribe((user: any) => {
      this.user = user
    })
  }
}
