import React from 'react';
import SideBar from '../components/SideBar';
import Story from '../components/Story';
import Message from '../components/Message';
import ChatPopup from '../components/ChatPopup';

const UserPage = () => {
  return (
    <div className="flex bg-white min-h-screen text-black">
      {/* Sidebar (hidden on small screens) */}
      <div className="hidden md:block fixed">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 w-full">
        <Story />
        {/* Add other content below Story */}
      </div>
      <div className="relative">
        <ChatPopup />
      </div>
    </div>
  );
};

export default UserPage;
