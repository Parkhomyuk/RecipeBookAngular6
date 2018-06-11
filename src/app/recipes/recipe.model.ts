import {Ingredient} from "../shared/ingredient.model";

export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  constructor(name: string, desc: string, imagPath: string, ingedients:Ingredient[]){
    this.name=name;
    this.description=desc;
    this.imagePath=imagPath;
    this.ingredients=ingedients;
  }
}
