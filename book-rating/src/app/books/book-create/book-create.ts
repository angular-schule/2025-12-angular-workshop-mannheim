import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-create',
  imports: [ReactiveFormsModule],
  templateUrl: './book-create.html',
  styleUrl: './book-create.scss',
})
export class BookCreate {

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

    // HANDS ON:
    // 1. Erstelle eine Event mit dem Namen "createBook"
    // 2. Versende das neue Buch per Event
    // 3. Subscribe dich im Dashboard auf das Event
    // 4. Füge das neue Buch der Buch-Liste hinzu

    this.bookForm.reset()
  }
}
