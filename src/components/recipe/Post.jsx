import PropTypes from 'prop-types';
import ReactionButtons from './Reactions';
import profileImage from '../../assets/images/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses-min.jpg';
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router';

const Post = ({ username, id, time, content, images = [], backround }) => {
  const navigate = useNavigate();

  const handleClcik = (id) => {
    navigate(`${id}`);
  };
  return (
    <motion.div
      whileHover={{ scale: 0.99 }}
      className={`rounded-lg shadow p-5 mb-6 cursor-pointer ${backround}`}
      onClick={() => handleClcik(id)}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{username}</h4>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
      </div>
      <p className="mb-4">{content}</p>
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Post content"
            className="rounded-lg w-full h-[200px] object-cover"
          />
        ))}
      </div>
      <ReactionButtons />
    </motion.div>
  );
};

Post.propTypes = {
  username: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.any),
  backround: PropTypes.any,
  id: PropTypes.any,
};

export default Post;
