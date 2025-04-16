import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  legalinfo : boolean = false;
  driveinfo : boolean = false;
  courierinfo : boolean = false;

  toggleLegalInfo() {
    this.legalinfo = !this.legalinfo;
    // @ts-ignore
    document.getElementById("legalinfo").style.color = this.legalinfo ? "#242424" : "#868695";
  }
  toggleDriveInfo() {
    this.driveinfo = !this.driveinfo;
    // @ts-ignore
    document.getElementById("driveinfo").style.color = this.driveinfo ? "#242424" : "#868695";
  }
  toggleCourierInfo() {
    this.courierinfo = !this.courierinfo;
    // @ts-ignore
    document.getElementById("courierinfo").style.color = this.courierinfo ? "#242424" : "#868695";
  }
}
