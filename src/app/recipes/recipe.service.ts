import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShopingListService} from "../shopping-list/shopping-list.service";
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
  private recipes: Recipe[]=[
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];
  recipesChanged = new Subject<Recipe[]>();

  constructor(private slService: ShopingListService){}
  /*recipeSelected= new EventEmitter<Recipe>();*/
  public getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingr: Ingredient[]){
    this.slService.addIngredients(ingr);
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe){}
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
