import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";


export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(){
    return this.ingredients.slice()
  }

  addIngredient(newIngredient:Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredients(newIngredients: Ingredient[]){
    // for (let ingredient of newIngredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...newIngredients);
    this.ingredientsChanged.emit(this.ingredients.slice());

  }

}
