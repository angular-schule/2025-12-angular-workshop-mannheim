import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Book } from '../shared/book';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCard {

  // früher @Input()
  book = input.required<Book>();

  // früher @Ouptput()
  rateUp = output<Book>();
  rateDown = output<Book>();

  doRateUp() {
    this.rateUp.emit(this.book());
  }

  doRateDown() {
    this.rateDown.emit(this.book());
  }
}
