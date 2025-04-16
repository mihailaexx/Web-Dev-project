import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/accounts/';
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}

  register(username: string, password: string) {
    return this.http.post(`${this.apiUrl}register/`, { username, password });
  }

  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}login/`, { username, password }).subscribe((res: any) => {
      localStorage.setItem('token', res.access);
      console.log(res);
    });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
