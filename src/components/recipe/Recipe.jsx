import { useState } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../../assets/images/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses-min.jpg';
import dummyImage from '../../assets/images/bowl-vegetables-with-blue-background-with-picture-salad-with-cucumber-tomatoes-cucumbe.jpg';
import backgroundImage from '../../assets/images/recipe-header.svg';
import LikeIcon from '../../assets/images/like.svg';
import WhislistIcon from '../../assets/images/like-svgrepo-com.svg';
import dummyImageOne from '../../assets/images/images (1).jpeg';
import dummyImageTwo from '../../assets/images/images.jpeg';

export default function Recipie() {
  const [checkedItems, setCheckedItems] = useState({});
  const [checkedSteps, setCheckedSteps] = useState({});
  const images = [dummyImageOne, dummyImageTwo];

  const ingredients = [
    '454 g. salmon (see note 1)',
    '1 tablespoon brown sugar',
    '1 teaspoon paprika',
    '1 teaspoon smoked paprika',
    '454 g. salmon (see note 1)',
    '1 tablespoon brown sugar',
    '1 teaspoon paprika',
    '1 teaspoon smoked paprika',
  ];

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
          Shewnan Chicken Fried Rice
        </h2>
        <div className="w-1/4 flex flex-col items-center">
          <img
            className="w-28 h-28 rounded-full"
            src={dummyImage}
            alt="dummy"
          />
        </div>
        <div className="w-1/4 text-white font-bold flex flex-col text-2xl items-end pr-4">
          <p>Time</p>
          <p>02 hrs</p>
          <p>20 min</p>
        </div>
      </motion.div>
      <motion.div
        className="bg-slate-50 w-full h-auto mt-5 rounded-lg p-5"
        variants={itemVariants}
      >
        <div className="flex flex-col items-center space-y-3">
          <h2 className="w-3/4 text-3xl pl-4 text-center font-bold text-black">
            Shewnan Chicken Fried Rice
          </h2>
          <div className="flex flex-row space-x-4 font-bold text-xl">
            <p>11.2k</p>
            <img className="w-6 h-6" src={LikeIcon} alt="like icon" />
            <p>13.1k</p>
            <img className="w-6 h-6" src={WhislistIcon} alt="wishlist icon" />
          </div>
          <div className="w-20 h-20">
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 font-semibold">Bogdan Nikitin</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Post content"
              className="rounded-lg w-full h-[200px] object-cover"
            />
          ))}
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
              {ingredients.map((item, index) => (
                <motion.li
                  key={index}
                  className={`flex flex-col items-start  space-x-2 ${
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
