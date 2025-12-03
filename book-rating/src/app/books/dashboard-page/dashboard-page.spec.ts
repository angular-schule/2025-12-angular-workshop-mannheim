import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { DashboardPage } from './dashboard-page';
import { BookRatingHelper } from '../shared/book-rating-helper';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should use BookRatingHelper.rateUp() to rate up a book', () => {

    const testBook = {
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 3
    };

    const bookRatingHelper = TestBed.inject(BookRatingHelper);
    const spy = vi.spyOn(bookRatingHelper, 'rateUp');

    component.doRateUp(testBook);

    expect(spy).toHaveBeenCalledExactlyOnceWith(testBook);
  });

  it('EXPERIMENT: what does vi.spyOn return by default?', () => {

    const testBook = {
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 3
    };

    const bookRatingHelper = TestBed.inject(BookRatingHelper);
    const spy = vi.spyOn(bookRatingHelper, 'rateUp');

    const result = bookRatingHelper.rateUp(testBook);

    console.log('Return value:', result);
    console.log('Is it the real implementation?', result?.rating === 4);
  });
});
