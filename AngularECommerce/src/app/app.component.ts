import { Component } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { ProductsComponent } from './components/products/products.component';
@Component({
    selector: 'app-root',
    imports: [
      ProductsComponent,
      MenuComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    host: { ngSkipHydration: '' }
})
export class AppComponent {
  constructor(){}
}
