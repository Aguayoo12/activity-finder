import { Component } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { Activity } from '../../interfaces/Activity';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  activitiesCaminar?: Activity[]
  activitiesCorrer?: Activity[]
  activitiesNadar?: Activity[]
  activitiesBicicleta?: Activity[]
  activitiesPelota?: Activity[]
  constructor(private activityService: ActivitiesService){}

  ngOnInit(): void{
    this.findByTypeCaminar()
    this.findByTypeCorrer()
    this.findByTypeBicicleta()
    this.findByTypeNadar()
    this.findByTypePelota()
  }
  

  private findByTypeCaminar(){
    this.activityService.findByType('Caminar')
      .subscribe(arg => this.activitiesCaminar = arg);
  }

  private findByTypeCorrer(){
    this.activityService.findByType('Correr')
      .subscribe(arg => this.activitiesCorrer = arg);
  }
  private findByTypeNadar(){
    this.activityService.findByType('Nadar')
      .subscribe(arg => this.activitiesNadar = arg);
  }
  private findByTypeBicicleta(){
    this.activityService.findByType('Bicicleta')
      .subscribe(arg => this.activitiesBicicleta = arg);
  }
  private findByTypePelota(){
    this.activityService.findByType('Pelota')
      .subscribe(arg => this.activitiesPelota = arg);
  }
}
