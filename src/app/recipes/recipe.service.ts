import { Injectable } from '@angular/core';

import { Recipe } from './recipe'
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Beef Stir Fry', 'The ginger makes it yummy.', 'http://www.kosherbutcherskitchen.com/wp-content/uploads/2014/02/IMG_0799.jpg', [
      new Ingredient('Beef strips', 1),
      new Ingredient('Red Pepper', 2),
      new Ingredient('Mushrooms', 1),
      new Ingredient('Zuchini', 2)
    ]),
    new Recipe('Super Spaghetti', 'One of the best meat sauces around.', 'http://damndelicious.net/wp-content/uploads/2013/11/IMG_5934edit-copy.jpg', [
      new Ingredient('Beef strips', 1),
      new Ingredient('Red Pepper', 2),
      new Ingredient('Mushrooms', 1),
      new Ingredient('Zuchini', 2)
    ]),
    new Recipe('Chicken Stir Fry', 'Very good. Tasty broth can be soaked up with bread.', 'http://cdn.diys.com/wp-content/uploads/2016/01/Spicy-chicken-stir-fry-finished-wide.jpg', [
      new Ingredient('Beef strips', 1),
      new Ingredient('Red Pepper', 2),
      new Ingredient('Mushrooms', 1),
      new Ingredient('Zuchini', 2)
    ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes
  }

}
