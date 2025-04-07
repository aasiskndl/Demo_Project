import React from "react";

const service = [
  {
    title: "Comprehensive Order & Billing Management",
    description:
      "Streamline your jewelry business with an efficient order and billing system. Generate invoices, track payments, and manage customer orders seamlessly, ensuring accuracy and quick transactions.",
    image: "/images/order.png",
  },
  {
    title: "Real-Time Gold Rate & Stock Control",
    description:
      "Stay updated with automated gold rate adjustments and manage your stock effortlessly. Track inventory, prevent stock shortages, and maintain precise control over raw materials and finished jewelry.",
    image: "/images/gold-chart.png",
  },
  {
    title: "Jewellery Tag Printing & Karigar Stock Management",
    description:
      "Print customized jewelry tags with essential details and manage karigar (artisan) stock efficiently. Keep track of gold issued, work progress, and returns, ensuring a smooth workflow in your workshop.",
    image: "/images/karigad.png",
  },
  {
    title: "Loan & Finance Management",
    description:
      "Simplify customer loan handling with an integrated finance management system. Maintain records of gold loans, payment schedules, and interest calculations, reducing manual errors and ensuring financial trapp-dev.svg",
    image: "/images/loan.png",
  },
];
const ServicesForJewellers = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-11 bg-secondary space-y-12 md:space-y-16 mb-10 md:mb-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 text-center">
        Our Services For Jewellers
      </h1>
      {service.map((service, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 pb-12 md:pb-16 border-b border-gray-300 last:border-none"
        >
          {/* Text Section */}
          <div
            className={`w-full md:w-1/2 text-center md:text-left 
          ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 mb-3 sm:mb-4">
              {service.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600">{service.description}</p>
          </div>

          {/* Image Section */}
          <div
            className={`w-full md:w-1/2 flex justify-center 
          ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full max-w-[550px] sm:max-w-[600px] md:max-w-[650px] h-auto mx-auto shadow-sm rounded-lg"
            />
          </div>
        </div>
      ))}
    </section>

  );
};

export default ServicesForJewellers;
