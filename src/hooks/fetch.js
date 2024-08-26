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
