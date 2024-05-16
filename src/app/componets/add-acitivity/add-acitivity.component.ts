import { Component } from '@angular/core';
import { NewActivity } from '../../interfaces/NewActivity';
import { ActivitiesService } from '../../services/activities.service';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-acitivity',
  templateUrl: './add-acitivity.component.html',
  styleUrl: './add-acitivity.component.css'
})
export class AddAcitivityComponent {
  imageUrl: string | ArrayBuffer | null = null;

  newActivity: NewActivity = {
    name: '',
    description: '',
    type: '',
    time: '',
    city: '',
    photo: '', 
    idUser: this.userService.getToken()
  }
  constructor(private activitiesService: ActivitiesService, private cookies: CookieService, private userService: UserService){}
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
        const base64Image: string = e.target.result.split(',')[1]; //poner la imagen en base64 para pasarsela al spring boot
        this.newActivity.photo = base64Image;
      };
      reader.readAsDataURL(file);
    }
  }

  submitForm(){
    console.log(this.newActivity);
    this.activitiesService.addActivity(this.newActivity).subscribe((respuesta: any) =>{
      console.log(respuesta);
    });
    window.location.href = ""  
    
  }
}
