import { Component, Input, OnInit, input } from '@angular/core';
import { Activity } from '../../interfaces/Activity';
import { log } from 'node:console';
import { NavigationServiceService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css'
})
export class MainCardComponent implements OnInit {

  @Input() activity!: Activity 

  constructor(private navigationService: NavigationServiceService){}
  ngOnInit(): void{
    
  }

  goActivity(id: number){
    this.navigationService.goActivity(id)
  }

  goCategories(){
    this.navigationService.goCategorias()
  }
  
}
