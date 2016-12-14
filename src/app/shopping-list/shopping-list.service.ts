import { Ingredient } from "../shared/Ingredient";

export class ShoppingListService {

  private items: Ingredient[] = [];

  constructor() { }

  getItems(){
    return this.items;
  }

  addItems (items:Ingredient[]){
    // This pushes all items to this.items without having to use a loop.
    Array.prototype.push.apply(this.items, items);
  }

}
