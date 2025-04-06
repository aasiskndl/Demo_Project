import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import logo from '/images/mtec-billing-logo.png';
import pcimage from '/images/pcmtech-billing.png';
import laptopStyles from "../module_css/Laptop.module.css";

// Constants on the webpage
const features = [
  {
    title: "Certified by IRD Nepal",
    description: "M-Tech Billing is fully certified by the Inland Revenue Department (IRD) of Nepal, ensuring that your business complies with all government regulations. Stay confident that your billing processes are always in line with legal standards."
  },
  {
    title: "Accurate Bill Generation",
    description: "Generate precise invoices and bills without the risk of errors. M-Tech Billing ensures that all financial transactions are recorded accurately, making your invoicing process smooth and reliable."
  },
  {
    title: "Seamless Transaction Management",
    description: "Manage and track all your business transactions effortlessly. From payments to refunds and adjustments, M-Tech Billing helps you handle every aspect of your financial operations with ease."
  },
  {
    title: "Effortless Record Keeping",
    description: "M-Tech Billing automatically stores detailed records of every transaction. Maintain organized financial data that is easy to access, simplifying reporting, auditing, and tax filing."
  },
  {
    title: "Compliance with Government Standards",
    description: "Our software is designed to comply with all the tax regulations and requirements set by the government. M-Tech Billing ensures that your business operates within the legal framework and avoids any potential issues."
  },
  {
    title: "User-Friendly Interface",
    description: "With a simple and intuitive interface, M-Tech Billing makes managing your billing and invoicing processes easy, even for those with limited technical expertise. You can get started quickly with minimal training."
  }
];


const MtechBillingHero = () => {
  const navigate = useNavigate();

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
          M-Tech Billing Software
        </h1>
        <p className='mt-6 max-w-7xl mx-auto text-lg text-slate-600'>
          M-Tech Billing is a powerful online billing software solution, fully certified by the Inland Revenue Department (IRD) of Nepal. Designed for businesses of all sizes, M-Tech Billing streamlines your invoicing and billing processes, ensuring compliance with government regulations. With M-Tech Billing, you can generate accurate bills, manage transactions, and maintain records effortlessly, all while adhering to the standards set by the Nepal government.
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
        {/* <div className="relative w-full max-w-7xl">
          <img
            src={image}
            alt="Image"
            className='w-full rounded-lg shadow-xl object-cover'
          />
        </div> */}

        <div className={`${laptopStyles.laptop} scale-110`}>
          <div className={laptopStyles.laptop__screen}>
            <img src={pcimage} alt="Laptop Screen" width="1800" height="1600" />
          </div>
          <div className={laptopStyles.laptop__base}></div>
        </div>
      </section>

      {/* Features Section with Animation */}
      <section className='bg-secondary py-16 px-6 flex flex-col'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-slate-700'>Our Features</h2>
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
              <h3 className='text-xl mb-4 text-slate-700'>{feature.title}</h3>
              <p className='text-md text-slate-600 leading-relaxed'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MtechBillingHero;
