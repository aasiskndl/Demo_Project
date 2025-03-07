// export default ContactCard;
import { Mail, Phone, Globe, Building } from "lucide-react"

export default function ContactCard() {
  return (
    <div className="bg-[#1a1a1a] text-white overflow-hidden h-full">
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
          <div className="border-t pt-6">
        <h3 className="text-sm md:text-base font-semibold text-white mb-3">Matrika Technology Location</h3>
        <div className="aspect-w-16 aspect-h-13  overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.881234377315!2d85.33889407452689!3d27.690065376192432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f6243d1abd%3A0xbc255c585b25a407!2sMatrika%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1741322033137!5m2!1sen!2snp"
            width="600"
            height="600"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-40 sm:h-48"
            allowFullScreen
            title="Matrika Technology Location"
          />

        </div>
        </div>
      </div>
    </div>
    </div>
  );
}
