import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FormGroup, FormControl, FormArray} from "@angular/forms";
import {RecipeService} from "../recipe.service";



@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode=false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=params['id'];
        this.editMode=params['id']!=null;
        console.log(this.editMode);
        this.initForm();
      }
    )
  }
private initForm(){
  let recipeName='';
  let recipeImagePath='';
  let recipeDescription='';
  let recipeIngridients= new FormArray([]);
  if(this.editMode){
    const recipe= this.recipeService.getRecipe(this.id);
    recipeName=recipe.name;
    recipeImagePath=recipe.imagePath;
    recipeDescription=recipe.description;

    if(recipe['ingredients']) {
      for (let ingridient of recipe.ingredients) {
        recipeIngridients.push(
          new FormGroup({
            'name': new FormControl(ingridient.name),
            'amount': new FormControl(ingridient.amount)
          })
        )
      }
    }
  }
   console.log(recipeIngridients);
  this.recipeForm= new FormGroup({
    'name': new FormControl(recipeName),
    'imagePath': new FormControl(recipeImagePath),
    'description': new FormControl(recipeDescription),
    'ingredients': recipeIngridients
  })

}
  onSubmit(){
    console.log(this.recipeForm);
  }
  onAddIngredient(){
    //noinspection TypeScriptUnresolvedFunction
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl(),
      }))
  }


}