import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginaskComponent } from './loginask.component';

describe('LoginaskComponent', () => {
  let component: LoginaskComponent;
  let fixture: ComponentFixture<LoginaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
