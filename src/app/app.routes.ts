import { Routes } from '@angular/router';
import { HomePage } from './home-page/home.page';
import { NotFoundPage } from './not-found-page/not-found.page';
import { SelectRecipePage } from './select-recipe-page/page/select-recipe.page';
import { SITE_URL } from './common/URLs.enum';
import { RecipePage } from './recipe-page/page/recipe.page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: SITE_URL.HOME_URL, component: HomePage },
  { path: SITE_URL.RECIPE_BOOK_URL, component: SelectRecipePage },
  { path: SITE_URL.RECIPE_URL + '/:recipeId', component: RecipePage },
  { path: 'notFound', component: NotFoundPage },

  { path: '**', redirectTo: 'notFound' },
];
