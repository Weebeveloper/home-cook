import { Inject, Injectable, inject } from '@angular/core';
import { SUPABASE_API } from '../supabaseClient';
import { SupabaseClient } from '@supabase/supabase-js';
import { Ingredient, RecipeStep } from './types.interface';

@Injectable()
export class ApiService {
  constructor(@Inject(SUPABASE_API) private readonly _api: SupabaseClient) {}

  async getRecipeName(recipeId: string): Promise<string> {
    const results = await this._api.from('Recipes').select('name').eq('id', recipeId).single();

    return results.data?.name ?? '';
  }

  async getRecipeIngredients(recipeId: string): Promise<Ingredient[]> {
    const results = await this._api
      .from('Ingredients')
      .select('ingredient_name, ingredient_amount')
      .eq('recipe_id', recipeId);

    const mappedResults = results.data?.map(
      (value) =>
        ({
          ingredientName: value.ingredient_name,
          ingredientAmount: value.ingredient_amount,
        }) satisfies Ingredient,
    );

    return mappedResults ?? [];
  }

  async getRecipeSteps(recipeId: string): Promise<RecipeStep[]> {
    const results = await this._api
      .from('RecipeSteps')
      .select('step_name, step_paragraphs, has_timer, timer_seconds')
      .order('step_id')
      .eq('recipe_id', recipeId);

    const mappedResults = results.data?.map(
      (value) =>
        ({
          stepName: value.step_name,
          paragraphs: value.step_paragraphs,
          hasTimer: value.has_timer,
          timerSeconds: value.timer_seconds,
        }) satisfies RecipeStep,
    );

    return mappedResults ?? [];
  }
}
