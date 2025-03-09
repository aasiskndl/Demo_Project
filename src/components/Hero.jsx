import React from 'react';
import LocationMap from './projects/LocationMap';
const Hero = () => {
  return (
    <div className="bg-secondary h-screen w-full flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-widest">
        Welcome to <span className="text-yellow-500">Matrika Technology</span>
      </h1>
      <p className="text-black text-base md:text-lg max-w-[700px] leading-relaxed">
        We provide top-notch software solutions & digital services to uplift your business with the latest technology.
      </p>
      <button className="mt-10 px-8 md:px-10 py-3 text-base md:text-lg bg-yellow-500 hover:bg-yellow-600 transition-all rounded-full">
        Explore Services
      </button>
    </div>
    
  );
};

export default Hero;
