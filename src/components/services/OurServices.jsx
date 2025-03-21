import React from "react";

const servicesData = [
  {
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus ab error placeat id accusantium quasi facere, sequi iusto consequatur incidunt eaque soluta velit facilis non maiores fuga laboriosam omnis.",
    image: "/images/web-dev.svg", 
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions for unique business needs, ensuring efficiency and competitive edge.",
    image: "/images/custom-dev.svg", 
  },
  {
    title: "Mobile App Development",
    description:
      "Engaging, high-performance mobile apps for iOS and Android that bring your ideas to life.",
    image: "/images/app-dev.svg", 
  },
  {
    title: "UI/UX Design",
    description:
      "User-centric designs that blend aesthetics with intuitive interfaces for delightful experiences.",
    image: "/images/ui-ux.svg", 
  },
];

const ServicesPage = () => {
  return (  
    <div className="bg-secondary -mt-3">
    {servicesData.map((service, index) => (
      <section
        key={index}
        className="py-16 px-4 sm:px-8 lg:px-24"
      >
        <div
          className={`
            max-w-7xl mx-auto flex flex-col 
            lg:flex-row items-center gap-12
            ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
          `}
        >
          {/* Text Section (always first in the DOM) */}
          <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-700 leading-tight">
              {service.title}
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Image Section (below text on mobile, can be reversed on desktop) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    ))}
  </div>
  );
};

export default ServicesPage;
