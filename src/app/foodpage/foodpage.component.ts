import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent implements OnInit {
  food!:Foods;
  constructor(private activatedRoute:ActivatedRoute,private foodservices:FoodService){
    activatedRoute.params.subscribe((params=>{
      if (params['id'])
      this.food= foodservices.getFoodById(params['id'])
    }))
  }

  ngOnInit(): void {
    
  }
  heartStatus(food: any) {
    console.log(food.favourite);

    food.favourite = !food.favourite;
    console.log(food.favourite);

    return food.favourite;

  }
}
