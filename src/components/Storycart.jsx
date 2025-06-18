import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const storyData = [
  { id: '1', name: 'Leo', image: '/story1.jpg', content: "Visually stunning, Leo's world unfolds." },
  { id: '2', name: 'alpha_stride', image: '/story2.jpg', content: "Dynamic visuals capture Alpha's swift ascent." },
  { id: '3', name: 'mellow.motion', image: '/story3.jpg', content: "A visually serene and immersive experience." },
  { id: "4", name: 'David', image: '/story4.jpg', content: "High-contrast imagery highlights David's dramatic narrative." },
  { id: "5", name: 'Eve', image: '/story5.jpg', content: "Vibrant hues and whimsical art tell Eve's tale." },
  { id: "6", name: 'Frank', image: '/story6.jpg', content: "Lively animations bring Frank's antics to life." },
  { id: "7", name: 'Grace', image: '/story7.jpg', content: "Ethereal visuals paint Grace's poignant story." },
  { id: "8", name: 'satin.aura', image: '/story8.jpg', content: "Gleaming textures and soft glows define Satin Aura's aesthetic." },
  { id: "9", name: 'Ivy', image: '/story9.jpg', content: "Rich, detailed backdrops enhance Ivy's grand adventure." },
  { id: "10", name: 'honey.beam', image: '/story10.jpg', content: "Warm, inviting tones illuminate Honey Beam's narrative." },
  // more...
];

const Storycart = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(
    storyData.findIndex((s) => s.id === id)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < storyData.length - 1) {
        const nextStoryId = storyData[currentIndex + 1].id;
        navigate(`/story/${nextStoryId}`);
        setCurrentIndex((prev) => prev + 1);
      } else {
        navigate('/user'); // Or your desired route
      }
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, [currentIndex, navigate]);

  const story = storyData[currentIndex];
  if (!story) return <div className="text-center mt-10">Story not found.</div>;

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="bg-white rounded-xl text-black shadow-xl p-6 w-80 sm:w-96 text-center">
        <img
          src={story.image}
          alt={story.name}
          className="w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-full mx-auto"
        />
        <h2 className="mt-4 text-xl font-bold">{story.name}</h2>
        <p className="mt-2 text-gray-700">{story.content}</p>

        <div className="w-full bg-gray-300 h-2 mt-4 rounded">
          <div className="bg-blue-600 h-full animate-progress rounded" style={{ animationDuration: '15s' }} />
        </div>
      </div>
    </div>
  );
};

export default Storycart;
