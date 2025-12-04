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

  it('should create', () => {
    console.log(TestBed.inject(BookRatingHelper));
    expect(component).toBeTruthy();
  });
});
