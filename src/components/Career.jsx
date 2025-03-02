import React from 'react';

const Career = () => {
  const jobPositions = [
    {
      title: 'Software Engineer',
      description: 'Develop cutting-edge software solutions with modern technologies. Collaborate with our talented team to create exceptional user experiences.',
    },
    {
      title: 'UI/UX Designer',
      description: 'Create visually stunning and user-friendly designs that enhance the overall user experience. Help shape the future of our digital products.',
    },
    {
      title: 'Digital Marketing Specialist',
      description: 'Take our brand to the next level by creating effective marketing strategies and campaigns that drive results across multiple channels.',
    },
  ];

  return (
    <div className="bg-secondary">

    <div className=" container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Join the Team at <span className="text-yellow-500">Matrika Technology</span></h1>
      <p className="text-center text-lg max-w-[800px] mx-auto mb-12 leading-relaxed">
        At Matrika Technology, we're building innovative solutions that drive business success. If you're passionate about technology, problem-solving, and creativity, we'd love to have you on board.
        Explore career opportunities with us and be part of a growing and dynamic team.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobPositions.map((job, index) => (
          <div key={index} className="bg-[#0A4D4D] p-5 rounded-lg shadow-lg text-white flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-yellow-500">{job.title}</h2>
              <p className="text-sm mb-4">{job.description}</p>
            </div>
            <a href="#" className="mt-auto px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-full text-black font-bold text-sm text-center">
              Apply Now
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg">
          Don’t see the right role for you? <a href="#" className="text-yellow-500 hover:underline">Send us your resume</a> and we’ll get in touch if something great opens up!
        </p>
      </div>
    </div>
    </div>
  );
};

export default Career;
