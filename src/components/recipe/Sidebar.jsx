import profilePic from '../../assets/images/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses-min.jpg';

const Sidebar = () => {
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
          <li className="py-2 px-4 hover:bg-gray-200 rounded-lg">News Feed</li>
          <li className="py-2 px-4 hover:bg-gray-200 rounded-lg">Messages</li>
          <li className="py-2 px-4 hover:bg-gray-200 rounded-lg">Forums</li>
          <li className="py-2 px-4 hover:bg-gray-200 rounded-lg">Friends</li>
          <li className="py-2 px-4 hover:bg-gray-200 rounded-lg">Media</li>
          <li className="py-2 px-4 hover:bg-gray-200 rounded-lg">Settings</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
