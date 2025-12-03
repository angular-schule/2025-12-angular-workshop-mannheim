import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookCard } from "../book-card/book-card";
import { BookRatingHelper } from '../shared/book-rating-helper';

@Component({
  selector: 'app-dashboard-page',
  imports: [BookCard],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage {

  // constructor() {
  //   throw '💩';
  // }

  readonly #bookRatingHelper = inject(BookRatingHelper);

  // 🦆
  readonly books = signal<Book[]>([
    {
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5
    },
    {
      isbn: '111',
      title: 'React',
      description: 'Auch gutes Buch',
      rating: 3
    },
    {
      isbn: '222',
      title: 'jQuery',
      description: 'Altes Buch',
      rating: 1
    }
  ]);

  doRateUp(book: Book) {
    const ratedBook = this.#bookRatingHelper.rateUp(book);
    // const ratedBook = {
    //   ...book,
    //   rating: Math.min(book.rating + 1, 5)
    // };
    this.updateAndSortBook(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.#bookRatingHelper.rateDown(book);
    this.updateAndSortBook(ratedBook);
  }

  updateAndSortBook(ratedBook: Book) {
    this.books.update(books => books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating));
  }
}
