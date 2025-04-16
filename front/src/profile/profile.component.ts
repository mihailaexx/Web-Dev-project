import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [
    RouterLink
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private modalService: NgbModal) {}

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, scrollable: true });
  }
}
