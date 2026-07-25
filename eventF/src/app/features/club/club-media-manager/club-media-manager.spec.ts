import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubMediaManager } from './club-media-manager';

describe('ClubMediaManager', () => {
  let component: ClubMediaManager;
  let fixture: ComponentFixture<ClubMediaManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubMediaManager],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubMediaManager);
    fixture.componentRef.setInput('eventId', 1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
