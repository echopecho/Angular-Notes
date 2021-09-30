import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user') || "{}"))

  public login(username: string, password: string) {
    return this.http.post(`${environment.apiUrl}/api/auth/login`, { username, password })
      .pipe(
        tap(res => console.log(res))
      )
  }
}
