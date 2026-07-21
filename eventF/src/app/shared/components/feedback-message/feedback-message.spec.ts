import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackMessage } from './feedback-message';

describe('FeedbackMessage', () => {
  let component: FeedbackMessage;
  let fixture: ComponentFixture<FeedbackMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
