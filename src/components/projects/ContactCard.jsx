import { Mail, Phone, Globe, Building } from "lucide-react"

export default function ContactCard() {
  return (
    <div className="bg-gray-800 text-white rounded-lg h-fit shadow-sm mt-8 md:mt-40 lg:mt-32 xl:mt-40 lg:pb-20">
      <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-8 mt-0 md:mt-2">
          <a href="/" className="hover:underline">
            Matrika Technology
          </a>
        </h2>

        <div className="space-y-4 md:space-y-6 mt-2 md:mt-4">
          <div className="flex items-center gap-3 md:gap-4">
            <Mail className="text-gray-400 w-5 h-5 md:w-6 md:h-6" />
            <a href="mailto:support@matrikatec.com.np" className="text-gray-400 hover:text-white text-sm md:text-base">
              support@matrikatec.com.np
            </a>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <Phone className="text-gray-400 w-5 h-5 md:w-6 md:h-6" />
            <a href="tel:9800000000" className="text-gray-400 hover:text-white text-sm md:text-base">
              9800000000
            </a>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <Globe className="text-gray-400 w-5 h-5 md:w-6 md:h-6" />
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm md:text-base break-all"
            >
              www.webpage.com
            </a>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <Building className="text-gray-400 w-5 h-5 md:w-6 md:h-6" />
            <span className="text-gray-400 text-sm md:text-base">New Baneshwor, Kathmandu</span>
          </div>
        </div>
      </div>
    </div>
  );
}