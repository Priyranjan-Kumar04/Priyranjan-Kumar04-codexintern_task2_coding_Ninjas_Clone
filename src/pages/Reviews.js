import React from 'react';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const successStories = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      course: "Full Stack Web Development",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      story: "Coding Ninjas transformed my career completely. From a non-tech background to landing a job at Google in just 8 months!",
      salary: "₹45 LPA",
      rating: 5
    },
    {
      id: 2,
      name: "Rahul Kumar",
      role: "Data Scientist at Microsoft",
      course: "Data Science & AI",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      story: "The hands-on projects and industry mentorship helped me transition from mechanical engineering to data science.",
      salary: "₹38 LPA",
      rating: 5
    },
    {
      id: 3,
      name: "Sneha Patel",
      role: "Frontend Developer at Flipkart",
      course: "Job Bootcamp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      story: "The job guarantee program gave me confidence. Got placed within 4 months of completing the bootcamp!",
      salary: "₹28 LPA",
      rating: 5
    },
    {
      id: 4,
      name: "Arjun Singh",
      role: "Cloud Architect at Amazon",
      course: "IBM Cloud Certification",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      story: "The IBM certification opened doors to cloud computing. Now working as a Cloud Architect at Amazon!",
      salary: "₹52 LPA",
      rating: 5
    },
    {
      id: 5,
      name: "Kavya Reddy",
      role: "ML Engineer at Uber",
      course: "Data Analytics",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      story: "Started with data analytics and now building ML models at Uber. The learning path was perfectly structured.",
      salary: "₹42 LPA",
      rating: 5
    },
    {
      id: 6,
      name: "Vikash Gupta",
      role: "DevOps Engineer at Netflix",
      course: "Full Stack Web Development",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      story: "The comprehensive curriculum and real projects prepared me for the industry. Got my dream job at Netflix!",
      salary: "₹48 LPA",
      rating: 5
    }
  ];

  const stats = [
    { number: "50,000+", label: "Students Placed" },
    { number: "95%", label: "Placement Rate" },
    { number: "₹15 LPA", label: "Average Package" },
    { number: "1000+", label: "Hiring Partners" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Real stories from our students who transformed their careers and achieved their dreams
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16">Meet Our Successful Alumni</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{story.name}</h3>
                    <p className="text-green-600 font-semibold">{story.role}</p>
                    <p className="text-sm text-gray-500">{story.course}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    {[...Array(story.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{story.story}"</p>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-sm text-gray-500">Package</span>
                  <span className="text-xl font-bold text-green-600">{story.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16">Video Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <div key={video} className="bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-gray-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 5v10l8-5-8-5z"/>
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Student Success Story #{video}</h3>
                  <p className="text-sm text-gray-600">Watch how our student transformed their career</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8">Join thousands of successful professionals who started their journey with us</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition-colors">
              Explore Courses
            </Link>
            <Link to="/contact" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors">
              Talk to Counselor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
