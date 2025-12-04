import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPage } from './dashboard-page';
import { BookRatingHelper } from '../shared/book-rating-helper';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPage],

      // Der Klassiker: Alles ersetzen, echte Mocks!
      // providers: [
      //   {
      //     provide: BookRatingHelper,
      //     useValue: {
      //       minRating: -1000,
      //       maxRating: 5,
      //       rateUp: () => {},
      //       rateDown: () => {},
      //     }
      //   }
      // ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should use BookRatingHelper.rateUp() to rate up a book', () => {

    const testBook = component.books()[1];

    console.log('*** VORHER ***', component.books());


    const bookRatingHelper = TestBed.inject(BookRatingHelper);
    const spy = vi.spyOn(bookRatingHelper, 'rateUp');

    component.doRateUp(testBook);

    console.log('*** NACHHER ***', component.books());

    expect(spy).toHaveBeenCalledExactlyOnceWith(testBook)
  });
});
