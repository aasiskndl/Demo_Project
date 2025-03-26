import React from "react";

const content = [
  {
    title: "Our Vision",
    image: "/images/ourvision.webp",
    description:
      "Our vision is to be the leading provider of innovative software solutions for the jewelry industry, enabling businesses worldwide to operate seamlessly and grow sustainably. We strive to create a future where technology drives the success of every jeweler, transforming the way they manage orders, inventory, finances, and more, with a focus on long-term growth and customer satisfaction.",
    reverse: false,
  },
  {
    title: "Our Mission",
    image: "/images/ourmission.webp",
    description:
      "At Matrika Technology, our mission is to revolutionize the jewelry industry by providing cutting-edge software solutions that simplify business operations, enhance efficiency, and improve accuracy. We aim to empower jewelers with the tools they need to streamline their processes, increase productivity, and deliver exceptional customer service, all while staying ahead of industry trends.",
    reverse: true,
  },
];

const AboutUsCards = () => {
  return (
    <div className="bg-secondary py-8 px-4 sm:px-8 lg:px-18 space-y-20">
      {content.map(({ title, image, description, reverse }, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center gap-10"
        >
          {/* Image Section */}
          <div
            className={`w-full lg:w-1/2 order-2 ${reverse ? "lg:order-1" : "lg:order-2"}`}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-auto max-h-[400px] object-contain"
            />
          </div>

          {/* Text Section */}
          <div
            className={`w-full lg:w-1/2 order-1 ${reverse ? "lg:order-2" : "lg:order-1"} space-y-4 text-center lg:text-left`}
          >
            <h2 className="text-3xl font-bold text-slate-700 mb-4">
              {title}
            </h2>
            <p className="text-slate-600 sm:text-lg text-base">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsCards;
