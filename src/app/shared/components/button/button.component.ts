import { Component, input } from '@angular/core';
import { ButtonConfig } from '../../models/button.model';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
})
export class Button {
  btnConfig = input.required<ButtonConfig>();
}
