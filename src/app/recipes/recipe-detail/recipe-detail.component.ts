import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Ingredient} from "../../shared/ingredient.model";
import {ActivatedRoute, Params,  Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
/*@Input() recipe: Recipe;*/
  recipe: Recipe;
  id;number;
  constructor(private selectedService: RecipeService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  /*  const id=this.router.snapshot.params['id'];*/
     this.router.params.subscribe(
      (params:Params)=>{
        this.id=params['id'];
        this.recipe=this.selectedService.getRecipe(this.id);
        console.log(this.id);
      }
    );
  }
  onAddIngradToShoppingList(){

  }
  addIngredientsToShoppingList(ingr: Ingredient){
    this.selectedService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
  onEditRecipe(){
    //noinspection TypeScriptValidateTypes
    this.route.navigate(['edit'], {relativeTo:this.router});
  }
}
