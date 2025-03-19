import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { ChevronDown, Home, Menu, X } from "lucide-react"

// Navigation data
const companyLinks = [
  { name: "About", path: "/about" },
  { name: "FAQ", path: "/faq" },
]

const productLinks = [
  { name: "M-Tech Billing", path: "/products/mtechbilling" },
  { name: "JJewellery", path: "/products/jjewellery" },
  { name: "Matec Restaurant", path: "/products/matecrestaurant" },
]

const careerLinks = [{ name: "Career", path: "/career" }]

// Utility function to combine class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

export default function Header() {
  const location = useLocation()
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const [isProductOpen, setIsProductOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState("")

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  const isDropdownActive = (paths) => {
    return paths.some((link) => isActive(link.path))
  }

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdown(mobileDropdown === dropdown ? "" : dropdown)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-tint py-4 shadow-md rounded-b-lg">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <NavLink to="/" className="text-yellow-500">
          <Home className="h-8 w-8" />
          <span className="sr-only">Home</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "px-4 py-2 text-sm font-medium transition-colors",
                isActive ? "text-yellow-500" : "text-white hover:text-yellow-500",
              )
            }
          >
            Home
          </NavLink>

          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                isDropdownActive(companyLinks) ? "text-yellow-500" : "text-white hover:text-yellow-500",
              )}
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              Company
              <ChevronDown className={cn("h-4 w-4 transition-transform", isCompanyOpen ? "rotate-180" : "")} />
            </button>
            {isCompanyOpen && (
              <div className="absolute top-full left-0 z-10 min-w-[160px] rounded-lg bg-slate-800 py-2 shadow-lg">
                {companyLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        "block w-full px-4 py-2 text-sm font-medium transition-colors",
                        isActive ? "text-yellow-500" : "text-white hover:text-yellow-500",
                      )
                    }
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
            <button
              className={cn(
                "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                isDropdownActive(productLinks) ? "text-yellow-500" : "text-white hover:text-yellow-500",
              )}
              onClick={() => setIsProductOpen(!isProductOpen)}
            >
              Products
              <ChevronDown className={cn("h-4 w-4 transition-transform", isProductOpen ? "rotate-180" : "")} />
            </button>
            {isProductOpen && (
              <div className="absolute top-full left-0 z-10 min-w-[200px] rounded-lg bg-slate-800 py-2 shadow-lg">
                {productLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        "block w-full px-4 py-2 text-sm font-medium transition-colors",
                        isActive ? "text-yellow-500" : "text-white hover:text-yellow-500",
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Simple Links */}
          <NavLink
            to="/services"
            className={({ isActive }) =>
              cn(
                "px-4 py-2 text-sm font-medium transition-colors",
                isActive ? "text-yellow-500" : "text-white hover:text-yellow-500",
              )
            }
          >
            Services
          </NavLink>

          {careerLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-yellow-500" : "text-white hover:text-yellow-500",
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-md hover:bg-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="container mx-auto md:hidden">
          <div className="mt-2 space-y-1 rounded-lg bg-tint p-4 ">
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => cn(
                "block w-full px-4 py-2 text-sm font-medium transition-colors",
                isActive ? "text-yellow-500" : "text-white hover:text-yellow-500"
              )}
            >
              Home
            </NavLink>

            {/* Mobile Company Dropdown */}
            <div className="w-full">
              <button
                className={cn(
                  "flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium",
                  isDropdownActive(companyLinks) ? "text-yellow-500" : "text-white",
                  "hover:text-yellow-500"
                )}
                onClick={() => toggleMobileDropdown("company")}
              >
                Company
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", mobileDropdown === "company" ? "rotate-180" : "")}
                />
              </button>
              {mobileDropdown === "company" && (
                <div className="pl-6 space-y-1 mt-1">
                  {companyLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) => cn(
                        "block w-full px-4 py-2 text-sm font-medium transition-colors",
                        isActive ? "text-yellow-500" : "text-white hover:text-yellow-500"
                      )}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Products Dropdown */}
            <div className="w-full">
              <button
                className={cn(
                  "flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium",
                  isDropdownActive(productLinks) ? "text-yellow-500" : "text-white",
                  "hover:text-yellow-500"
                )}
                onClick={() => toggleMobileDropdown("products")}
              >
                Products
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", mobileDropdown === "products" ? "rotate-180" : "")}
                />
              </button>
              {mobileDropdown === "products" && (
                <div className="pl-6 space-y-1 mt-1">
                  {productLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) => cn(
                        "block w-full px-4 py-2 text-sm font-medium transition-colors",
                        isActive ? "text-yellow-500" : "text-white hover:text-yellow-500"
                      )}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>


            <NavLink
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}  
              className={({ isActive }) =>
                cn(
                  "block w-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-yellow-500" : "text-white hover:text-yellow-500",
                )
              }
            >
              Services
            </NavLink>

            {careerLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}  
                className={({ isActive }) =>
                  cn(
                    "block w-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-yellow-500" : "text-white hover:text-yellow-500",
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

