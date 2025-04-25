import React from "react";

const servicesData = [
  {
    title: "Web Development",
    description:
      "We specialize in creating responsive and dynamic websites tailored to your jewelry business needs. From custom e-commerce platforms to business management solutions, our web development services ensure your online presence is seamless, user-friendly, and optimized for both performance and conversion.",
    image: "/images/web-dev.svg",
  },
  {
    title: "Custom Software Development",
    description:
      "At Matrika Technology, we provide bespoke software solutions that cater to the unique needs of your jewelry business. Whether you need a comprehensive inventory management system, order tracking, or financial tools, our custom software development ensures your operations run smoothly, with features designed specifically for your business requirements.",
    image: "/images/custom-dev.svg",
  },
  {
    title: "Mobile App Development",
    description:
      "We offer mobile app development services to bring your jewelry business to the fingertips of your customers. Our mobile apps are designed for ease of use, allowing your customers to browse your catalog, place orders, track deliveries, and even manage their accounts directly from their smartphones. Expand your reach and improve customer engagement with a personalized mobile experience.",
    image: "/images/app-dev.svg",
  },
  {
    title: "UI/UX Design",
    description:
      "We create visually appealing and intuitive user interfaces that enhance the user experience. Our UI/UX design services focus on making your digital platforms easy to navigate, ensuring both customers and employees can use them with ease. We prioritize clean, functional design that meets both aesthetic and usability standards, enhancing satisfaction and engagement.",
    image: "/images/ui-ux.svg",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-secondary -mt-3 py-16 px-6 sm:px-12 lg:px-24">
      {/* Title & Intro */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-5xl font-bold text-slate-800 leading-tight">Our Services</h1>
        <p className="text-lg text-slate-600 mt-4">
        Empowering jewelry businesses with cutting-edge technology solutions. From web development to mobile apps, we bring your ideas to life. Our 
        innovative software streamlines order management, billing, and inventory tracking, and seamless customer management, we help you stay ahead in the industry.
        </p>
      </div>

      {/* Services List */}
      {servicesData.map((service, index) => (
        <section
          key={index}
          className="py-16 border-b border-gray-300 last:border-none"
        >
          <div
            className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"
          >
            {/* Text Section */}
            <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-slate-700 leading-tight">
                {service.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-full max-w-sm h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};


 
export default ServicesPage;