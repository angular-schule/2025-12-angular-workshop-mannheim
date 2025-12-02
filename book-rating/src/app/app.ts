import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DashboardPage } from "./books/dashboard-page/dashboard-page";

@Component({
  selector: 'app-root',
  imports: [ DashboardPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('Book Rating');

  constructor() {
    setTimeout(() => this.title.set('Book Rating ❤️'), 2000)
  }
}
