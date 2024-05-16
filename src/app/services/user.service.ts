import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';
import { UserLogin } from '../interfaces/UserLogin';
import { UserGet } from '../interfaces/UserGet';
import { CookieService } from 'ngx-cookie-service';
import { UserRegister } from '../interfaces/UserRegister';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl="http://localhost:8080/user";
  private url="";
  constructor(private http:HttpClient, private cookies: CookieService) { }

  newUser(user: UserRegister): Observable<any>{
    this.url = this.apiUrl+"/register";
    return this.http.post<any>(this.url, user)
  }

  authenticate(userLogin: UserLogin): Observable<any>{
    this.url = this.apiUrl+"/authenticate";
    return this.http.post(this.url, userLogin);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken(): string {
    return this.cookies.get("token");
  }

  getUser(token: string): Observable<UserGet>{
    this.url = this.apiUrl+"/get-user/"+token
    return this.http.get<UserGet>(this.url)
  }

  ediitUser(user: UserGet, token: string): Observable<any>{
    this.url = this.apiUrl+"/edit/"+token;
    return this.http.put(this.url, user)
  }

  getRol(token: string): Observable<any>{
    this.url = this.apiUrl+"/getRol/"+token
    return this.http.get<User>(this.url)
  }
}
