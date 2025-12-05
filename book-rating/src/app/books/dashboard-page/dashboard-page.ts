import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookCard } from "../book-card/book-card";
import { BookRatingHelper } from '../shared/book-rating-helper';
import { BookCreate } from "../book-create/book-create";
import { BookStore } from '../shared/book-store';
import { httpResource } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard-page',
  imports: [BookCard, BookCreate, JsonPipe],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage {

  readonly #bookRatingHelper = inject(BookRatingHelper);
  readonly #bookStore = inject(BookStore);



  readonly books = rxResource({
    stream: () => {
      return this.#bookStore.getBooks()
    },defaultValue: []
  });

  constructor() {
    // this.#bookStore.getBooks().subscribe(b => this.books.set(b))

  }

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

  doCreateBook(newBook: Book) {
    this.books.update(books => [...books, newBook]);
  }

  isbn = signal('9783864909467');

  bookResource = httpResource<Book>(
    () => `https://api.angular.schule/books/${ this.isbn() }`
  );

  bookResource2 = rxResource({
    stream: () => this.#bookStore.getSingleBook(this.isbn())
  });

}
