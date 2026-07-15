import { Location } from '@angular/common';
import { Component, computed, input, resource } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../api.service';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { IngredientsBottomSheet } from '../components/ingredients/ingredients.bottom-sheet';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'recipe-page',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatProgressSpinnerModule,
    MatDividerModule,
  ],
  providers: [ApiService],
  templateUrl: './recipe.page.html',
  styleUrl: './recipe.page.scss',
})
export class RecipePage {
  recipeId = input<string | undefined>();

  readonly recipeDescription = resource({
    params: () => ({ id: this.recipeId() }),
    loader: async ({ params }) => {
      return await this._apiService.getRecipeName(params.id!);
    },
  });

  readonly recipeSteps = resource({
    params: () => ({ id: this.recipeId() }),
    loader: async ({ params }) => {
      return await this._apiService.getRecipeSteps(params.id!);
    },
  });

  readonly recipeIngredients = resource({
    params: () => ({ id: this.recipeId() }),
    loader: async ({ params }) => {
      return await this._apiService.getRecipeIngredients(params.id!);
    },
  });

  readonly isLoading = computed(
    () =>
      this.recipeDescription.isLoading() ||
      this.recipeSteps.isLoading() ||
      this.recipeIngredients.isLoading(),
  );

  constructor(
    private readonly _location: Location,
    private readonly _bottomSheetService: MatBottomSheet,
    private readonly _apiService: ApiService,
  ) {}

  onReturn() {
    this._location.back();
  }

  onOpenIngredientsWindow() {
    this._bottomSheetService.open(IngredientsBottomSheet, {
      data: this.recipeIngredients.value(),
      panelClass: 'bottom-sheet',
    });
  }
}
