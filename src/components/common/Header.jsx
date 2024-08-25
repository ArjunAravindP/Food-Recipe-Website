const Header = () => {
  return (
    <header className=" flex justify-center space-x-60 items-center p-6 bg-gray-50">
      <div className=" text-3xl font-bold text-orange-500">
        M<span className="text-black">o</span>K
        <span className="text-black">o</span>
      </div>
      <nav className="space-x-8">
        <a href="#" className="text-lg text-gray-700 hover:text-black">
          Home
        </a>
        <a href="#" className="text-lg text-gray-700 hover:text-black">
          Menu
        </a>
        <a href="#" className="text-lg text-gray-700 hover:text-black">
          Service
        </a>
        <a href="#" className="text-lg text-gray-700 hover:text-black">
          Shop
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <span className="material-icons text-gray-600">search</span>
        </button>
        <button className="relative">
          <span className="material-icons text-gray-600">shopping_cart</span>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full">
            2
          </span>
        </button>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-gray-600">Sign in</button>
          <button className="px-4 py-2 bg-yellow-400 text-white rounded-full">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
