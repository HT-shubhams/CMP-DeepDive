import {
  Component,
  HostBinding,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'control', '(click)': 'onClick()' }, // use this
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'; // Legacy way
  label = input.required<string>();

  onClick() {
    console.log('Clicked!');
  }
}
