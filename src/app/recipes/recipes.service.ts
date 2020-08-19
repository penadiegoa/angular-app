import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Delicious salty taste',
      'https://payload.cargocollective.com/1/9/290469/5930422/recipe-logo-1.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fried',20),
      ]),
    new Recipe(
      'Large Burger',
      'It has all the works in it',
      'https://payload.cargocollective.com/1/9/290469/5930422/recipe-logo-1.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Patty', 1),
        new Ingredient('Onions', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService){ }

  getRecipes(){
    // Note: arrays are Reference types!
    // We use slice to create a copy of the (recipes) object and alter that, instead of the actual object in the Service
    return this.recipes.slice();
  }

  addIngredientsToList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

}
