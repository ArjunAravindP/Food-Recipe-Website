import Post from './Post';

import { motion } from 'framer-motion';
import { fetchBreakfastRecipes } from '../../hooks/fetch';
import { useEffect, useState } from 'react';

const colors = ['bg-blue', 'bg-white', 'bg-pink', 'bg-white'];

const Feed = () => {
  const [recipes, setRecipies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchBreakfastRecipes();
      setRecipies(data);
    };
    getData();
  }, []);
  return (
    <div className="fixed top-20 w-2/4">
      <h2 className="fixed text-2xl font-semibold">Feeds</h2>

      <div className="pt-10">
        <div className="overflow-y-auto max-h-screen">
          {recipes.map((meal, index) => {
            // Determine the background color by cycling through the colors array
            const backgroundColor = colors[index % colors.length];

            return (
              <motion.div
                key={meal.idMeal}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Post id={meal.idMeal} backround={backgroundColor} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
