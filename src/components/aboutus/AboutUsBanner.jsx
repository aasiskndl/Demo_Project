import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
const AboutUsBanner = () => {
    const navigate = useNavigate();
    
      const handleContactClick = () => {
        navigate('/contact');
      };
    return (
        <div className='bg-secondary relative py-16 md:py-28 px-4 sm:px-6 lg:px-16 overflow-hidden -mt-6'>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Text Section */}
                    <div className="space-y-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-700 leading-tight">
                            About Us description title
                        </h1>
                        <p className="text-base sm:text-lg text-slate-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas commodi quam illum veniam modi pariatur et odit ut, obcaecati dolorum architecto distinctio mollitia eligendi corrupti corporis vero asperiores? Voluptate, repudiandae?
                        </p>
                        {/* Button */}
                        <div className="flex flex-wrap gap-4">
                            <button
                                className="group inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-yellow-500 text-white rounded-md transition-colors duration-300"
                                onClick={handleContactClick} >
                                Contact Us
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative">
                        <div className="bg-white">
                            <img
                                src="/images/aboutus.svg?height=600&width=800"
                                alt='About Us Image'
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsBanner
