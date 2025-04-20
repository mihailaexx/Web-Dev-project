import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  template: `
    <h2>Регистрация</h2>
    <input [(ngModel)]="username" placeholder="Логин">
    <input [(ngModel)]="password" type="password" placeholder="Пароль">
    <button (click)="register()">Зарегистрироваться</button>
  `
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.username, this.password).subscribe();
  }
}
