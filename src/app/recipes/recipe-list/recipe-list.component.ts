import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe'; 

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Beef Stir Fry', 'The ginger makes it yummy.', 'http://www.kosherbutcherskitchen.com/wp-content/uploads/2014/02/IMG_0799.jpg', []),
    new Recipe('Super Spaghetti', 'One of the best meat sauces around.', 'http://damndelicious.net/wp-content/uploads/2013/11/IMG_5934edit-copy.jpg', []),
    new Recipe('Chicken Stir Fry', 'Very good. Tasty broth can be soaked up with bread.', 'http://cdn.diys.com/wp-content/uploads/2016/01/Spicy-chicken-stir-fry-finished-wide.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
