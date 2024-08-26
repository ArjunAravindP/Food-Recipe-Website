const RightSidebar = () => {
  return (
    <div className="w-1/4 p-5">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Stories</h3>
        {/* Add Story components here */}
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Suggestions</h3>
        {/* Add Suggestion components here */}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
        {/* Add Recommendation components here */}
      </div>
    </div>
  );
};

export default RightSidebar;
