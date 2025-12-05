import { Component, effect, inject, input, signal } from '@angular/core';
import { BookStore } from '../shared/book-store';
import { Book } from '../shared/book';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-details-page',
  imports: [RouterLink],
  templateUrl: './book-details-page.html',
  styleUrl: './book-details-page.scss',
})
export class BookDetailsPage {

  isbn = input.required<string>();

  bookStore = inject(BookStore);
  book = signal<Book | undefined>(undefined);

  constructor() {

    // synchron ok
    // effect(() => console.log('Die ISBN lautet', this.isbn()))

    effect(() => {
      const isbn = this.isbn();
      this.bookStore.getSingleBook(isbn)
        .subscribe(b => this.book.set(b))
    })

  }

}
