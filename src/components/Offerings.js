import React from 'react';
import { Link } from 'react-router-dom';

const Offerings = () => {
  const jobBootcampCourses = [
    {
      title: "Full Stack Web Development with GenAI",
      duration: "140+ Hrs of content",
      problems: "600+ Problems",
      learners: "10k+ Learners",
      badge: "Popular",
      color: "bg-blue-500"
    },
    {
      title: "Data Analytics with GenAI",
      duration: "100+ Hrs of content",
      problems: "300+ Problems",
      learners: "2000+ Learners",
      badge: "New",
      color: "bg-green-500"
    }
  ];

  const getCourseDataFromBootcamp = (course) => {
    const isWeb = /web/i.test(course.title);
    const isAnalytics = /analytics/i.test(course.title);
    const image = isWeb
      ? 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop'
      : isAnalytics
      ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
      : 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=250&fit=crop';

    return {
      id: `bootcamp-${course.title.replace(/\s+/g, '-').toLowerCase()}`,
      title: course.title,
      description: `Join our ${course.title} program with live classes and industry projects`,
      duration: course.duration,
      level: 'Beginner to Advanced',
      category: 'Job Bootcamp',
      price: isWeb ? '₹49,999' : '₹39,999',
      image,
      features: ['Live Classes', 'Industry Projects', 'Job Assistance', 'Certification']
    };
  };

  const iitCertifications = [
    {
      title: "PG Certification in Data Analytics with GenAI",
      institute: "E&ICT Academy, IIT Guwahati",
      duration: "6 months",
      category: "For graduates"
    },
    {
      title: "Advanced Certification in GenAI for Non-Tech Professionals",
      institute: "IITM Pravartak, TIH IIT Madras",
      duration: "6 months",
      category: "For graduates"
    },
    {
      title: "Training and Internship Certification in Advanced DSA",
      institute: "IITM Pravartak, TIH IIT Madras",
      duration: "4 months",
      category: "For college students"
    },
    {
      title: "Training and Internship Certification in Data Analytics",
      institute: "In Collaboration with IBM",
      duration: "6 months",
      category: "For college students"
    }
  ];

  const newLaunches = [
    {
      title: "Advanced Certification in GenAI & Multi Agent Systems",
      duration: "100+ Hrs of content",
      problems: "300+ Problems",
      learners: "576+ Learners",
      badge: "Hot",
      color: "bg-red-500"
    },
    {
      title: "Advanced Certification in GenAI for Non-tech Professionals",
      duration: "100+ Hrs of content",
      problems: "300+ Problems",
      learners: "523+ Learners",
      badge: "Trending",
      color: "bg-purple-500"
    },
    {
      title: "Advanced Certification in Data Science with GenAI",
      duration: "140+ Hrs of content",
      problems: "600+ Problems",
      learners: "780+ Learners",
      badge: "Popular",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">OUR OFFERINGS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to accelerate your tech career
          </p>
        </div>

        {/* Job Bootcamp Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Job Bootcamp</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {jobBootcampCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-800 flex-1">{course.title}</h4>
                  <span className={`${course.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {course.badge}
                  </span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {course.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                    </svg>
                    {course.problems}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    {course.learners}
                  </div>
                </div>
                <Link to={`/enrollment-plan`} state={{ course: getCourseDataFromBootcamp(course) }} className="btn-primary w-full text-center block">
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* IIT Certifications Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">IIT Certifications</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {iitCertifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {cert.category}
                </span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{cert.title}</h4>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
                  </svg>
                  {cert.institute}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {cert.duration}
                </div>
              </div>
              <Link to="/certifications" className="btn-secondary w-full text-center block">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>

        {/* New Launches Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">New Launches</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {newLaunches.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-800 flex-1">{course.title}</h4>
                  <span className={`${course.color} text-white px-2 py-1 rounded-full text-xs font-medium`}>
                    {course.badge}
                  </span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600 text-sm">
                    <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {course.duration}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                    </svg>
                    {course.problems}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    {course.learners}
                  </div>
                </div>
                <Link to="/courses" className="btn-primary w-full text-center block text-sm">
                  Explore Course
                </Link>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Offerings;
