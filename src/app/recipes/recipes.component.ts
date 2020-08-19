import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})

export class RecipesComponent implements OnInit {
  recipeItemSelected:Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    // Listen to the EventEmitter in Recipe Service with subscribe() and bind whatever data we get to recipeItemSelected
    this.recipeService.recipeSelected
    .subscribe(
      (recipe:Recipe) => {
        this.recipeItemSelected = recipe;
      }
    );
  }

}
