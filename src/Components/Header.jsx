import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img
          src="https://e7.pngegg.com/pngimages/639/449/png-clipart-computer-icons-website-icon-text-globe.png"
          alt="Logo"
          className="h-8 w-8 mr-2"
        />
        <span className="text-xl font-bold">My Website</span>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">{user}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
