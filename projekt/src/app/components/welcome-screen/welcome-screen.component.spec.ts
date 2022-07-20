import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { welcomeScreenComponent } from './welcome-screen.component';

describe('welcomeScreenComponent', () => {
  let component: welcomeScreenComponent;
  let fixture: ComponentFixture<welcomeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ welcomeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(welcomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});