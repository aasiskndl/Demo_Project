import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="bg-secondary relative py-16 md:py-28 px-4 sm:px-6 lg:px-16 overflow-hidden -mt-6 mb-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left Text Section */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-700 leading-tight">
              Matrika Technology <br /> For Jeweller's
            </h1>
            <p className="text-base sm:text-lg text-slate-600">
              Powerful, Easy-to-Use Software for Seamless Jewellery Business Management – From Billing to Stock Control, Everything at Your Fingertips!
            </p>

            {/* Button */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                className="group inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-yellow-500 text-white rounded-md transition-colors duration-300"
                onClick={handleContactClick}
              >
                Get Free Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-3 flex justify-center">
            <div className="bg-white rounded-lg overflow-hidden w-full max-w-[500px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px]">
              <img
                src="/images/jje.png"
                alt="Dashboard Preview"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Banner;
