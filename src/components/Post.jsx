import React, { useState } from 'react';
import users from '../components/User'; // now expecting an array of users
import Slider from 'react-slick';
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaBookmark,
  FaShareAlt,
} from 'react-icons/fa';

const Post = () => {
  const [likes, setLikes] = useState({});

  const toggleLike = (postId) => {
    setLikes((prev) => ({
      ...prev,
      [postId]: prev[postId] ? 0 : 1,
    }));
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100 min-h-screen py-4">
      <div className="max-w-2xl mx-auto space-y-10">
        {users.map((user) => (
          <div key={user.id}>
            {/* User Header */}
            <div className="flex items-center space-x-4 px-4">
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-12 h-12 rounded-full object-contain"
              />
              <div>
                <h2 className="text-lg font-bold">{user.name}</h2>  
              </div>
            </div>

            {/* User's Posts */}
            <div className="mt-4 space-y-6">
              {user.posts.map((post) => {
                const images = [post.image, post.image1].filter(Boolean);

                return (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg shadow-md p-4 space-y-3"
                  >
                    <p className="text-gray-700">{post.description}</p>

                    {/* Image Slider */}
                    {images.length > 1 ? (
                      <Slider {...sliderSettings}>
                        {images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`Slide ${idx + 1}`}
                           className="w-full max-h-[600px] object-cover rounded-lg"

                          />
                        ))}
                      </Slider>
                    ) : images.length === 1 ? (
                      <img
                        src={images[0]}
                        alt="Post"
                        className="w-full max-h-[600px] object-cover rounded-lg"

                      />
                    ) : null}

                    {/* Video */}
                    {post.video && (
                      <video
                        controls
                        loop
                        autoPlay
                        className="w-full max-h-[600px] object-cover rounded-lg"
                      >
                        <source src={post.video} type="video/mp4" />
                      </video>
                    )}

                    {/* Actions */}
                    <div className="flex items-center justify-between mt-2 text-gray-600">
                      <div className="flex items-center space-x-4">
                        <button onClick={() => toggleLike(post.id)}>
                          {likes[post.id] ? (
                            <FaHeart className="text-red-500" />
                          ) : (
                            <FaRegHeart />
                          )}
                        </button>
                        <span>{likes[post.id] || 0} likes</span>
                        <FaComment className="hover:text-black cursor-pointer" />
                      </div>
                      <div className="flex items-center space-x-4">
                        <FaBookmark className="hover:text-black cursor-pointer" />
                        <FaShareAlt className="hover:text-black cursor-pointer" />
                      </div>
                    </div>

                    <p className="text-xs text-gray-400">
                      Posted on {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
