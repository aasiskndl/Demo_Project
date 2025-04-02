import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import image from '/images/dashboard.webp';
import { useNavigate } from 'react-router-dom';
import video from '/videos/jjewellery.mp4';
import logo from '/images/jjewellery-logo.png';

const features = [
  {
    title: "Comprehensive Order Management",
    description: "Easily manage and track customer orders from start to finish. With JJewellery's order management system, you can stay organized, ensuring timely deliveries and satisfied customers."
  },
  {
    title: "Effortless Billing & Invoicing",
    description: "Create accurate invoices and bills effortlessly. JJewellery ensures that all your billing processes are streamlined and automated, minimizing errors and saving time."
  },
  {
    title: "Auto Gold Rate Updates",
    description: "Stay on top of fluctuating gold prices with real-time, automated gold rate updates. This feature helps you maintain accurate pricing and make informed decisions for your business."
  },
  {
    title: "Inventory & Stock Control",
    description: "Track your stock in real-time, manage raw materials and finished products efficiently. JJewellery ensures that you never run out of stock or overstock, optimizing your inventory."
  },
  {
    title: "Karigar (Artisan) Stock Management",
    description: "Keep track of materials issued to your karigars (artisans) and monitor the progress of their work. This feature helps ensure smooth operations within your workshop and reduces manual tracking errors."
  },
  {
    title: "Jewellery Tag Printing",
    description: "Generate custom jewelry tags with detailed information, such as weight, material, and pricing. This feature helps maintain consistency and professionalism across your products."
  },
  {
    title: "Loan & Finance Management",
    description: "Manage customer loans with ease. JJewellery helps you track loan amounts, payments, and interest calculations, ensuring transparency and reducing the risk of financial errors."
  }
];

const JJewelleryHero = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className='bg-secondary'>
      <div className="flex justify-center items-center h-16 ">
        <img
          src={logo}
          alt="Jewellery Logo"
          className="w-[30%] max-w-32 h-auto object-cover"
        />

      </div>

      {/* Hero Section */}
      <section className='text-center px-6 py-16'>

        <h1 className='text-4xl md:text-5xl font-bold text-slate-700 leading-tight'>
          JJewellery Software
        </h1>
        <p className='mt-6 max-w-7xl mx-auto text-lg text-slate-600'>
          JJewellery is a comprehensive software solution tailored for jewelry businesses, offering features like order management, billing, auto gold rate, stock control, karigar stock, jewellery tag printing, and loan management. This all-in-one tool simplifies your business operations, helping you manage customer orders, track inventory, and handle financial transactions with ease. JJewellery is designed to enhance efficiency and accuracy in your jewelry business, providing a seamless experience for both you and your customers.
        </p>
        <div className='mt-8 flex justify-center gap-4'>
          <button
            className="group inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-yellow-500 text-white rounded-md transition-colors duration-300"
            onClick={handleContactClick}
          >
            Get Free Demo
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            className="bg-gray-700 hover:bg-yellow-500 text-white py-2 px-6 rounded-md shadow font-semibold transition-colors duration-300 transform hover:scale-[1.02]"
            onClick={() => setIsPlaying(true)}
          >
            Demo Video
          </button>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className='flex justify-center px-4 sm:px-8 md:px-12 py-10'>
        <div className="relative w-full max-w-7xl">
          <img
            src={image}
            alt="JJewellery Software Dashboard Preview"
            className='w-full rounded-lg shadow-xl object-cover'
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className='bg-secondary py-16 px-6 flex flex-col'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-slate-700'>
          Key Features
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='bg-answer p-6 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300'
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                type: 'spring',
                stiffness: 50,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <h3 className='text-xl mb-4 text-slate-700 font-semibold'>
                {feature.title}
              </h3>
              <p className='text-md text-slate-600 leading-relaxed'>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl aspect-video relative">
            <button
              className="absolute -top-3 -right-3 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors z-10"
              onClick={() => setIsPlaying(false)}
            >
              ✕
            </button>
            <video
              controls
              autoPlay
              muted
              className="w-full h-full rounded-lg object-cover"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default JJewelleryHero;