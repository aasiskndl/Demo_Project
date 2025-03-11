import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-16 overflow-hidden -mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text Section */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-700 leading-tight">
              Matrika Technology <br /> For Jeweller's
            </h1>
            <p className="text-base sm:text-lg text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              accusamus dicta iusto omnis quaerat natus inventore veniam animi
              dolorum? Aspernatur ipsam expedita mollitia molestiae, culpa
              libero facere temporibus quo ut?
            </p>

            {/* Button */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="group inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-yellow-500 text-white rounded-md transition-colors duration-300"
              >
                Get Free Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
              <img
                src="/images/img.jpg?height=600&width=800"
                alt="Dashboard Preview"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
