import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  HEADER
  <nav>
    <a routerLink="/">Home</a>
    <a routerLink="/products">Products</a>
    <a routerLink="/products/0">Product 0</a>
    <a routerLink="/products/1">Product 1</a>
    <a routerLink="/products/2">Product 2</a>
    <a routerLink="/products/3">Product 3</a>
    <a routerLink="/demo">Demo</a>
  </nav>
  <div>

  <router-outlet></router-outlet>

  </div>
  FOOTER

  `,
})
export class AppComponent {
  title = 'crmapp';
}
