import { Component } from '@angular/core';
import { Activity } from '../../interfaces/Activity';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activities?: Activity[]

  constructor(private activityService: ActivitiesService){}

  ngOnInit(){
    this.fetchActivities();
    
  }

  private fetchActivities(){
    this.activityService.findPopular()
      .subscribe(arg => this.activities = arg);
  }
}
