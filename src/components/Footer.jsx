import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const contactInfo = [
  { icon: <FaPhoneAlt />, text: "01-5925122", link: "tel:01-5925122" },
  { icon: <FaEnvelope />, text: "info@matrikatec.com.np", link: "mailto:info@matrikatec.com.np" },
  { icon: <FaMapMarkerAlt />, text: "New Baneshwor, Kathmandu, Nepal" }
];

const products = [
  { to: "/products/jjewellery", label: "J-Jewellery Software" },
  { to: "/products/mtechbilling", label: "M-Tech Billing Software" },
  { to: "/products/matecrestaurant", label: "Matec Restaurant Software" }
];

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/career", label: "Career" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact Us" }
];

const Footer = () => {
  return (
    <div className="bg-tint w-full py-8 md:py-10 text-white px-4 sm:px-6 lg:px-8 mt-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 text-base">

        {/* Contact Section */}
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-yellow-500">Contact</h2>
          <div className="flex flex-col gap-3">
            {contactInfo.map(({ icon, text, link }, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl md:text-2xl">{icon}</span>
                {link ? (
                  <a href={link} className="text-xs md:text-sm hover:underline">
                    {text}
                  </a>
                ) : (
                  <span className="text-xs md:text-sm">{text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Product Section */}
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-yellow-500">Product</h2>
          <ul className="space-y-3">
            {products.map((product, index) => (
              <li key={index} className="hover:text-yellow-500 cursor-pointer text-xs md:text-sm">
                <NavLink to={product.to}>{product.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-yellow-500">Quick Links</h2>
          <ul className="space-y-3">
            {quickLinks.map(({ to, label }, index) => (
              <li key={index} className="text-xs md:text-sm">
                <NavLink
                  to={to}
                  className="hover:text-yellow-500 cursor-pointer"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="container mx-auto mt-8 md:mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-xs md:text-sm text-gray-400">
          © {new Date().getFullYear()} Matrika Technology. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
