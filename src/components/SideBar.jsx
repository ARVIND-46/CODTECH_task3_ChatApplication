import React from 'react';
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaEnvelope,
  FaBell,
  FaPlus,
  FaUser,
  FaEllipsisH,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex h-screen w-64 bg-white border-r shadow-md p-6 fixed top-0 left-0 flex-col justify-between z-20">
      <div>
        {/* Logo */}
        <h1 className="text-3xl font-bold mb-10 font-poppins text-blue-500">Intouch</h1>

        {/* Menu Items */}
        <ul className="space-y-6">
          <li className="flex items-center space-x-4 text-gray-700 hover:text-blue-500 cursor-pointer">
            <FaHome className="text-xl" />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-4 text-gray-700 hover:text-blue-500 cursor-pointer">
            <FaSearch className="text-xl" />
            <span>Search</span>
          </li>
          <li className="flex items-center space-x-4 text-gray-700 hover:text-blue-500 cursor-pointer">
            <FaCompass className="text-xl" />
            <span>Explore</span>
          </li>
          <li className="flex items-center space-x-4 text-gray-700 hover:text-blue-500 cursor-pointer">
            <FaEnvelope className="text-xl" />
            <span >
             Messages 
            </span>
          </li>
          <li className="flex items-center space-x-4 text-gray-700 hover:text-blue-500 cursor-pointer">
            <FaBell className="text-xl" />
            <span>Notifications</span>
          </li>
          <li className="flex items-center space-x-4 text-gray-700 hover:text-blue-500 cursor-pointer">
            <FaPlus className="text-xl" />
            <span>Create</span>
          </li>
          <li className="flex items-center space-x-4 text-gray-700 hover:text-blue-500 cursor-pointer">
            <FaUser className="text-xl" />
            <span>Profile</span>
          </li>
        </ul>
      </div>

      {/* Footer Option */}
      <div className="mt-10">
        <li className="flex items-center space-x-4 text-gray-700 hover:text-blue-500 cursor-pointer list-none">
          <FaEllipsisH className="text-xl" />
          <span>More</span>
        </li>
      </div>
    </div>
  );
};

export default SideBar;
