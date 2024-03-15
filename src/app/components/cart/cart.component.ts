import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartservice=inject(CartService);

  trackById(index: number, item: any): any {
    return item.Id; 
  }
  checkQuantityAndAlert(item: any): void {
    if (item.Quantity === 0) {
      window.alert(`Product ${item.ProductName} is out of stock!`);
    }
  }
    deletefromcart(item : any): void {
      this.cartservice.delete(item);
    }
}
