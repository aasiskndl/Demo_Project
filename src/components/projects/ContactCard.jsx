import { Mail, Phone, Globe, Building } from "lucide-react"

export default function ContactCard() {
  return (
    <div className="bg-[#1a1a1a] text-white overflow-hidden h-1/2 rounded-lg shadow-sm">
      <div className="p-6 md:p-8 h-full flex flex-col">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 mt-2">
          <a href="/" className="hover:underline">
          Matrika Technology
          </a>
        </h2>

        <div className="space-y-6 mt-4">
          <div className="flex items-center gap-4">
            <Mail className="text-gray-400" size={24} />
            <a href="mailto:info@siliconeverest.com" className="text-gray-400 hover:text-white">
              info@.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-gray-400" size={24} />
            <a href="" className="text-gray-400 hover:text-white">
              9800000000
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Globe className="text-gray-400" size={24} />
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              www.webpage.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Building className="text-gray-400" size={24} />
            <span className="text-gray-400">New Baneshwor, Kathmandu</span>
          </div>
      </div>
    </div>
    </div>
  );
}
