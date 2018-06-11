import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],

})
export class RecipeListComponent implements OnInit, OnDestroy{
/*recipes: Recipe[]=[
  new Recipe('A Test Recipe 1', "This is simply recipe 1", '../assets/img/unnamed.png'),
  new Recipe('A Test Recipe 2', "This is simply recipe 2", '../assets/img/unnamed.png')
];*/
  recipes: Recipe[];
  subscribtion: Subscription
/*@Output() selectedWasRecipe= new EventEmitter<Recipe>();*/
  constructor(private recipeService: RecipeService, private router: Router, private rout: ActivatedRoute) { }

  ngOnInit() {
    this.subscribtion=this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[])=>{this.recipes=recipes}
    )
    this.recipes=this.recipeService.getRecipes();

  }
  /*onResipeDelected(recipe: Recipe){
      this.selectedWasRecipe.emit(recipe);
  }*/
  onNewRecipe(){

    //noinspection TypeScriptValidateTypes
    this.router.navigate(['new'], {relativeTo: this.rout});
  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }

}
