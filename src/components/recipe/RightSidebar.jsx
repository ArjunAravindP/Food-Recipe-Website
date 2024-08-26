import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { debounce } from 'lodash';
import { motion } from 'framer-motion';

const RightSidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Debounce function to handle search input
  const debouncedSearch = debounce(async (term) => {
    if (term) {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
        );
        setRecipes(response.data.meals || []);
      } catch (error) {
        console.error('Error fetching the recipes:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setRecipes([]);
    }
  }, 2000);

  useEffect(() => {
    debouncedSearch(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = (id) => {
    navigate(`/recipes/${id}`);
  };

  return (
    <div className="w-full p-5">
      <div className="mb-6 w-full">
        <input
          type="search"
          value={searchTerm}
          placeholder="Search for your recipe"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="h-screen overflow-y-auto">
        {loading && <p className="text-gray-500">Loading...</p>}
        {recipes?.length > 0 ? (
          <ul>
            {recipes.map((recipe) => (
              <motion.li
                key={recipe.idMeal}
                className="mb-4 flex flex-row space-x-4 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick(recipe.idMeal)}
              >
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="h-20 w-20 rounded"
                />
                <div>
                  <h3 className="text-lg font-bold">{recipe.strMeal}</h3>
                  <p>{recipe.strCategory}</p>
                  <p>{recipe.strArea}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        ) : (
          !loading && <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default RightSidebar;
