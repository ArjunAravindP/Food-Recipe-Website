import { Link } from 'react-router-dom';
import marbleImage from '../assets/images/black-marbled-surface.jpg';
import foodInBowl from '../assets/images/food-in-bowl.png';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className=" bg-gray-50">
      <section className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        <div className="space-y-5 md:w-1/2 flex flex-col  pt-[200px] pl-[150px] h-scree text-left">
          <h1 className="text-6xl font-bold leading-tight text-black">
            Create your <br />
            <span className="text-orange-500 font-thin">favourite Foods</span>
          </h1>
          <p className="text-lg text-gray-500">
            The one stop destination for all your favvourite food recipies.
            Create, Taste, Share...!
          </p>

          <div className="flex space-x-4">
            <Link
              to="recipes"
              className="flex items-center px-6 py-3 text-white bg-black rounded-full"
            >
              <span className="material-icons pr-2">Explore</span>
              Recipes
            </Link>
          </div>
          <div className="z-10 flex flex-row justify-between space-x-3 items-center mt-12 pt-10">
            <div className="flex flex-col items-center space-y-2 w-50">
              <div className="bg-green-100 p-4 rounded-full w-60 flex flex-row justify-between items-center">
                <img
                  src="https://via.placeholder.com/64"
                  alt="Burger"
                  className="rounded-full"
                />
                <span>Burger</span>
                <button className="text-white bg-black px-2 py-1 rounded-xl">
                  View
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2 w-50">
              <div className="bg-yellow-100 p-4 rounded-full w-60 flex flex-row justify-between items-center">
                <img
                  src="https://via.placeholder.com/64"
                  alt="Burger"
                  className="rounded-full"
                />
                <span>Burger</span>
                <button className="text-white bg-black px-2 py-1 rounded-xl">
                  View
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2 w-50">
              <div className="bg-pink-100 p-4 rounded-full w-60 flex flex-row justify-between items-center">
                <img
                  src="https://via.placeholder.com/64"
                  alt="Burger"
                  className="rounded-full"
                />
                <span>Burger</span>
                <button className="text-white bg-black px-2 py-1 rounded-xl">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center relative overflow-hidden">
          <div className="relative">
            <img
              src={marbleImage}
              alt="marble backround"
              className="h-[900px] w-[900px] md:h-[800px] md:w-[800px] rounded-full translate-x-[450px] -translate-y-[20px] min-w-[900px]"
            />
            <motion.img
              src={foodInBowl}
              alt="Food in Bowl"
              className="absolute  top-20 left-40 w-2/3 h-auto"
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
    </div>
  );
};

export default HomePage;
