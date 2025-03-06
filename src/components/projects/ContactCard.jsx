// import React from 'react';
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

// const ContactCard = () => {
//   return (
//     <div className="bg-answer rounded-xl shadow-lg p-6 md:p-8 transform transition hover:scale-[1.01] duration-200">
//       <div className="mb-6">
//         <h2 className="text-lg md:text-xl font-semibold mb-3 text-yellow-600">Contact</h2>
//         <div className="flex flex-col gap-4">
//           <div className="flex items-center gap-2">
//             <FaPhoneAlt className="text-yellow-500 text-xl" />
//             <span className='text-sm'>01-5925122</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaEnvelope className="text-yellow-500 text-xl" />
//             <span className='text-sm'>info@matrikatec.com.np</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaMapMarkerAlt className="text-yellow-500 text-xl" />
//             <span className='text-sm'>New Baneshwor, Kathmandu, Nepal</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaClock className="text-yellow-500 text-xl" />
//             <div>
//               <p className="text-sm">Sun-Fri: 9AM - 5PM</p>
//               <p className="text-sm">Saturday: Closed</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="border-t pt-6">
//         <h3 className="text-base font-semibold text-gray-800 mb-3">Matrika Technology Location</h3>
//         <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.287234044407!2d85.31747031505696!3d27.67705098280283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c10c9b7667%3A0x391e1dbf54d9249d!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1625555555555!5m2!1sen!2snp"
//             className="w-full h-40"
//             allowFullScreen
//             loading="lazy"
//             title="Matrika Technology Location"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactCard;


import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactCard = () => {
  return (
    <div className="bg-answer rounded-xl shadow-lg p-6 md:p-8 transform transition hover:scale-[1.01] duration-200 order-2 md:order-none">
      <div className="mb-6">
        <div className="flex flex-col items-start">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-yellow-600">Contact</h2>
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-500 text-lg md:text-xl" />
              <span className='text-xs md:text-sm'>01-5925122</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-500 text-lg md:text-xl" />
              <span className='text-xs md:text-sm'>info@matrikatec.com.np</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-500 text-lg md:text-xl" />
              <span className='text-xs md:text-sm'>New Baneshwor, Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-yellow-500 text-lg md:text-xl" />
              <div>
                <p className="text-xs md:text-sm">Sun-Fri: 9AM - 5PM</p>
                <p className="text-xs md:text-sm">Saturday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3">Matrika Technology Location</h3>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.287234044407!2d85.31747031505696!3d27.67705098280283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c10c9b7667%3A0x391e1dbf54d9249d!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1625555555555!5m2!1sen!2snp"
            className="w-full h-40 sm:h-48"
            allowFullScreen
            loading="lazy"
            title="Matrika Technology Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;