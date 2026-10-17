import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './Home/home/home';
import { HousingLocation } from './housing-location/housing-location';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, HousingLocation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('house');
  
}
