import React from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col justify-center items-center z-50 px-4">
      
      {/* Bouncy GIF */}
      <img
        src="/images/Animation.gif"
        alt="Loading..."
        className="h-28 sm:h-36 md:h-44 lg:h-52 mb-6 bounce"
      />

      {/* Typing Text */}
      <p className="typing-text text-base sm:text-lg md:text-xl lg:text-2xl">
        Loading!!!
      </p>
    </div>
  );
};

export default LoadingAnimation;
