import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
    const {user} = useContext(UserContext);
    // console.log(user)
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
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            <li className="hover:text-gray-300 cursor-pointer">{user}</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;
  