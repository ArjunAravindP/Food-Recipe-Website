import PropTypes from 'prop-types';
import ReactionButtons from './Reactions';
import { motion } from 'framer-motion';
import { fetchSingleRecipe } from '../../hooks/fetch';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import PostDetails from '../common/PostDetails';

const Post = ({ id, background }) => {
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/recipes/${id}`);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchSingleRecipe(id);
      setRecipe(data);
    };
    getData();
  }, [id]);

  const {
    strMealThumb = '',
    strMeal = '',
    strArea = '',
    strCategory = '',
    strIngredient1 = '',
    strIngredient2 = '',
    strIngredient3 = '',
    strInstructions = '',
  } = recipe;

  return (
    <motion.div
      whileHover={{ scale: 0.99 }}
      className={`rounded-lg shadow p-5 mb-6 cursor-pointer ${background}`}
      onClick={() => handleClick(id)}
    >
      <div className="flex w-full flex-row space-x-10">
        <div className="min-w-1/2">
          <img
            src={strMealThumb}
            alt={strMeal}
            loading="lazy"
            className="rounded-lg w-full h-[200px] object-cover"
          />
        </div>
        <div className="flex flex-col items-start w-1/2 mb-4 pt-3">
          {' '}
          <h3 className="font-semibold text-2xl">{strMeal}</h3>
          <div className="pt-5">
            <PostDetails label="Origin" value={strArea} />{' '}
            <PostDetails label="Category" value={strCategory} />{' '}
            <PostDetails
              label="Ingredients"
              value={`${strIngredient1}, ${strIngredient2}, ${strIngredient3}`}
            />
            <PostDetails
              label="Instructions"
              value={strInstructions.slice(0, 100) + '...'}
            />
          </div>
        </div>
      </div>

      <ReactionButtons />
    </motion.div>
  );
};

Post.propTypes = {
  background: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default Post;
