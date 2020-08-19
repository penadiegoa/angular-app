import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:true}) nameInput: ElementRef;
  @ViewChild('amountInput',{static:true}) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingredName = this.nameInput.nativeElement.value;
    const ingredAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingredName,ingredAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
