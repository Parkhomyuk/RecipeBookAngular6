import {Ingredient} from "../shared/ingredient.model";
import {Injectable, EventEmitter} from "@angular/core";
import {Subject} from "rxjs/internal/Subject";



@Injectable()
export class ShopingListService{
  /*ingredientsChanged = new EventEmitter<Ingredient[]>();*/
  startingEditing= new Subject<number>()
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index){
    return this.ingredients[index]
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
   /* this.ingredientsChanged.emit(this.ingredients.slice());*/
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngridient(index, newIngridient: Ingredient){
    this.ingredients[index]=newIngridient;
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  deleteIngredient(id: number){
    console.dir(id);
    this.ingredients.splice(id,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
   /* this.ingredientsChanged.emit(this.ingredients.slice());*/
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
