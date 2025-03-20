import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Hari Baral",
    image: "/images/profile.svg", 
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex aliquam enim vitae deleniti adipisci magnam quae pariatur totam, nemo eius doloribus aut placeat, esse nisi nesciunt soluta explicabo veniam!',
  },
  {
    id: 2,
    name: "Sara Dahal",
    image: "/images/profile.svg",
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex aliquam enim vitae deleniti adipisci magnam quae pariatur totam, nemo eius doloribus aut placeat, esse nisi nesciunt soluta explicabo veniam!',
  },
  {
    id: 3,
    name: "Mailo Paudel",
    image: "/images/profile.svg",
    text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex aliquam enim vitae deleniti adipisci magnam quae pariatur totam, nemo eius doloribus aut placeat, esse nisi nesciunt soluta explicabo veniam!',
  },
  {
    id: 4,
    name: "Kanxo Smith",
    image: "/images/profile.svg",
    text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex aliquam enim vitae deleniti adipisci magnam quae pariatur totam, nemo eius doloribus aut placeat, esse nisi nesciunt soluta explicabo veniam!',
  },
  {
    id: 5,
    name: "Zyan Chapagain",
    image: "/images/profile.svg",
    text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex aliquam enim vitae deleniti adipisci magnam quae pariatur totam, nemo eius doloribus aut placeat, esse nisi nesciunt soluta explicabo veniam!',
  },
  {
    id: 6,
    name: "Alexa Tiwari",
    image: "/images/profile.svg",
    text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex aliquam enim vitae deleniti adipisci magnam quae pariatur totam, nemo eius doloribus aut placeat, esse nisi nesciunt soluta explicabo veniam!',
  },
];

export default function CustomerComments() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); 

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-slate-700 mb-4 text-center">
        Check Reviews From Our Satisfied Clients
      </h2>
      <p className="text-slate-600 text-center max-w-2xl mb-6 ">
        Checking these reviews will give you insight into the experiences of
        our satisfied clients. These testimonials reflect the 
        quality of our products or services, and the satisfaction of our
        customers.
      </p>

      <div className="relative w-full max-w-xl px-6 md:px-0">
        {/* Left Arrow - Hidden on Mobile */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-0 md:left-[-70px] top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-200 transition"
        >
          <ChevronLeft size={24} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-answer p-6 rounded-2xl shadow-md text-center mx-auto w-full md:w-[80%]"
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h4 className="text-lg text-slate-700 font-semibold">{testimonials[index].name}</h4>
            <p className="text-slate-600 mt-2">{testimonials[index].text}</p>
          </motion.div>
        </AnimatePresence>

        {/* Right Arrow - Hidden on Mobile */}
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-0 md:right-[-70px] top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-200 transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === i ? "bg-yellow-500 w-6" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
