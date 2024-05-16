import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl="http://localhost:8080/commentario";
  private url="";
  constructor(private http:HttpClient) { }

  findByActivityId(id: any): Observable<Comment[]> {
    this.url=`${this.apiUrl}/findByActivity/${id}`;
    return this.http.get<Comment[]>(this.url);
  }

  findByUserId(id: any): Observable<Comment[]> {
    this.url=`${this.apiUrl}/findByUser/${id}`;
    return this.http.get<Comment[]>(this.url);
  }

  addComment(comment: Comment): Observable<any>{
    this.url = this.apiUrl+"/add";
    return this.http.post(this.url, comment);
  }

  deleteComment(id: any): Observable<any>{
    this.url = this.apiUrl+"/delete/"+id;
    return this.http.delete(this.url);
  }
}
