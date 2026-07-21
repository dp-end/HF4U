import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { StudentNavbar } from './student-navbar';

describe('StudentNavbar', () => {
  let component: StudentNavbar;
  let fixture: ComponentFixture<StudentNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentNavbar],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
