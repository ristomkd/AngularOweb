import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompComponent } from './comp/comp.component';
import { CommonModule } from '@angular/common';
import { driver } from '.././driver';
import { DRIVERS } from '.././db-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CompComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  vozaci: driver[] = DRIVERS;

  onAppView() {
    console.log('Ne raboti ');
  }
}
