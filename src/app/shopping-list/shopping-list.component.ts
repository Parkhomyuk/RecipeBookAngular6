import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShopingListService} from "./shopping-list.service";
import {Subscription} from "rxjs/internal/Subscription";


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscribtion: Subscription

  constructor(private shopingListService: ShopingListService) { }

  ngOnInit() {
    this.ingredients= this.shopingListService.getIngredients();
    this.subscribtion=this.shopingListService.ingredientsChanged.subscribe(
      (data:Ingredient[])=>{
        this.ingredients=data;
      }
    )
  }
  /*addIngridien(ingridient: Ingredient){
    this.ingredients.push(ingridient);
  }*/

  onEdit(id: number){
    this.shopingListService.startingEditing.next(id);

  }

  ngOnDestroy():void {
    this.subscribtion.unsubscribe();
  }
}
