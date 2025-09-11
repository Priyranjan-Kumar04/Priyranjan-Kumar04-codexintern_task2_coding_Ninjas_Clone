import React from 'react';
import { Link } from 'react-router-dom';

const Bootcamp = () => {
  const bootcampFeatures = [
    {
      icon: "🎯",
      title: "Job Guarantee",
      description: "Get placed within 6 months or get your money back"
    },
    {
      icon: "👨‍💼",
      title: "Industry Mentors",
      description: "Learn from professionals working at top tech companies"
    },
    {
      icon: "💼",
      title: "Real Projects",
      description: "Build portfolio-worthy projects with real-world applications"
    },
    {
      icon: "🤝",
      title: "Interview Prep",
      description: "Comprehensive interview preparation and mock sessions"
    }
  ];

  const curriculum = [
    {
      week: "Week 1-4",
      title: "Foundation Building",
      topics: ["Programming Fundamentals", "Data Structures", "Algorithms", "Problem Solving"]
    },
    {
      week: "Week 5-8",
      title: "Advanced Concepts",
      topics: ["System Design", "Database Design", "API Development", "Testing"]
    },
    {
      week: "Week 9-12",
      title: "Specialization",
      topics: ["Frontend/Backend Focus", "Cloud Technologies", "DevOps Basics", "Project Work"]
    },
    {
      week: "Week 13-16",
      title: "Job Preparation",
      topics: ["Resume Building", "Interview Practice", "Mock Interviews", "Job Applications"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Job Bootcamp</h1>
              <p className="text-xl mb-8">
                Intensive 16-week program designed to get you job-ready with guaranteed placement assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Apply Now
                </button>
                <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Program Highlights</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">16</div>
                    <div className="text-sm">Weeks</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm">Placement Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">12 LPA</div>
                    <div className="text-sm">Avg Package</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm">Hiring Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our Bootcamp?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bootcampFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16">Curriculum Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculum.map((phase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                <div className="text-blue-600 font-semibold mb-2">{phase.week}</div>
                <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8">Join thousands of successful graduates who landed their dream jobs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors">
              Apply for Bootcamp
            </Link>
            <Link to="/contact" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors">
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bootcamp;
