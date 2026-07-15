export interface Ingredient {
  readonly ingredientName: string;
  readonly ingredientAmount: string;
}

export interface RecipeStep {
  readonly stepName: string;
  readonly paragraphs: string[];
  readonly hasTimer: boolean;
  readonly timerSeconds?: number;
}
