import {Ingredient} from '../shared/ingredient';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

export class ShoppingListService {

  private ingredients: Ingredient[] = [new Ingredient('Potato', 10), new Ingredient('Apple', 4)];

  shoppingListChanged = new Subject<void>();
  startedEditing = new Subject<number>();

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.shoppingListChanged.next();
  }

  addIngredients(ingredients: Ingredient[]) {
    Array.prototype.push.apply(this.ingredients, ingredients);
    this.shoppingListChanged.next();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.shoppingListChanged.next();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.shoppingListChanged.next();
  }

}
