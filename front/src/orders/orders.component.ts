import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginaskComponent} from '../loginask/loginask.component';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-orders',
  imports: [CommonModule, LoginaskComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

  constructor(protected authService: AuthService) {  }

}
