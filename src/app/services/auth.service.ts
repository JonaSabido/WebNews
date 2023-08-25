import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData, LoginResponse } from '../interfaces/interfaces';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private helper = new JwtHelperService()
  private apiUrlLogin = 'http://localhost:3000/api/auth/login';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

  }

  login(data: LoginData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrlLogin, data);
  }

  logOut() {
    localStorage.removeItem("token_web_news")
    this.router.navigate(['/login'])
  }

  validateToken(token: string): boolean {
    return !this.helper.isTokenExpired(token)
  }

  getDataToken(token: string) {
    return this.helper.decodeToken(token)
  }


}
