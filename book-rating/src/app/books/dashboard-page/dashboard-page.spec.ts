import { ComponentFixture, TestBed } from '@angular/core/testing';
import { afterEach, vi } from 'vitest';

import { DashboardPage } from './dashboard-page';
import { BookRatingHelper } from '../shared/book-rating-helper';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;
  let bookRatingHelper: BookRatingHelper;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    bookRatingHelper = TestBed.inject(BookRatingHelper);
    await fixture.whenStable();
  });

  // afterEach(() => {
  //   vi.restoreAllMocks();
  // });

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

  it('EXPERIMENT: Is the spy from the previous test still active?', () => {
    const testBook = {
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 3
    };

    // Verwende DIESELBE Instanz aus beforeEach
    console.log('Is rateUp already a mock?', vi.isMockFunction(bookRatingHelper.rateUp));

    // Methode aufrufen ohne neuen Spy zu erstellen
    const result = bookRatingHelper.rateUp(testBook);

    console.log('Result:', result);
    console.log('Is original called?', result?.rating === 4);
  });

  it('EXPERIMENT: Spy on Math.random - does it persist?', () => {
    const spy = vi.spyOn(Math, 'random').mockReturnValue(0.5);

    console.log('Math.random() returns:', Math.random());
    expect(Math.random()).toBe(0.5);
  });

  it('EXPERIMENT: Is Math.random still mocked from previous test?', () => {
    console.log('Is Math.random mocked?', vi.isMockFunction(Math.random));
    console.log('Math.random() returns:', Math.random());

    // Wenn restoreAllMocks NICHT läuft, sollte das hier 0.5 sein!
    // Wenn es automatisch aufgeräumt wird, sollte es ein echter Zufallswert sein
  });
});
