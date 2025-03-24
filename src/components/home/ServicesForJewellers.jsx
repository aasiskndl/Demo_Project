import React from "react";

const service = [
  {
    title: "UI / UX Designing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, placeat saepe reiciendis, aut provident voluptate sunt illo laudantium similique quaerat ipsam maiores architecto, et dolore eum accusantium perspiciatis amet eius",
    image: "/images/service.jpg",
  },
  {
    title: "Custom Software Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, placeat saepe reiciendis, aut provident voluptate sunt illo laudantium similique quaerat ipsam maiores architecto, et dolore eum accusantium perspiciatis amet eius",
    image: "/images/service.jpg",
  },
  {
    title: "Web Design & Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, placeat saepe reiciendis, aut provident voluptate sunt illo laudantium similique quaerat ipsam maiores architecto, et dolore eum accusantium perspiciatis amet eius",
    image: "/images/service.jpg",
  },
];

const ServicesForJewellers = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-8 bg-secondary space-y-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 justify-center text-center">
        Our Services For Jeweller's
      </h1>
      {service.map((service, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          {/* Text Section */}
          <div
            className={`
              w-full md:w-1/2 
              order-1 
              ${index % 2 !== 0 ? "md:order-2" : "md:order-1"} 
              text-center md:text-left
            `}
          >
            <h2 className="text-3xl font-bold text-slate-700 mb-4">
              {service.title}
            </h2>
            <p className="text-slate-600 mb-6">{service.description}</p>
            <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-yellow-500 duration-300">
              Read More
            </button>
          </div>

          {/* Image Section */}
          <div
            className={`
              w-full md:w-1/2 
              order-2 
              ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}
            `}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto max-w-[500px] mx-auto shadow-sm rounded-lg"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesForJewellers;
