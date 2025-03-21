import React from "react";
import { motion } from "framer-motion";

const content = [
  {
    title: "Our Vision",
    image: "/images/ourvision.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, similique ducimus nobis neque saepe corporis accusantium est rerum iusto quidem debitis quibusdam deleniti sed quisquam! A voluptatem officiis repudiandae laboriosam.",
    reverse: false,
  },
  {
    title: "Our Mission",
    image: "/images/ourmission.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptatum error, soluta tenetur a vel voluptates nisi aspernatur repellat quos unde laboriosam eum enim quam dignissimos accusamus perferendis quibusdam culpa.",
    reverse: true,
  },
];

const AboutUsCards = () => {
  return (
    <div className="bg-secondary py-12 px-4 sm:px-8 lg:px-24 space-y-20">
      {content.map(({ title, image, description, reverse }, index) => (
        <motion.div
          key={index}
          className="flex flex-col lg:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 100 }} // Comes from bottom
          whileInView={{ opacity: 1, y: 0 }} // Moves to original position
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
            delay: index * 0.1, 
          }}
          viewport={{ once: true }} // Trigger animation only once
        >
          {/* Image Section */}
          <div
            className={`
              w-full lg:w-1/2
              order-2 
              ${reverse ? "lg:order-1" : "lg:order-2"}
            `}
          >
            <motion.img
              src={image}
              alt={title}
              className="w-full h-auto max-h-[400px] object-contain rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }} //scale effect on hover
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Text Section */}
          <div
            className={`
              w-full lg:w-1/2 
              order-1 
              ${reverse ? "lg:order-2" : "lg:order-1"}
              space-y-4 text-center lg:text-left
            `}
          >
            <motion.h2
              className="text-3xl font-bold text-slate-700 mb-4"
              whileHover={{ scale: 1.05 }} //scale effect on hover
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h2>
            <p className="text-slate-600 sm:text-lg text-base">{description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutUsCards;

