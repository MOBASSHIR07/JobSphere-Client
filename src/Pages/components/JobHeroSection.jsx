import React from 'react';
import { Bookmark, Mail, User } from 'lucide-react'; // Optional: Lucide icons
import JobImage from '../../assets/Image/JobImage.png' // Replace with your actual image path

const JobHeroSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
          Suits <span className="text-black">Jobs For You.</span>
        </h1>
        <p className="text-gray-600 text-lg border-l-4 border-green-500 pl-4">
          There are many variations of passages of Lorem Ipsum Fasts Fastsby
          humour, by injected humour, or coved ceilings.
        </p>

        {/* Features */}
        <div className="space-y-4 mt-6">
          <div className="flex items-center gap-3 text-gray-700">
            <Bookmark className="text-green-600" />
            <span>Bookmark Jobs</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <User className="text-green-600" />
            <span>Apply with your Resume</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="text-green-600" />
            <span>Get notified</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
          Browse Jobs
        </button>
      </div>

      {/* Right Image & Experience Badge */}
      <div className="w-full lg:w-1/2 relative">
        <img src={JobImage} alt="Job illustration" className="w-full h-auto" />
       
      </div>
    </section>
  );
};

export default JobHeroSection;
