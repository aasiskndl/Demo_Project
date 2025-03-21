import React from "react";
import { motion } from "framer-motion";

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
        <motion.div
          key={index}
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
            delay: index * 0.1,
          }}
          viewport={{ once: true }}
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
            <motion.h2
              className="text-3xl font-bold text-slate-700 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {service.title}
            </motion.h2>
            <p className="text-slate-600 mb-6">{service.description}</p>
            <motion.button
              className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-yellow-500 duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Read More
            </motion.button>
          </div>

          {/* Image Section */}
          <motion.div
            className={`
              w-full md:w-1/2 
              order-2 
              ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}
            `}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto max-w-[500px] mx-auto shadow-sm rounded-lg"
            />
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default ServicesForJewellers;
