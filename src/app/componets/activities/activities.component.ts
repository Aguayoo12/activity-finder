import { Component } from '@angular/core';
import { Activity } from '../../interfaces/Activity';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {
  activities?: Activity[]

  constructor(private activityService: ActivitiesService){}

  ngOnInit(){
    this.fetchActivities();
    
  }

  private fetchActivities(){
    this.activityService.findAll()
      .subscribe(arg => this.activities = arg);
    
  }
}
