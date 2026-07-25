import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubEventForm } from './club-event-form';

describe('ClubEventForm', () => {
  let component: ClubEventForm;
  let fixture: ComponentFixture<ClubEventForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubEventForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubEventForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
