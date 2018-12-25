import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient';
import {Subject} from 'rxjs';

export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [new Recipe('Strogonoff', 'Delicioso e cremoso',
    'https://c1.staticflickr.com/2/1751/41620427455_02afc941d4_b.jpg', [new Ingredient('Filé Mignon', 1),
      new Ingredient('Batatas', 3)]),
    new Recipe('Carne Seca Com Aipim', 'Prato típico nordestino',
      'http://anamaria.uol.com.br/orinoco/media//images/raw/2015/10/23/carne-seca-com-aipim-frito.jpg',
      [new Ingredient('Carne Seca', 1)])];

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
