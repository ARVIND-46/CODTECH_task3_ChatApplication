import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const Story = () => {
  const scrollRef = useRef();
  const navigate =useNavigate();
  const handleClick = (id) => {
  navigate(`/story/${id}`);
};

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const friendStories = [
    { id: 1, name: 'Leo', image: '/story1.jpg' },
    { id: 2, name: 'alpha_stride', image: '/story2.jpg' },
    { id: 3, name: 'mellow.motion', image: '/story3.jpg' },
    { id: 4, name: 'David', image: '/story4.jpg' },
    { id: 5, name: 'Eve', image: '/story5.jpg' },
    { id: 6, name: 'Frank', image: '/story6.jpg' },
    { id: 7, name: 'Grace', image: '/story7.jpg' },
    { id: 8, name: 'satin.aura', image: '/story8.jpg' },
    { id: 9, name: 'Ivy', image: '/story9.jpg' },
    { id: 10, name: 'honey.beam', image: '/story10.jpg' },
    
  ];

  return (
    <div className="relative bg-white px-4 py-4 mt-6 max-w-full md:max-w-5xl mx-auto rounded-lg shadow overflow-hidden">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 z-10 hover:scale-110 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 z-10 hover:scale-110 transition"
      >
        <FaChevronRight />
      </button>

      {/* Story List */}
      <div
        ref={scrollRef}
        className="flex space-x-4 sm:space-x-6 overflow-x-auto px-10 no-scrollbar"
      >
        {friendStories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center text-black min-w-max"
            onClick={()=>handleClick(story.id)}
          >
            <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
              <div className="bg-white p-[2px] rounded-full">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-full border-2 border-black"
                />
              </div>
            </div>
            <span className="text-xs sm:text-sm mt-2">{story.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
