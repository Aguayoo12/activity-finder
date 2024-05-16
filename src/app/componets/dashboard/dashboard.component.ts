import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserGet } from '../../interfaces/UserGet';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  user!: UserGet;
  token: string = this.cookies.get('token')
  imageUrl!: String;
  constructor(private userService: UserService, private cookies: CookieService){}

  ngOnInit(){
    if(this.token){
      this.userService.getUser(this.token).subscribe((user: any) => {
        this.user = user;
        this.imageUrl = `data:image/jpg;base64,${this.user.avatar}`
      });
    }    
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
        const base64Image: string = e.target.result.split(',')[1]; //poner la imagen en base64 para pasarsela al spring boot
        this.user.avatar = base64Image;
      };
      reader.readAsDataURL(file);
    }
  }

  editUser(){
    this.userService.ediitUser(this.user, this.token).subscribe()
    window.location.reload()
  }


}
