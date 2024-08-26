import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="flex ml-28 fixed z-10 justify-center space-x-60 items-center p-6 bg-transparent">
      <div className=" text-3xl font-bold text-orange-500">
        <Link href="/">
          M<span className="text-black">o</span>K
          <span className="text-black">o</span>
        </Link>
      </div>
      {/* <nav className="space-x-8">
        <Link href="#" className="text-lg text-gray-700 hover:text-black">
          Home
        </Link>
        <Link href="#" className="text-lg text-gray-700 hover:text-black">
          Menu
        </Link>
        <Link href="#" className="text-lg text-gray-700 hover:text-black">
          Service
        </Link>
        <Link href="#" className="text-lg text-gray-700 hover:text-black">
          Shop
        </Link>
      </nav> */}
    </header>
  );
};

export default Header;
