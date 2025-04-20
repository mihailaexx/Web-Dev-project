import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/account';
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}

  register(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/register/`, { username, password });
  }

  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/login/`, { username, password }).subscribe((response: any) => {
      localStorage.setItem('token', response.access);
      console.log('Токен получен успешно:', response.access);
      this.router.navigate(['/profile']);
    },
    (error) => {
      console.error('Ошибка входа:', error);
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
