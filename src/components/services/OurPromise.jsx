import React from 'react';
import { FaUserAlt, FaHeadset, FaTint, FaFileAlt } from 'react-icons/fa';
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';



const OurPromise = () => {

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const data = [
    {
      icon: <FaUserAlt className="text-green-500 text-2xl" />,
      title: "Quality Assurance",
      desc: "We ensure high-quality products through rigorous testing and continuous improvement for maximum reliability and performance.",
    },
    {
      icon: <FaHeadset className="text-yellow-500 text-2xl" />,
      title: "Customer Support",
      desc: "Our team is always ready to help — offering fast, friendly assistance and building strong client relationships.",
    },
    {
      icon: <FaTint className="text-purple-500 text-2xl" />,
      title: "Transparency",
      desc: "We keep you informed at every stage of the project through open communication and regular updates.",
    },
    {
      icon: <FaFileAlt className="text-rose-400 text-2xl" />,
      title: "Timely Completion",
      desc: "With smart planning and agile methods, we deliver projects on time without sacrificing quality.",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-slate-700 mb-10">We Promise & Assure</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-5 text-center transition duration-300 ease-in-out hover:shadow-md"
          >
            <div className="flex justify-center mb-3">
              <div className="bg-gray-100 rounded-full p-3">
                {item.icon}
              </div>
            </div>
            <h3 className="text-md font-semibold text-slate-700 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-secondary py-16 px-4 sm:px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-slate-700 mb-4">Get Started With Us</h2>
        <p className="text-slate-600 text-base leading-relaxed mb-6 max-w-xl mx-auto">
          Let’s turn your ideas into reality. Reach out today and see how we can bring your vision to life with our reliable and efficient solutions.
        </p>
        <button 
        className="group inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-yellow-500 text-white rounded-md transition-colors duration-300"
        onClick={handleContactClick}
        >
          Contact Us
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

    </div>
  );
};

export default OurPromise;
