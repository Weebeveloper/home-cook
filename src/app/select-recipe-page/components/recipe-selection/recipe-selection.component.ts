import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'recipe-selection',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './recipe-selection.component.html',
  styleUrl: './recipe-selection.component.scss',
})
export class RecipeSelectionComponent {
  readonly recipeName = input<string>('מתכון חדש');
  readonly recipeDescription = input<string>('תיאור מתכון חדש');
  readonly recipeImage = input<string>('');
  constructor() {}
}
