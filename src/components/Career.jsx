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
      title: 'Project Manager',
      description: 'Lead technical projects from conception to delivery. Coordinate teams and ensure successful project execution within deadlines.',
    },
  ];

  return (
    <div className="bg-secondary min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join the Team at{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Matrika Technology
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Matrika Technology, we're building innovative solutions that drive business success. Join our passionate team of technology enthusiasts and problem-solvers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {jobPositions.map((job, index) => (
            <div 
              key={index}
              className="group bg-answer rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 lg:p-8 flex flex-col justify-between"
            >
              <div className="mb-4">
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                  {job.title}
                </h2>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  {job.description}
                </p>
              </div>
              <a 
                href="#"
                className="mt-4 inline-block w-full sm:w-auto px-6 py-3  bg-gray-700 hover:bg-yellow-500 text-center rounded-lg text-sm font-semibold text-white shadow-sm transition-all duration-300 transform hover:scale-[1.02]"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-base sm:text-lg">
            Don't see your perfect role?{' '}
            <a 
              href="#"
              className="text-yellow-600 hover:text-yellow-700 font-semibold underline underline-offset-4 transition-colors"
            >
              Send us your resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;