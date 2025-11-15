import { Component } from '@angular/core';
import { Home } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  protected title = 'Chatterbox-Angular';
}
