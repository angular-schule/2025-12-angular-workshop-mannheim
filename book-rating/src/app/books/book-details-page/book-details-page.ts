import { Component, effect, inject, input, signal } from '@angular/core';
import { BookStore } from '../shared/book-store';
import { Book } from '../shared/book';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-book-details-page',
  imports: [RouterLink, JsonPipe],
  templateUrl: './book-details-page.html',
  styleUrl: './book-details-page.scss',
})
export class BookDetailsPage {

  router = inject(ActivatedRoute);
  bookStore = inject(BookStore);


  book = toSignal(this.router.paramMap.pipe(
    map(paramMap => paramMap.get('isbn') || ''),
    mergeMap(isbn => this.bookStore.getSingleBook(isbn))
  ))


  // isbn = input.required<string>();

  constructor() {

    // synchron ok
    // effect(() => console.log('Die ISBN lautet', this.isbn()))

    // effect(() => {
    //   const isbn = this.isbn();
    //   this.bookStore.getSingleBook(isbn)
    //     .subscribe(b => this.book.set(b))
    // })

  }

}
