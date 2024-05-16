import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from './../interfaces/Activity';
import { CookieService } from 'ngx-cookie-service';
import { NewActivity } from '../interfaces/NewActivity';
@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private apiUrl="http://localhost:8080/actividad";
  private url="";

  constructor(private http:HttpClient, private cookies:CookieService) {   }

    findAll(): Observable<Activity[]> {
      this.url=`${this.apiUrl}/findAll`;
      return this.http.get<Activity[]>(this.url);
    }

    findPopular(): Observable<Activity[]> {
      this.url=`${this.apiUrl}/findLast`;
      return this.http.get<Activity[]>(this.url);
    }

    findByUserId(): Observable<Activity[]> {
      this.url=`${this.apiUrl}/findUserId/${this.cookies.get('token')}`;
      return this.http.get<Activity[]>(this.url);
    }

    findByType(type: string): Observable<Activity[]> {
      this.url=`${this.apiUrl}/findType/${type}`;
      return this.http.get<Activity[]>(this.url);
    }

    findById(id: any): Observable<Activity> {
      this.url=`${this.apiUrl}/${id}`;
      return this.http.get<Activity>(this.url);
    }

    addActivity(activity: NewActivity): Observable<any>{
      this.url = this.apiUrl+"/newactivity";
      return this.http.post(this.url, activity);
    }

    editActivity(activity: NewActivity, id: any): Observable<any>{
      this.url = this.apiUrl+"/edit/"+id;
      return this.http.put(this.url, activity);
    }

    deleteActivity(id: any): Observable<any>{
      this.url = this.apiUrl+"/delete/"+id;
      return this.http.delete(this.url);
    }

}
