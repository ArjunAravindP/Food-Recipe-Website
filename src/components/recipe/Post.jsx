import PropTypes from 'prop-types';
import ReactionButtons from './Reactions';
import { motion } from 'framer-motion';
import { fetchSingleRecipe } from '../../hooks/fetch';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import PostDetails from '../common/PostDetails';

const Post = ({ id, backround }) => {
  const [recipe, setRecipie] = useState({});
  const navigate = useNavigate();

  const handleClcik = (id) => {
    navigate(`${id}`);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchSingleRecipe(id);
      setRecipie(data);
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
      className={`rounded-lg shadow p-5 mb-6 cursor-pointer ${backround}`}
      onClick={() => handleClcik(id)}
    >
      <div className="flex w-full flex-row space-x-10">
        <div className="min-w-1/2">
          <img
            src={strMealThumb}
            alt="Post content"
            className="rounded-lg w-full h-[200px] object-cover"
          />
        </div>
        <div className="flex flex-col items-top w-1/2 mb-4 pt-3">
          <h3 className="font-semibold text-2xl">{strMeal}</h3>
          <div className="pt-5">
            <PostDetails label="Orgin" value={strArea} />
            <PostDetails label="category" value={strCategory} />
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
  backround: PropTypes.any,
  id: PropTypes.any,
};

export default Post;
