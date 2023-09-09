import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TimeInputComponent {
  @Input()
  label!: string;
}
