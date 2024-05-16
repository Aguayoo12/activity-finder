import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../../services/activities.service';
import { Activity } from '../../interfaces/Activity';
import { UserGet } from '../../interfaces/UserGet';
import { UserService } from '../../services/user.service';
import { NavigationServiceService } from '../../services/navigation-service.service';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../interfaces/Comment';

@Component({
  selector: 'app-activity-view',
  templateUrl: './activity-view.component.html',
  styleUrl: './activity-view.component.css'
})
export class ActivityViewComponent {
  activityId: string = ''; 
  activity?: Activity;
  comments!: Comment[];
  user?: UserGet;
  comment: Comment = {
    comment : '',
    activity : this.route.snapshot.paramMap.get('id') ?? "",
    username : this.userService.getToken(),
    id: 0
  }
  showConfirmationDialog = false;
  constructor(private route: ActivatedRoute, private activitiesService: ActivitiesService, private userService: UserService, private navigationService: NavigationServiceService
    , private commentService: CommentService) { }

  ngOnInit(): void {
    this.activityId = this.route.snapshot.paramMap.get('id') ?? "";
    console.log(this.activityId); 
    this.findById()
    console.log(this.activity);
    if(this.userService.getToken()){
      this.userService.getUser(this.userService.getToken()).subscribe(arg => this.user = arg)
    }
    this.getComments()
    console.log(this.comments);
    
  }

  private findById(){
    this.activitiesService.findById(this.activityId).subscribe(arg => this.activity = arg)
  }

  isLoging(): boolean{
    if(this.userService.getToken()){
      return true;
    }else{
      return false;
    }
  }

  goEditActivity(){
    if(this.activityId){
      this.navigationService.goEdit(this.activityId);
    }
  }

  getComments(){
    this.commentService.findByActivityId(this.activityId).subscribe(arg => this.comments = arg)
  }

  addComment(){
    this.commentService.addComment(this.comment).subscribe()
    window.location.reload()
  }

  deleteComment(id: any){
    this.commentService.deleteComment(id).subscribe()
    window.location.reload()
  }

  // confirmDelete(id:any): void {
  //   const confirmDelete = window.confirm('¿Estás seguro de que quieres borrar esta actividad?');
  //   if (confirmDelete) {
  //     this.activitiesService.deleteActivity(id).subscribe()
  //   window.location.href = ""
  //     console.log('Actividad borrada');
  //   } else {
  //     console.log('Cancelado');
  //   }
  // }



  confirmDelete(): void {
    this.showConfirmationDialog = true;
  }

  deleteActivity(id: any): void {
    this.activitiesService.deleteActivity(id).subscribe()
    window.location.href = ""
    console.log('Actividad eliminada');
    this.showConfirmationDialog = false;
  }

  cancelDelete(): void {
    this.showConfirmationDialog = false;
  }
}
