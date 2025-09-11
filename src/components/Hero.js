import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="gradient-bg text-white section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Get the tech career you deserve.{' '}
              <span className="text-yellow-300">Faster.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              8 years of delivering outcome-focused upskilling courses in a structured, 
              practice-based format by MAANG faculty, with the fastest 1-on-1 doubt resolution.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">500K+</div>
                <div className="text-sm text-gray-300">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">95%</div>
                <div className="text-sm text-gray-300">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">1200+</div>
                <div className="text-sm text-gray-300">Hiring Partners</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center">
                Explore Courses
              </Link>
              <Link to="/bootcamp" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center">
                Join Bootcamp
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image/Animation */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Live Classes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">1-on-1 Doubt Resolution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Industry Projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Job Assistance</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white/10 rounded-lg">
                  <div className="text-sm text-gray-300 mb-2">Next Batch Starts</div>
                  <div className="text-2xl font-bold">15th January 2024</div>
                  <div className="text-sm text-yellow-300 mt-2">Limited Seats Available</div>
                </div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
