import { Component } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { Activity } from '../../interfaces/Activity';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  activities?: Activity[]
  constructor(private activityService: ActivitiesService){}

  ngOnInit(){
    this.fetchActivities();
    
  }

  private fetchActivities(){
    this.activityService.findAll()
      .subscribe(arg => this.activities = arg);
    
  }



  deleteActivity(id: any): void {
    this.activityService.deleteActivity(id).subscribe()
    window.location.reload()
    console.log('Actividad eliminada');
  }

}
