import React, { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import Message from './Message';

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        {isOpen ? <FaTimes size={20} /> : <FaComments size={24} />}
      </button>

      {/* Popup Chat Box */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-20 sm:right-4 sm:w-[90%] sm:max-w-md sm:h-[80vh] h-screen z-40 bg-white border border-gray-300 rounded-none sm:rounded-xl shadow-xl flex flex-col">
          <Message />
        </div>
      )}
    </>
  );
};

export default ChatPopup;
