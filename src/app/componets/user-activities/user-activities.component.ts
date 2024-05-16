import { Component } from '@angular/core';
import { Activity } from '../../interfaces/Activity';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-user-activities',
  templateUrl: './user-activities.component.html',
  styleUrl: './user-activities.component.css'
})
export class UserActivitiesComponent {
  activities?: Activity[]

  constructor(private activityService: ActivitiesService){}

  ngOnInit(){
    this.fetchActivities();
    
  }

  private fetchActivities(){
    this.activityService.findByUserId()
      .subscribe(arg => this.activities = arg);
    
  }
}
