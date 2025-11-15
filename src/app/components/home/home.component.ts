import { Component } from '@angular/core';
import { Header } from './header/header.component';
import { Button } from '../../shared/components/button/button.component';
import { ButtonConfig } from '../../shared/models/button.model';

@Component({
  selector: 'app-home',
  imports: [Header, Button],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class Home {
  joinBtnConfig: ButtonConfig = {
    label: 'Join us!',
    class: 'register-btn',
    handleClick: () => {},
  };

  loginBtnConfig: ButtonConfig = {
    label: 'Log in',
    class: 'login-btn',
    handleClick: () => {},
  };

  userCount: number = 4;
  teamCount: number = 1;
}
