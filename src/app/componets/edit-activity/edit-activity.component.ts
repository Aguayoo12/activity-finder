import { Component } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

import { Activity } from '../../interfaces/Activity';
import { NewActivity } from '../../interfaces/NewActivity';
import { NavigationServiceService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrl: './edit-activity.component.css'
})
export class EditActivityComponent {
  imageUrl: string | ArrayBuffer | null = null;
  activityId?: string; 
  activity?: Activity
  photo: String = "";
  constructor(private activitiesService: ActivitiesService, private cookies: CookieService, private navigationService: NavigationServiceService, private userService: UserService, private route: ActivatedRoute){}
  

  ngOnInit(): void {
    this.activityId = this.route.snapshot.paramMap.get('id') ?? "";
    this.findById();
    console.log(this.activityId);
    
    console.log(this.activity);
    
    if(this.activity){
      console.log(this.activity.photo);
      this.imageUrl = `data:image/jpg;base64,${this.activity.photo}`
      console.log(this.imageUrl);
      
      this.photo = this.activity.photo
      console.log(this.photo);
      
    }
  }
  

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
        const base64Image: string = e.target.result.split(',')[1];
        this.photo = base64Image
      };
      reader.readAsDataURL(file);
    }
    
  }

  submitForm(){
    if(this.activity){
      if(this.photo == ""){
        this.photo = this.activity.photo
      }
      console.log(this.activity);
      const newActivity: NewActivity = {
        name: this.activity.name,
        city: this.activity.city,
        description: this.activity.description,
        type: this.activity.type,
        time: this.activity.time,
        photo: this.photo,
        idUser: this.userService.getToken()
      }
      this.activitiesService.editActivity(newActivity ,this.activityId).subscribe()
      setTimeout(() => {
        window.location.href = ""
      }, 100);
    }
  }

  findById(){
    this.activitiesService.findById(this.activityId).subscribe(arg => this.activity = arg);
    console.log(this.activity);
    
  }



}
