import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import {ShopingListService} from "../shopping-list.service";
import {Ingredient} from "../../shared/ingredient.model";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";




@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;
    @ViewChild('f') slForm:NgForm;
    subscription: Subscription;
    editMode=false;
    editItemIndex:number;
    editedItem: Ingredient;
  constructor(private serviceShopping: ShopingListService) { }

  ngOnInit() {

     this.subscription=this.serviceShopping.startingEditing.subscribe(
       (index: number)=>{
          this.editMode=true;
         this.editItemIndex=index;
         this.editedItem=this.serviceShopping.getIngredient(index);
         this.slForm.setValue({
           name: this.editedItem.name,
           amount:this.editedItem.amount
         })
       }
     )
  }
  /*onAddItem() {
    //noinspection TypeScriptUnresolvedVariable
    const ingName = this.nameInputRef.nativeElement.value;
    //noinspection TypeScriptUnresolvedVariable
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.serviceShopping.addIngredient(newIngredient);
  }*/
  onSubmit(form: NgForm) {

    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if(this.editMode){
      this.serviceShopping.updateIngridient(this.editItemIndex, newIngredient);
    }else {
      this.serviceShopping.addIngredient(newIngredient);
    }
    this.editMode=false;
    form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete(){
    this.onClear();
    this.serviceShopping.deleteIngredient(this.editItemIndex);
  }
  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

}
