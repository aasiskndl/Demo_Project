import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "What is your service about?",
    answer: "Our service provides seamless software solutions to help businesses manage billing, restaurant systems, and online services."
  },
  {
    question: "How can I contact support?",
    answer: "You can email us directly at @gmail.com."
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
    <div className="min-h-screen bg-[#eef0c8] text-white py-12 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-[#064f4f] text-white rounded-lg shadow-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center text-yellow-400 font-semibold"
            >
              <span className="text-lg">{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-yellow-500" />
              ) : (
                <FaChevronDown className="text-yellow-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-[#083b3b] text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
