import axios from 'axios';

export async function fetchSingleRecipe(id) {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    // Return the first meal in the array, or an empty object if no meals are found
    return response.data.meals ? response.data.meals[0] : null;
  } catch (error) {
    console.error('Error fetching the recipe:', error);
    return null; // Return null in case of an error
  }
}

export async function fetchMeal(meal) {
  console.log(meal);
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`
    );
    const breakfastRecipes = response.data.meals;
    return breakfastRecipes;
  } catch (error) {
    console.error('Error fetching breakfast recipes:', error);
  }
}
export async function fetchCategories() {
  try {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
    const categories = response.data.categories;

    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}
export async function getRandomMeal() {
  try {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    return response.data.meals[0];
  } catch (error) {
    console.error('Error fetching random meal:', error);
    return null;
  }
}
