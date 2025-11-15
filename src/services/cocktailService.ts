export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface CocktailDetail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
}

const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const cocktailService = {
  async getCocktails(): Promise<Cocktail[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/filter.php?c=Cocktail`);
      if (!response.ok) {
        throw new Error('Error al obtener los cócteles');
      }
      const data = await response.json();
      return data.drinks || [];
    } catch (error) {
      console.error('Error fetching cocktails:', error);
      throw error;
    }
  },

  async getCocktailDetail(id: string): Promise<CocktailDetail> {
    try {
      const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
      if (!response.ok) {
        throw new Error('Error al obtener los detalles del cóctel');
      }
      const data = await response.json();
      return data.drinks[0];
    } catch (error) {
      console.error('Error fetching cocktail detail:', error);
      throw error;
    }
  }
};
