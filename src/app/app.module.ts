import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import {ShopingListService} from "./shopping-list/shopping-list.service";
import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {ZevaDirective} from "./shared/zevaDirective";
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

//noinspection TypeScriptValidateTypes
const routes:Routes=[
  {path:'',component:RecipesComponent},
  {path:'recipe' , component:RecipesComponent},
  {path:'shopping' , component:ShoppingListComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    ZevaDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShopingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }