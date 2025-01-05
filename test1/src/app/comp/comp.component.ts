import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { driver } from '../../driver';

@Component({
  selector: 'app-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css'],
})
export class CompComponent {
  @Input() vozac: driver | undefined;
  @Input() indeks: number | undefined;

  stilovi() {
    return {
      'driver-name': true,
      highlighted: this.vozac?.category === 'EXPERT',
    };
  }

  klasi() {
    return {
      'driver-card': true,
      expert: this.vozac?.category === 'EXPERT',
      lunatic: this.vozac?.category === 'LUNATIC',
      asd: this.vozac?.category === 'ASD',
    };
  }

  onDrView() {
    console.log('Details clicked for driver:', this.vozac?.name);
  }
}
