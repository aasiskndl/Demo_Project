import { SiHomeassistant } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState("");

  const companyLinks = [
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
  ];

  const productLinks = [
    { name: "M-Tech Billing", path: "/products/mtechbilling" },
    { name: "JJewellery", path: "/products/jjewellery" },
    { name: "Matec Restaurant", path: "/products/matec-restaurant" },
    { name: "Online Billing", path: "/products/online-billing" },
  ];

  const careerLinks = [
    { name: "Career", path: "/career" },
  ];

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdown(mobileDropdown === dropdown ? "" : dropdown);
  };

  return (
    <div className="bg-tint w-full py-4 flex items-center justify-between px-4 md:px-12 relative">
      {/* Home Icon */}
      <SiHomeassistant className="text-4xl" />

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-white text-sm font-semibold tracking-wide items-center">
        <NavLink to="/" className="hover:text-yellow-500 px-4 py-2">
          Home
        </NavLink>

        {/* Company Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsCompanyOpen(true)}
          onMouseLeave={() => setIsCompanyOpen(false)}
        >
          <div className="hover:text-yellow-500 px-4 py-2 flex items-center gap-1">
            Company <IoMdArrowDropdown className={`transition-transform ${isCompanyOpen ? "rotate-180" : ""}`} />
          </div>
          {isCompanyOpen && (
            <div className="absolute top-full left-0 bg-black py-2 rounded-lg min-w-[160px] shadow-lg">
              {companyLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="w-full block px-4 py-2 hover:bg-gray-800 hover:text-yellow-500"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Products Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsProductOpen(true)}
          onMouseLeave={() => setIsProductOpen(false)}
        >
          <div className="hover:text-yellow-500 px-4 py-2 flex items-center gap-1">
            Products <IoMdArrowDropdown className={`transition-transform ${isProductOpen ? "rotate-180" : ""}`} />
          </div>
          {isProductOpen && (
            <div className="absolute top-full left-0 bg-black py-2 rounded-lg min-w-[200px] shadow-lg">
              {productLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="w-full block px-4 py-2 hover:bg-gray-800 hover:text-yellow-500"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Simple Links */}
        <NavLink to="/services" className="hover:text-yellow-500 px-4 py-2">
          Services
        </NavLink>
        {careerLinks.map((link) => (
          <NavLink key={link.name} to={link.path} className="hover:text-yellow-500 px-4 py-2">
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-tint md:hidden p-4 space-y-4 shadow-lg">
          <div className="text-white">
            <button
              className="w-full text-left px-4 py-2 flex justify-between items-center"
              onClick={() => toggleMobileDropdown("company")}
            >
              Company
              <span className="text-xl">{mobileDropdown === "company" ? "-" : "+"}</span>
            </button>
            {mobileDropdown === "company" && (
              <div className="pl-6">
                {companyLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="block w-full px-4 py-2 hover:text-yellow-500"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <div className="text-white">
            <button
              className="w-full text-left px-4 py-2 flex justify-between items-center"
              onClick={() => toggleMobileDropdown("products")}
            >
              Products
              <span className="text-xl">{mobileDropdown === "products" ? "-" : "+"}</span>
            </button>
            {mobileDropdown === "products" && (
              <div className="pl-6">
                {productLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="block w-full px-4 py-2 hover:text-yellow-500"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/services" className="block w-full px-4 py-2 text-white hover:text-yellow-500">
            Services
          </NavLink>
          {careerLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="block w-full px-4 py-2 text-white hover:text-yellow-500"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;