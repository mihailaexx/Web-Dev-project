import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-loginask',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './loginask.component.html',
  styleUrl: './loginask.component.css'
})
export class LoginaskComponent {

  constructor(protected authService: AuthService) {  }

}
