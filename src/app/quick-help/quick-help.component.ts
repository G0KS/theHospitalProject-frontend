import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-help',
  templateUrl: './quick-help.component.html',
  styleUrls: ['./quick-help.component.css'],
})
export class QuickHelpComponent {
  toggler: boolean = false;

  constructor() {}

  toggleQH() {
      this.toggler = true;
  }

  check() {
    setTimeout(() => {
      this.toggler = false;
    },1000);
  }
}
