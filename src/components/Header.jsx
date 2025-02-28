import { CiSearch } from "react-icons/ci";
import { SiHomeassistant } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
// vnbcnbc
const Header = () => {
  const navigate = useNavigate();
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState("");

  const companyLinks = [
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
  ];

  const productLinks = [
    { name: "M-Tech Billing", path: "/products/m-tech-billing" },
    { name: "JJewellery", path: "/products/jjewellery" },
    { name: "Matec Restaurant", path: "/products/matec-restaurant" },
    { name: "Online Billing", path: "/products/online-billing" },
  ];

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdown(mobileDropdown === dropdown ? "" : dropdown);
  };

  return (
    <div className="bg-tint w-full py-4 flex items-center justify-between px-4 md:px-12 relative">
      {/* Home Icon */}
      <SiHomeassistant className="text-4xl"/>

      {/* Search Bar - Hidden on mobile */}
      <div className="flex-grow mx-4 md:mx-12 hidden md:block">
        <div className="relative w-full max-w-[600px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-3 pl-5 pr-12 bg-black rounded-full text-white outline-none border border-gray-700 focus:border-yellow-500 transition-all duration-300 placeholder:text-gray-400"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white">
            <CiSearch />
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-white text-sm font-semibold tracking-wide items-center">
      <button
        onClick={() => navigate("/")}
        className="hover:text-yellow-500 px-4 py-2"
      >
        Home
      </button>
        {/* Company Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsCompanyOpen(true)}
          onMouseLeave={() => setIsCompanyOpen(false)}
        >
          <button className="hover:text-yellow-500 px-4 py-2">
            Company
          </button>
          {isCompanyOpen && (
            <div className="absolute top-full left-0 bg-black py-2 rounded-lg min-w-[160px] shadow-lg">
              {companyLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-800 hover:text-yellow-500"
                >
                  {link.name}
                </button>
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
          <button className="hover:text-yellow-500 px-4 py-2">
            Products
          </button>
          {isProductOpen && (
            <div className="absolute top-full left-0 bg-black py-2 rounded-lg min-w-[200px] shadow-lg">
              {productLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-800 hover:text-yellow-500"
                >
                  {link.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Simple Links */}
        <button
          onClick={() => navigate("/services")}
          className="hover:text-yellow-500 px-4 py-2"
        >
          Services
        </button>
        <button
          onClick={() => navigate("/career")}
          className="hover:text-yellow-500 px-4 py-2"
        >
          Career
        </button>
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
          {/* Company Dropdown */}
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
                  <button
                    key={link.name}
                    onClick={() => navigate(link.path)}
                    className="block w-full text-left px-4 py-2 hover:text-yellow-500"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Products Dropdown */}
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
                  <button
                    key={link.name}
                    onClick={() => navigate(link.path)}
                    className="block w-full text-left px-4 py-2 hover:text-yellow-500"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Simple Links */}
          <button
            onClick={() => navigate("/services")}
            className="block w-full text-left px-4 py-2 text-white hover:text-yellow-500"
          >
            Services
          </button>
          <button
            onClick={() => navigate("/career")}
            className="block w-full text-left px-4 py-2 text-white hover:text-yellow-500"
          >
            Career
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;