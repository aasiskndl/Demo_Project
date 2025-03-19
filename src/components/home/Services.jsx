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
  {
    title: "Web Design & Development",
    description:
      "We design and develop web solutions that cater to your business goals and user requirements, from custom web apps to marketing websites, integrating front-end, back-end, and infrastructure.",
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
    <section className="px-4 md:px-10 lg:px-20 py-16 bg-gray-50 space-y-20">
      {service.map((service, index) => (
        <motion.div
          key={index}
          className={`flex flex-col-reverse md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          initial={{ opacity: 0, y: 100 }} // Comes from bottom
          whileInView={{ opacity: 1, y: 0 }} // Moves to its original position
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 50,
            delay: index * 0.1, // Stagger the animation for each card
          }}
          viewport={{ once: true }} // Trigger only once when the element enters the viewport
        >
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h2
              className="text-3xl font-bold text-slate-800 mb-4"
              whileHover={{ scale: 1.05 }} // Subtle scale effect on hover
              transition={{ duration: 0.2 }}
            >
              {service.title}
            </motion.h2>
            <p className="text-slate-600 mb-6">{service.description}</p>
            <motion.button
              className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-yellow-500 duration-300"
              whileHover={{ scale: 1.02 }} // Scale button on hover
              transition={{ duration: 0.2 }}
            >
              Read More
            </motion.button>
          </div>

          {/* Image */}
          <motion.div
            className="md:w-1/2"
            whileHover={{ scale: 1.05 }} // Image scale effect on hover
            transition={{ duration: 0.9 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto max-w-[500px] mx-auto"
            />
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default Services;
