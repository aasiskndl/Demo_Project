import React from "react";
import { motion } from "framer-motion";

const service = [
  {
    title: "UI / UX Designing",
    description:
      "Our UI/UX development team specializes in creating visually appealing and user-friendly interfaces that enhance the overall user experience. We pride ourselves on our ability to seamlessly integrate cutting-edge features into our designs.",
    image: "/images/img.jpg",
  },
  {
    title: "Custom Software Development",
    description:
      "In the fast-paced and competitive business world of today, custom software development is an effective tool to attain optimal business performance. We create solutions tailored to your needs.",
    image: "/images/img.jpg",
  },
  {
    title: "Web Design & Development",
    description:
      "We design and develop web solutions that cater to your business goals and user requirements, from custom web apps to marketing websites, integrating front-end, back-end, and infrastructure.",
    image: "/images/img.jpg",
  },
];

const Services = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-8 bg-gray-50 space-y-20">
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
              className="text-3xl font-bold text-slate-800 mb-4"
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

export default Services;
