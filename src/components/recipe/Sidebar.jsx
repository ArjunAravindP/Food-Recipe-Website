import profilePic from '../../assets/images/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses-min.jpg';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTab } from '../../context/useTab';
import { useNavigate } from 'react-router';
import { fetchCategories } from '../../hooks/fetch';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const { activeTab, setActiveTab } = useTab();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };
    getData();
  }, []);
  const navigate = useNavigate();

  const handleClick = (value) => {
    navigate('/recipes');
    setActiveTab(value);
  };

  return (
    <div className="bg-white p-5 h-full flex flex-col">
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
      <nav className="mt-5 flex-1 overflow-y-auto">
        <ul>
          {categories.map((item) => (
            <motion.li
              key={item.idCategory}
              className={`py-2 px-4 rounded-lg cursor-pointer ${activeTab === item.strCategory ? 'bg-black text-white' : 'hover:bg-gray-200 text-gray-700'}`}
              onClick={() => handleClick(item.strCategory)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {item.strCategory}
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
