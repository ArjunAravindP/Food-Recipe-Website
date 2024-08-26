import like from '../../assets/images/like.svg';
import comment from '../../assets/images/comment-svgrepo-com.svg';
import whishlist from '../../assets/images/like-svgrepo-com.svg';
import { motion } from 'framer-motion';

const ReactionButtons = () => {
  return (
    <div className="flex items-center justify-start space-x-5 mt-4">
      <button className="flex items-center space-x-2 text-gray-600">
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="w-5 h-5"
          src={like}
          alt="like"
        />
      </button>
      <button className="flex items-center space-x-2 text-gray-600">
        <motion.img
          whileHover={{ scale: 1.2 }}
          className="w-5 h-5"
          src={comment}
          alt="comment"
        />
      </button>
      <button className="flex items-center space-x-2 text-gray-600">
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="w-5 h-5"
          src={whishlist}
          alt="whishlist"
        />
      </button>
    </div>
  );
};

export default ReactionButtons;
