import { Inject, Injectable } from '@angular/core';
import { SUPABASE_API } from '../supabaseClient';
import { Recipe } from './recipe.interface';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class ApiService {
  constructor(@Inject(SUPABASE_API) private readonly _api: SupabaseClient) {}

  async getAllRecipes(): Promise<Recipe[]> {
    const results = await this._api.from('Recipes').select('*').order('id');

    const mappedResults = results.data?.map(
      (value) =>
        ({
          recipeId: value.id,
          recipeName: value.name,
          recipeDescription: value.description,
          image64Bit: value.image,
        }) satisfies Recipe,
    );
    return mappedResults ?? [];
  }
}
