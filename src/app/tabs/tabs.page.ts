import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor() {}

  iconType = 'cart-outline';

  goTocart() {
    this.iconType = 'carta';
  }
}
