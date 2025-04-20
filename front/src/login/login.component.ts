import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  template: `
    <h2>Вход</h2>
    <input [(ngModel)]="username" placeholder="Логин">
    <input [(ngModel)]="password" type="password" placeholder="Пароль">
    <button (click)="login()">Войти</button>
  `
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password);
  }
}
