import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Add standalone: true
  imports: [CounterComponent] // Import CounterComponent here
})
export class AppComponent { }
