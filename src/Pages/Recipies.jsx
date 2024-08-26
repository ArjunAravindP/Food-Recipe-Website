import Sidebar from '../components/recipe/Sidebar';
import Feed from '../components/recipe/Feed';
import RightSidebar from '../components/recipe/RightSidebar';

const Recipes = () => {
  return (
    <div className="flex bg-white min-h-screen">
      {/* Fixed Sidebar */}
      <div className="w-1/4 fixed top-24 left-0 h-screen bg-white z-10">
        <Sidebar />
      </div>

      {/* Scrollable Feed */}
      <div className="w-2/4 ml-[25%] h-screen">
        <Feed />
      </div>

      {/* Fixed Right Sidebar */}
      <div className="w-1/4 fixed top-24 right-0 h-screen bg-white z-10">
        <RightSidebar />
      </div>
    </div>
  );
};
export default Recipes;
