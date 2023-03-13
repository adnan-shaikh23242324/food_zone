import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent implements OnInit {
  food!: Foods;
  constructor(private activatedRoute: ActivatedRoute, private foodservices: FoodService, private cartService: CartService,private router:Router) {
    activatedRoute.params.subscribe((params => {
      if (params['id'])
        this.food = foodservices.getFoodById(params['id'])
    }))
  }

  ngOnInit(): void {

  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
  heartStatus(food: any) {
    console.log(food.favourite);

    food.favourite = !food.favourite;
    console.log(food.favourite);

    return food.favourite;

  }
}
