import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-create',
  imports: [ReactiveFormsModule],
  templateUrl: './book-create.html',
  styleUrl: './book-create.scss',
})
export class BookCreate {

  createBook = output<Book>();

  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    title: new FormControl('',
      {
        nonNullable: true,
        validators: [Validators.required]
      }),
    description: new FormControl('', { nonNullable: true })
  });

  isInvalid(c: FormControl) {
    return c.invalid && c.touched;
  }

  submitForm() {

    const newBook: Book = {
      ...this.bookForm.getRawValue(),
      rating: 1
    }

    this.createBook.emit(newBook);

    this.bookForm.reset()
  }
}
