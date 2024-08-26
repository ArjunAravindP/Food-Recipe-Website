import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import marbleImage from '../assets/images/black-marbled-surface.jpg';
import foodInBowl from '../assets/images/food-in-bowl.png';
import { motion } from 'framer-motion';
import { getRandomMeal } from '../hooks/fetch';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [randoMeals, setRandoMeals] = useState([]);

  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();

    img1.src = marbleImage;
    img2.src = foodInBowl;

    const handleLoad = () => {
      if (img1.complete && img2.complete) {
        setIsLoaded(true);
      }
    };

    img1.onload = handleLoad;
    img2.onload = handleLoad;
  }, []);

  useEffect(() => {
    async function fetchMeals() {
      const meals = [];
      for (let i = 0; i < 3; i++) {
        const randomMeal = await getRandomMeal();
        if (randomMeal) {
          meals.push(randomMeal);
        }
      }
      setRandoMeals(meals);
    }
    fetchMeals();
  }, []);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1 } },
  };

  return (
    <div className="bg-gray-50">
      {isLoaded ? (
        <section className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          <motion.div
            className="space-y-5 md:w-1/2 flex flex-col pt-[200px] pl-[150px] h-scree text-left"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.h1
              className="text-6xl font-bold leading-tight text-black"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Create your <br />
              <span className="text-orange-500 font-thin">favourite Foods</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-500"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              The one-stop destination for all your favorite food recipes.
              Create, Taste, Share...!
            </motion.p>

            <motion.div className="flex space-x-4" variants={buttonVariants}>
              <Link
                to="recipes"
                className="flex items-center px-6 py-3 text-white bg-black rounded-full"
              >
                <span className="material-icons pr-2">Explore</span>
                Recipes
              </Link>
            </motion.div>

            <div className="z-10 flex flex-row justify-between space-x-3 items-center mt-12 pt-10">
              {randoMeals.map((meal, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-2 w-50"
                  variants={imageVariants}
                >
                  <div
                    className={`bg-red-300 p-4 rounded-full w-60 flex flex-row justify-between items-center`}
                  >
                    <img
                      src={meal.strMealThumb}
                      alt={`Meal ${index}`}
                      className="rounded-full h-16 w-16"
                    />
                    <span>{meal.strMeal}</span>
                    <button className="text-white bg-black px-2 py-1 rounded-xl">
                      View
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="md:w-1/2 flex justify-center relative overflow-hidden">
            <div className="relative">
              <motion.img
                src={marbleImage}
                alt="marble background"
                className="h-[900px] w-[900px] md:h-[800px] md:w-[800px] rounded-full translate-x-[400px] -translate-y-[20px] min-w-[900px]"
              />
              <motion.img
                src={foodInBowl}
                alt="Food in Bowl"
                className="absolute top-20 left-40 w-2/3 h-auto"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: 'linear',
                }}
              />
            </div>
          </div>
        </section>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
