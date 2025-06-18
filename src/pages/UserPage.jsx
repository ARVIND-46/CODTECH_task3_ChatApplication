import React from 'react';
import SideBar from '../components/SideBar';
import Story from '../components/Story';
import ChatPopup from '../components/ChatPopup';
import Post from '../components/Post';

const UserPage = () => {
  return (
    <div className="flex bg-white min-h-screen text-black">
      {/* Sidebar (fixed and hidden on small screens) */}
      <div className="hidden md:block fixed h-full">
        <SideBar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 w-full">
        {/* Story at top */}
        <Story />

        {/* Posts below stories */}
        <Post />
      </div>

      {/* Floating Chat Popup */}
      <ChatPopup />
    </div>
  );
};

export default UserPage;
