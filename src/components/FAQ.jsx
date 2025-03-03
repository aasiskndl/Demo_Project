import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "What is your service about?",
    answer: "Our service provides seamless software solutions to help businesses manage billing, restaurant systems, and online services."
  },
  {
    question: "How can I contact support?",
    answer: "You can email us directly at support@matrikatec.com.np"
  },
  {
    question: "Do you offer custom software development?",
    answer: "Yes, we offer custom software development tailored to your business needs."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for our billing software."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-secondary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </span>
        </h2>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="bg-answer rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center group"
              >
                <span className="text-gray-900 font-semibold text-lg sm:text-xl group-hover:text-yellow-600 transition-colors">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-yellow-500 w-5 h-5" />
                ) : (
                  <FaChevronDown className="text-yellow-500 w-5 h-5" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2 transition-all duration-300 ease-out">
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a 
              href="mailto:support@matrikatec.com.np" 
              className="text-yellow-600 hover:text-yellow-700 font-semibold underline underline-offset-4"
            >
              Contact us directly
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;