import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { StudentRegistrations } from './student-registrations';

describe('StudentRegistrations', () => {
  let component: StudentRegistrations;
  let fixture: ComponentFixture<StudentRegistrations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentRegistrations],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentRegistrations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
