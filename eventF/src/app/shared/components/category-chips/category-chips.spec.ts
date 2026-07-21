import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryChips } from './category-chips';

describe('CategoryChips', () => {
  let component: CategoryChips;
  let fixture: ComponentFixture<CategoryChips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryChips]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryChips);
    fixture.componentRef.setInput('categories', ['Tümü', 'Teknoloji']);
    fixture.componentRef.setInput('selectedCategory', 'Tümü');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
