import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-dashboard-page',
  imports: [],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage {

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
}
