import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCard } from './event-card';

describe('EventCard', () => {
  let component: EventCard;
  let fixture: ComponentFixture<EventCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCard);
    fixture.componentRef.setInput('event', {
      id: 1,
      title: 'Tanışma Etkinliği',
      description: 'Yeni öğrenciler için kampüs buluşması.',
      location: 'Kampüs',
      eventDate: '2026-08-01T12:00:00',
      capacity: 100,
      eventStatus: 'APPROVED',
      createdAt: '2026-07-21T12:00:00',
      coverImageUrl: '',
      registeredCount: 10,
      availableSpots: 90,
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
