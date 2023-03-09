import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Chicken Dana',
        cookTime: '30-50',
        price: 100,
        favourite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/images/foods/food1.jpg',
        tags: ['FastFood', 'Chicken', 'Lunch'],


      },
      {
        id: 2,
        name: 'Veg Soup',
        cookTime: '30-50',
        price: 80,
        favourite: false,
        origins: ['Russai'],
        star: 5.0,
        imageUrl: '/assets/images/foods/food2.jpg',
        tags: ['FastFood', 'Chicken', 'Lunch'],


      }, {
        id: 3,
        name: 'Pizza',
        cookTime: '30-50',
        price: 200,
        favourite: false,
        origins: ['America'],
        star: 4.7,
        imageUrl: '/assets/images/foods/food3.jpg',
        tags: ['FastFood', 'Chicken', 'Lunch'],


      }, {
        id: 4,
        name: 'Burger',
        cookTime: '30-50',
        price: 120,
        favourite: false,
        origins: ['Kuwait'],
        star: 4.8,
        imageUrl: '/assets/images/foods/food4.jpg',
        tags: ['FastFood', 'Chicken', 'Lunch'],


      }, {
        id: 5,
        name: 'Butter Chicken ',
        cookTime: '30-50',
        price: 130,
        favourite: false,
        origins: ['England'],
        star: 4.9,
        imageUrl: '/assets/images/foods/food5.jpg',
        tags: ['FastFood', 'Chicken', 'Lunch'],


      }, {
        id: 6,
        name: 'Veg Shabji',
        cookTime: '30-50',
        price: 60,
        favourite: false,
        origins: ['Saudi Arabia'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food6.jpg',
        tags: ['FastFood', 'Chicken', 'Lunch'],


      }, {
        id: 7,
        name: 'Fruits',
        cookTime: '30-50',
        price: 50,
        favourite: false,
        origins: ['Africa'],
        star: 5.0,
        imageUrl: '/assets/images/foods/food7.jpg',
        tags: ['FastFood', 'Chicken', 'Lunch'],


      }, {
        id: 8,
        name: 'Tomato',
        cookTime: '30-50',
        price: 30,
        favourite: false,
        origins: ['Indian'],
        star: 4.4,
        imageUrl: '/assets/images/foods/food8.jpg',
        tags: ['FastFood', 'Chicken', 'Lunch'],


      }, 
      
    ]
  }
}
