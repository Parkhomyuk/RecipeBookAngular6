import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],

})
export class RecipeListComponent implements OnInit {
/*recipes: Recipe[]=[
  new Recipe('A Test Recipe 1', "This is simply recipe 1", '../assets/img/unnamed.png'),
  new Recipe('A Test Recipe 2', "This is simply recipe 2", '../assets/img/unnamed.png')
];*/
  recipes: Recipe[];
/*@Output() selectedWasRecipe= new EventEmitter<Recipe>();*/
  constructor(private recipeService: RecipeService, private router: Router, private rout: ActivatedRoute) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();

  }
  /*onResipeDelected(recipe: Recipe){
      this.selectedWasRecipe.emit(recipe);
  }*/
  onNewRecipe(){

    //noinspection TypeScriptValidateTypes
    this.router.navigate(['new'], {relativeTo: this.rout});
  }

}
