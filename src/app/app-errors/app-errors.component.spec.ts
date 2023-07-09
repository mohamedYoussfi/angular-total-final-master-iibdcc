import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppErrorsComponent } from './app-errors.component';

describe('AppErrorsComponent', () => {
  let component: AppErrorsComponent;
  let fixture: ComponentFixture<AppErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
