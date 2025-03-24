import React from "react";

const content = [
  {
    title: "Our Vision",
    image: "/images/ourvision.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, similique ducimus nobis neque saepe corporis accusantium est rerum iusto quidem debitis quibusdam deleniti sed quisquam! A voluptatem officiis repudiandae laboriosam.",
    reverse: false,
  },
  {
    title: "Our Mission",
    image: "/images/ourmission.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptatum error, soluta tenetur a vel voluptates nisi aspernatur repellat quos unde laboriosam eum enim quam dignissimos accusamus perferendis quibusdam culpa.",
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
