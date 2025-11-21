import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ButtonConfig } from '../../shared/models/button.model';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  joinBtnConfig: ButtonConfig = {
    label: 'Join us!',
    class: 'register-btn',
    handleClick: () => {
      console.info('clicked');
    },
  };

  loginBtnConfig: ButtonConfig = {
    label: 'Log in',
    class: 'login-btn',
    handleClick: () => {
      console.info('clicked');
    },
  };

  userCount = 4;
  teamCount = 1;
}
