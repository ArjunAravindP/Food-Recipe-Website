import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/images/recipe-header.svg';
import LikeIcon from '../../assets/images/like.svg';
import WhislistIcon from '../../assets/images/like-svgrepo-com.svg';
import { useParams } from 'react-router';
import { fetchSingleRecipe } from '../../hooks/fetch';

export default function Recipie() {
  const [recipeData, setRecipeData] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});
  const [checkedSteps, setCheckedSteps] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instrctions, setInstrctions] = useState([]);
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const getEmbedUrl = (url) => {
    const videoIdMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=|.+\/v\/|.+\/embed\/|.+\/watch\?v=)([^"&?\s]{11})/
    );
    return videoIdMatch
      ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
      : '';
  };

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchSingleRecipe(id);
      setRecipeData(data);

      // Set ingredients after fetching recipeData
      if (data) {
        const ingredientsList = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = data[`strIngredient${i}`];
          const measure = data[`strMeasure${i}`];
          if (ingredient && ingredient.trim()) {
            ingredientsList.push(`${measure} ${ingredient}`);
          }
        }
        setIngredients(ingredientsList);
      }
      if (data) {
        const instrctions = data.strInstructions
          .split('.')
          .map((sentence) => sentence.trim())
          .filter((sentence) => sentence !== '');
        setInstrctions(instrctions);
        const embedUrl = getEmbedUrl(data.strYoutube);
        setYoutubeUrl(embedUrl);
      }
    };
    getData();
  }, [id]);

  if (!recipeData) {
    return <div>Loading...</div>;
  }

  const handleCheckboxChange = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const handleStepsCheckboxChange = (index) => {
    setCheckedSteps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.03,
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-2/4 ml-[25%] h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-row justify-between items-center w-full h-36 rounded-md bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        variants={itemVariants}
      >
        <h2 className="w-2/4 text-4xl pl-4 font-bold text-white">
          {recipeData.strMeal}
        </h2>
        <div className="w-1/4 flex flex-col items-center">
          <img
            className="w-28 h-28 rounded-full"
            src={recipeData.strMealThumb}
            alt="dummy"
          />
        </div>
        <div className="w-1/4 text-white font-bold flex flex-col text-2xl items-end pr-4">
          <p>Time</p>
          <p>{recipeData.strCookTime || '02 hrs'}</p>
        </div>
      </motion.div>
      <motion.div
        className="bg-slate-50 w-full h-auto mt-5 rounded-lg p-5"
        variants={itemVariants}
      >
        <div className="flex flex-col items-center space-y-3">
          <h2 className="w-3/4 text-3xl pl-4 text-center font-bold text-black">
            {recipeData.strMeal}
          </h2>
          <div className="flex flex-row space-x-4 font-bold text-xl">
            <p>11.2k</p>
            <img className="w-6 h-6" src={LikeIcon} alt="like icon" />
            <p>13.1k</p>
            <img className="w-6 h-6" src={WhislistIcon} alt="wishlist icon" />
          </div>

          <h2 className="mt-4 font-semibold">{recipeData.strTags}</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-6">
          <img
            src={recipeData.strMealThumb}
            alt="Post content"
            className="rounded-lg w-full h-[300px] object-cover"
          />
          {recipeData.strYoutube && (
            <iframe
              src={youtubeUrl}
              allowFullScreen
              title="YouTube video player"
              className="w-full h-[315px]" // Adjust height as needed for video aspect ratio
            ></iframe>
          )}
        </div>

        <motion.div className="mt-10" variants={containerVariants}>
          <div>
            <h2 className="font-bold text-2xl text-slate-600"># Ingredients</h2>
            <ul className="list-disc pl-5 pt-5">
              {ingredients.map((item, index) => (
                <motion.li
                  key={index}
                  className={`flex items-center space-x-2 ${
                    checkedItems[index] ? 'line-through text-gray-500' : ''
                  }`}
                  variants={itemVariants}
                >
                  <input
                    type="checkbox"
                    checked={checkedItems[index] || false}
                    onChange={() => handleCheckboxChange(index)}
                    className="mr-2 size-7 h-10"
                  />
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-2xl text-slate-600">
              # Instructions
            </h2>

            <ul className="list-disc pl-5 pt-5">
              {instrctions.map((item, index) => (
                <motion.li
                  key={index}
                  className={`flex flex-col items-start space-x-2 ${
                    checkedSteps[index] ? 'line-through text-gray-500' : ''
                  }`}
                  variants={itemVariants}
                >
                  <div className="flex flex-row items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={checkedSteps[index] || false}
                      onChange={() => handleStepsCheckboxChange(index)}
                      className="mr-2 size-7 h-10"
                    />
                    <span className="text-lg font-bold">Step {index + 1}</span>
                  </div>

                  <p className="pl-9">{item}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
