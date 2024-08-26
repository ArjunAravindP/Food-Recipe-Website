import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../components/recipe/Sidebar';
import RightSidebar from '../components/recipe/RightSidebar';
import { TabProvider } from '../context/TabProvider';
import TabContent from '../components/recipe/FeedContent';
import Recipe from '../components/recipe/Recipe';

const Recipes = () => {
  const [activeTab, setActiveTab] = useState('new-recipes');
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading with a timeout or load necessary data here
    const loadContent = async () => {
      // If you have any asynchronous data fetching or preparation, you can do it here.
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoaded(true);
    };

    loadContent();
  }, []);

  return (
    <TabProvider>
      <div className="flex bg-white min-h-screen">
        {/* Check if content is loaded */}
        {isLoaded ? (
          <>
            {/* Fixed Sidebar */}
            <div className="w-1/4 fixed top-20 left-0 h-full bg-white z-20">
              <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 ml-1/4 mr-1/4 pt-24">
              {id ? <Recipe /> : <TabContent />}
            </div>

            {/* Fixed Right Sidebar */}
            <div className="w-1/4 fixed top-20 right-0 h-full bg-white z-20">
              <RightSidebar />
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </TabProvider>
  );
};

export default Recipes;
