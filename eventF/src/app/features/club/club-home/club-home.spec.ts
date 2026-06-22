import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubHome } from './club-home';

describe('ClubHome', () => {
  let component: ClubHome;
  let fixture: ComponentFixture<ClubHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
