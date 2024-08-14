import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedIn: boolean = false;
  private manger: boolean = false;


  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
      return this.http.post(`${this.baseUrl}/login`, { username: username, password: password }, {withCredentials: true });
  }

  logout(): Observable<any> {
      return this.http.get(`${this.baseUrl}/logout`,  { responseType: 'text', withCredentials: true });
  }

  getCurrentUser(): Observable<any> {
      return this.http.get(`${this.baseUrl}/current-user`, { responseType: 'text',withCredentials: true } );
  }

  isLoggedIn(){
      return this.loggedIn || sessionStorage.getItem('isLoggedIn') === 'true';
  }

  isManger(){
    return this.manger || sessionStorage.getItem('isManger') === 'true';
}

}
