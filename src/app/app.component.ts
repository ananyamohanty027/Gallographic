import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Gallographic';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.checkAndSetSystemTheme();
    this.primengConfig.ripple = true;
  }

  checkAndSetSystemTheme = () => {
    let body = document.querySelector('body');
    let matchDark = window.matchMedia('(prefers-color-scheme: dark)');
    let matchLight = window.matchMedia('(prefers-color-scheme: light)');

    if (localStorage.getItem('theme') === 'dark-theme') {
      body?.setAttribute('color-scheme', 'dark');
    } else if (localStorage.getItem('theme') === 'light-theme') {
      body?.setAttribute('color-scheme', 'light');
    } else if (!localStorage.getItem('theme') && matchDark.matches) {
      body?.setAttribute('color-scheme', 'dark');
    } else if (!localStorage.getItem('theme') && matchLight.matches) {
      body?.setAttribute('color-scheme', 'light');
    }
  };
}
