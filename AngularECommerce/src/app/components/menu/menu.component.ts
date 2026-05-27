import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu',
  imports: [
    DrawerModule,
    ButtonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent {
  drawerVisible = false;
  counter: number = 0; 

  constructor(private cartSrv: CartService){}

  ngOnInit(){
    this.cartSrv.getCounter().subscribe((value) => this.counter = value);
  }
}
