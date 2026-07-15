import { Component, resource } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Location } from '@angular/common';
import { RecipeSelectionComponent } from '../components/recipe-selection/recipe-selection.component';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { SITE_URL } from '../../common/URLs.enum';
import { ApiService } from '../api.service';

@Component({
  selector: 'select-recipe-page',
  imports: [
    RecipeSelectionComponent,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressSpinnerModule,
  ],
  providers: [ApiService],
  templateUrl: './select-recipe.page.html',
  styleUrl: './select-recipe.page.scss',
})
export class SelectRecipePage {
  protected recipeDescription = resource({
    loader: async () => {
      return await this._apiService.getAllRecipes();
    },
  });

  constructor(
    private readonly _location: Location,
    private readonly _router: Router,
    private readonly _apiService: ApiService,
  ) {}

  onReturn() {
    this._location.back();
  }

  onRecipeSelected(recipeId: number) {
    this._router.navigate([SITE_URL.RECIPE_URL, recipeId]);
  }
}
