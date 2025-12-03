import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { Component, input, NO_ERRORS_SCHEMA } from '@angular/core';
import { Book } from './books/shared/book';
import { DashboardPage } from './books/dashboard-page/dashboard-page';

@Component({
  selector: 'app-dashboard-page',
  template: '😃',
})
export class DummyDashboardPage {
}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
    // .overrideComponent(App, {
    //   set: { imports: [], schemas: [NO_ERRORS_SCHEMA] }
    // })
    // .overrideComponent(App, {
    //   set: { imports: [DummyDashboardPage] }
    // })
    .overrideComponent(App, {
      remove: { imports: [DashboardPage] },
      add: { imports: [DummyDashboardPage] }
    })
    .compileComponents();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);

    // früher
    // fixture.detectChanges();

    // 🙂
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Book Rating');
  });
});
