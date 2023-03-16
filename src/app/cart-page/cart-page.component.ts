import { Component ,OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { Cart } from '../shared/models/Cart';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
  constructor(private cartService:CartService){
    // let foods= foodService.getAll();
    // cartService.addToCart(foods[1]);
    // cartService.addToCart(foods[3]);
    // cartService.addToCart(foods[5]);
    this.setCart();

  }
  ngOnInit(): void {
    
  }
  setCart(){
    this.cart= this.cartService.getCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity= Number(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity)
    this.setCart();
  }

}
