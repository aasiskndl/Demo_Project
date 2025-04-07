import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
const testimonials = [
  {
    id: 1,
    name: "Annapurna Jewellery Pvt. Ltd",
    image: "/images/profile.svg",
    text: "Thanks to Matrika Technology, inventory tracking is no longer a hassle. The software gives us real-time updates and keeps everything organized, from stock levels to product details. It’s efficient, reliable, and tailor-made for jewelry businesses.",
    rating: 5,

  },
  {
    id: 2,
    name: "Radha Krishna Jewellers Pvt. Ltd",
    image: "/images/profile.svg",
    text: "Matrika Technology has completely transformed the way we manage our business. The order management and billing features are easy to use and have helped us streamline our operations. Highly recommended for any jewelry business!",
    rating: 4,
  },
  {
    id: 3,
    name: "Pakshala Restaurant & Grill",
    image: "/images/profile.svg",
    text: "Matrika Technology has simplified our restaurant’s billing and table management like never before. From quick order processing to detailed sales reports, everything runs smoothly. It’s the perfect tool for busy restaurants looking to upgrade their operations!",
    rating: 5,
  },
  {
    id: 4,
    name: "Riya Shrestha",
    image: "/images/profile.svg",
    text: "The mobile app developed by Matrika Technology is fantastic. It’s simple, user-friendly, and makes managing our business on the go much easier. Our customers love it too, and it has increased engagement with our brand!",
    rating: 4,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mt-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={20}
          className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

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
    <div className="flex flex-col items-center justify-center p-4 bg-secondary min-h-screen">
      <h2 className="text-3xl font-bold text-slate-700 mb-4 text-center md:text-4xl">
        Check Reviews From Our Satisfied Clients
      </h2>
      <p className="text-slate-600 text-center text-lg max-w-2xl mb-6 md:mb-10">
        Checking these reviews will give you insight into the experiences of our satisfied clients.
      </p>

      <div className="relative w-full max-w-xl px-6 md:px-0 md:max-w-3xl lg:max-w-4xl">
        <button
          onClick={prevSlide}
          className="hidden lg:block absolute left-[-40px] lg:left-[-70px] top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-200 transition"
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
            className="bg-white p-6 rounded-xl shadow-md text-center mx-auto w-full max-w-[90%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[60%]"
          >
            {/* Profile Picture */}
            <img
              src={testimonials[index].image || "/placeholder.svg"}
              alt={testimonials[index].name}
              className="w-16 h-16 rounded-full mx-auto mb-2 md:w-20 md:h-20"
            />

            {/* Rating */}
            <div className="flex justify-center mb-2">
              <StarRating rating={testimonials[index].rating} />
            </div>

            {/* Name */}
            <h4 className="text-lg text-slate-700 font-semibold md:text-xl lg:text-2xl mb-1">
              {testimonials[index].name}
            </h4>

            {/* Description */}
            <p className="text-slate-600 text-center text-sm md:text-base mt-2 leading-relaxed break-words whitespace-pre-wrap">

              {testimonials[index].text}
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={nextSlide}
          className="hidden lg:block absolute right-[-40px] lg:right-[-70px] top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-200 transition"
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex justify-center mt-4 space-x-2 md:mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${index === i ? "bg-yellow-500 w-6 md:w-8" : "bg-gray-300"
                }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
