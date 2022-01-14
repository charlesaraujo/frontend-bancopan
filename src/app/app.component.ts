import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay } from 'rxjs';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Adicionar um delay para o loader devido ao ExpressionChangedAfterItHasBeenCheckedError
  loading$ = this.store.select('loading').pipe(delay(1));

  constructor(private store: Store<AppState>) { }
}
