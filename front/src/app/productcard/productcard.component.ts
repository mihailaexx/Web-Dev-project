import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-productcard',
  imports: [CommonModule],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent {

  protected readonly console = console;
}
