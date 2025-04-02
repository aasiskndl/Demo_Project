import React from 'react';
import { motion } from 'framer-motion';
import image from '/images/dashboard.webp';
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import logo from '/images/matec-restaurant-logo.jpg';

// Constants on the webpage
const features = [
  {
    title: "Certified by IRD Nepal",
    description: "M-Tech Billing is fully certified by the Inland Revenue Department (IRD) of Nepal, ensuring your business complies with government regulations. You can confidently manage your billing processes while adhering to the legal standards."
  },
  {
    title: "Accurate Bill Generation",
    description: "Generate error-free invoices and bills with M-Tech Billing. The software ensures that every transaction is recorded correctly, reducing mistakes and ensuring accurate financial documentation for your business."
  },
  {
    title: "Seamless Transaction Management",
    description: "Easily manage and track all your business transactions with M-Tech Billing. Handle payments, refunds, and adjustments effortlessly, ensuring smooth financial operations and clarity in your business’s financial history."
  },
  {
    title: "Effortless Record Keeping",
    description: "M-Tech Billing automatically maintains detailed transaction records, making it easy to access and manage your business’s financial data. This feature simplifies auditing and ensures your records are always up to date."
  },
  {
    title: "Government Standard Compliance",
    description: "Our software is built to meet all regulatory requirements set by the government. M-Tech Billing ensures that your billing processes are always aligned with the latest tax and legal standards in Nepal."
  },
  {
    title: "User-Friendly Interface",
    description: "M-Tech Billing features a simple and intuitive interface, allowing even those with minimal technical experience to use the software effectively. Start managing your billing processes with ease and minimal training."
  },
];


const MatecRestaurantHero = () => {
  //for navigation to contactus page
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };
  return (
    <div className='bg-secondary'>
      <div className="flex justify-center items-center h-16 ">
        <img
          src={logo}
          alt="Matec Restaurant Logo"
          className="w-[30%] max-w-32 h-auto object-cover"
        />
      </div>
      {/* Hero Section */}
      <section className='text-center px-6 py-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-slate-700 leading-tight'>
          Matec Restaurant Software
        </h1>
        <p className='mt-6 max-w-7xl mx-auto text-lg text-slate-600'>
          Matec Restaurant is an integrated software solution specifically designed for the restaurant industry. It offers robust features for order management, billing, and stock control, enabling restaurant owners to streamline their operations. With Matec Restaurant, you can manage customer orders, track inventory, and generate accurate bills, all in one place. This software is essential for running a smooth and efficient restaurant business.
        </p>
        <div className='mt-8 flex justify-center gap-4'>
          <button
            className="group inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-yellow-500 text-white rounded-md transition-colors duration-300"
            onClick={handleContactClick} >
            Get Free Demo
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button className='bg-gray-700 hover:bg-yellow-500 text-white py-2 px-6 rounded-md shadow font-semibold transition-colors duration-300 transform hover:scale-[1.02]'>
            Demo Video
          </button>
        </div>
      </section>

      {/* Image Section */}
      <section className='flex justify-center px-4 sm:px-8 md:px-12 py-10'>
        <div className="relative w-full max-w-7xl">
          <img
            src={image}
            alt="Image"
            className='w-full rounded-lg shadow-xl object-cover'
          />
        </div>
      </section>

      {/* Features Section with Animation */}
      <section className='bg-secondary py-16 px-6 flex flex-col'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-slate-700'>Key Features</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='bg-answer p-6 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300'
              initial={{ opacity: 0, y: 100 }} // Comes from the bottom
              whileInView={{ opacity: 1, y: 0 }} // Moves to original position
              transition={{
                duration: 0.2,
                type: 'spring',
                stiffness: 50,
                delay: index * 0.1, // Stagger the animation for each card
              }}
              viewport={{ once: true }} // Trigger the animation only once when it's in view
            >
              <h3 className='text-xl text-bold  mb-4 text-slate-700'>{feature.title}</h3>
              <p className='text-md text-slate-600 leading-relaxed'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MatecRestaurantHero;
