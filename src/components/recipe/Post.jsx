import PropTypes from 'prop-types';
import ReactionButtons from './Reactions';
import profileImage from '../../assets/images/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses-min.jpg';

const Post = ({ username, time, content, images = [], backround }) => {
  return (
    <div className={`rounded-lg shadow p-5 mb-6 ${backround}`}>
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
    </div>
  );
};

Post.propTypes = {
  username: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.any),
  backround: PropTypes.any,
};

export default Post;
