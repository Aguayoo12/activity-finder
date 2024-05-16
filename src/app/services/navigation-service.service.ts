import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {

  constructor(private router: Router) { }

  goHome(){
    this.router.navigate(['']);
  }

  goLogin(){
    this.router.navigate(['login']);
  }

  goRegister(){
    this.router.navigate(['register']);
  }

  goAllActivities(){
    this.router.navigate(['allActivities']);
  }

  goAddActivity(){
    this.router.navigate(['addActivity'])
  }

  goUserActivity(){
    this.router.navigate(['userActivity'])
  }

  goCategorias(){
    setTimeout(() => {
      this.router.navigate(['categorias'])
    }, 100);
  }

  goActivity(id: number){
    this.router.navigate([`activity/${id}`])
  }

  goEdit(id: string){
    this.router.navigate([`edit/${id}`])
  }

  goDashboard(){
    this.router.navigate(['dashboard'])
  }

  goAdmin(){
    this.router.navigate(['admin'])
  }
}
