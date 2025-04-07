import React, { useState } from 'react';
import { FaLightbulb, FaDesktop, FaBriefcase, FaUserTie } from 'react-icons/fa';
import image from '/images/footer-img.svg';
import arrow from '/images/arrow.png';
import { useNavigate } from 'react-router-dom';

const contactDetails = [
  {
    icon: <FaLightbulb className="text-green-500 text-3xl" />,
    title: "New Business",
    phone: "980000000",
    email: "info@matrikatec.com.np",
  },
  {
    icon: <FaDesktop className="text-yellow-500 text-3xl" />,
    title: "Project Consultation",
    phone: "98000000",
    email: "info@matrikatec.com.np",
  },
  {
    icon: <FaBriefcase className="text-purple-500 text-3xl" />,
    title: "Technical Support",
    phone: "9800000",
    email: "info@matrikatec.com.np",
  },
  {
    icon: <FaUserTie className="text-rose-400 text-3xl" />,
    title: "Join Our Team",
    phone: "98000000",
    email: "info@matrikatec.com.np",
  },
];

const SecondaryFooter = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="w-[90%] mx-auto px-4 md:px-10 lg:px-20 py-8 md:py-16 text-center text-gray-300 bg-slate-800 relative -mb-10">
      {/* Image on the Right - Hidden on mobile */}
      <img
        src={image}
        alt="Footer decoration"
        className="hidden md:block absolute -right-12 top-[-5%] md:top-[-5%] transform -translate-y-1/2 w-40 md:w-52 lg:w-60"
        style={{ zIndex: 1 }}
      />

      {/* Arrow + Button */}
      <div className="absolute flex flex-col md:flex-row items-center gap-2 md:gap-4 right-4 md:right-[12rem] top-[-15%] md:top-[-25%] z-10">
        <button
          className="px-4 py-2 md:px-6 md:py-3 bg-gray-700 hover:bg-yellow-500 text-white rounded-md transition-colors duration-300 text-sm md:text-base"
          onClick={handleContactClick}
        >
          Get in Touch
        </button>
        <img
          src={arrow}
          alt="Arrow"
          className="w-8 md:w-14 rotate-90 md:rotate-0"
        />
      </div>

      {/* Contact Cards */}
      <div className="relative z-10 w-full mx-auto md:right-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-y-10 gap-x-4 items-start justify-items-center">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 text-center">
              {item.icon}
              <h3 className="font-bold text-base md:text-lg">{item.title}</h3>
              <p className="text-xs md:text-sm">{item.phone}</p>
              <p className="text-xs md:text-sm">{item.email}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondaryFooter;