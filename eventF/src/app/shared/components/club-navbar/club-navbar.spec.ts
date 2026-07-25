import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { ClubNavbar } from './club-navbar';

describe('ClubNavbar', () => {
  let component: ClubNavbar;
  let fixture: ComponentFixture<ClubNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubNavbar],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
