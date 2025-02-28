import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-tint w-full py-8 md:py-10 text-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20 text-base">
        {/* Contact Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-yellow-500">Contact</h2>
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-500 text-xl md:text-2xl" />
              <span className='text-xs md:text-sm'>+977980000000</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-500 text-xl md:text-2xl" />
              <span className='text-xs md:text-sm'>sillicon@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-500 text-xl md:text-2xl" />
              <span className='text-xs md:text-sm'>Kathmandu, Nepal</span>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className="flex flex-col items-start mt-4 md:mt-0">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-yellow-500">Product</h2>
          <ul className="space-y-2 md:space-y-3">
            <li className="hover:text-yellow-500 cursor-pointer text-xs md:text-sm">Restrobyte</li>
            <li className="hover:text-yellow-500 cursor-pointer text-xs md:text-sm">J-Jewellery Software</li>
            <li className="hover:text-yellow-500 cursor-pointer text-xs md:text-sm">e-Tender Application</li>
            <li className="hover:text-yellow-500 cursor-pointer text-xs md:text-sm">Silicon POS</li>
            <li className="hover:text-yellow-500 cursor-pointer text-xs md:text-sm">Silicon ERP</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start mt-4 md:mt-0">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-yellow-500">Quick Links</h2>
          <ul className="space-y-2 md:space-y-3">
            <li 
              onClick={() => navigate("/about")} 
              className="hover:text-yellow-500 cursor-pointer text-xs md:text-sm"
            >
              About Us
            </li>
            <li 
              onClick={() => navigate("/products")} 
              className="hover:text-yellow-500 cursor-pointer text-xs md:text-sm"
            >
              Products
            </li>
            <li 
              onClick={() => navigate("/portfolio")} 
              className="hover:text-yellow-500 cursor-pointer text-xs md:text-sm"
            >
              Portfolio
            </li>
            <li 
              onClick={() => navigate("/services")} 
              className="hover:text-yellow-500 cursor-pointer text-xs md:text-sm"
            >
              Services
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="container mx-auto mt-8 md:mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-xs md:text-sm text-gray-400">
          © {new Date().getFullYear()} Silicon. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;