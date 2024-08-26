import profilePic from '../../assets/images/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses-min.jpg';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTab } from '../../context/useTab';
import { useNavigate } from 'react-router';
const Sidebar = () => {
  const { activeTab, setActiveTab } = useTab();
  const navigate = useNavigate();
  const menyItems = [
    { name: 'New Recipies', value: 'new-recipes' },
    { name: 'Breakfast', value: 'breakfast' },
    { name: 'Lunch', value: 'lunch' },
    { name: 'Dinner', value: 'dinner' },
    { name: 'Top rated', value: 'top-rated' },
    { name: 'My whishlist', value: 'my-whishlist' },
    { name: 'My recipies', value: 'my-recipes' },
  ];
  const handleClick = (value) => {
    navigate('/recipes');
    setActiveTab(value);
  };

  return (
    <div className=" bg-white p-5">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20">
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <h2 className="mt-4 font-semibold">Bogdan Nikitin</h2>
        <p className="text-gray-500">@nikitinteam</p>
      </div>
      <nav className="mt-8">
        <ul>
          {menyItems.map((item) => (
            <motion.li
              key={item.value}
              className={`py-2 px-4 rounded-lg cursor-pointer ${activeTab === item.value ? 'bg-black text-white' : 'hover:bg-gray-200 text-gray-700'}`}
              onClick={() => handleClick(item.value)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {item.name}
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
Sidebar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Sidebar;
