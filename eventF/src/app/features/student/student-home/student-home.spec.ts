import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { StudentHome } from './student-home';

describe('StudentHome', () => {
  let component: StudentHome;
  let fixture: ComponentFixture<StudentHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentHome],
      providers: [provideHttpClient(), provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
