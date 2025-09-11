import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      company: "Google",
      image: "RS",
      content: "Coding Ninjas transformed my career completely. The structured curriculum and 1-on-1 doubt resolution helped me land my dream job at Google. The mentors are incredibly supportive and the community is amazing.",
      rating: 5,
      course: "Full Stack Web Development"
    },
    {
      name: "Priya Patel",
      role: "Data Scientist",
      company: "Microsoft",
      image: "PP",
      content: "The Data Analytics course with GenAI was exactly what I needed to transition into data science. The hands-on projects and industry exposure gave me the confidence to crack interviews at top companies.",
      rating: 5,
      course: "Data Analytics with GenAI"
    },
    {
      name: "Arjun Kumar",
      role: "Frontend Developer",
      company: "Amazon",
      image: "AK",
      content: "From zero coding knowledge to getting placed at Amazon - this journey wouldn't have been possible without Coding Ninjas. The job assistance program is phenomenal and the placement support is unmatched.",
      rating: 5,
      course: "Job Bootcamp"
    },
    {
      name: "Sneha Gupta",
      role: "ML Engineer",
      company: "Netflix",
      image: "SG",
      content: "The GenAI certification course opened up new opportunities for me. The curriculum is cutting-edge and the instructors are industry experts. Highly recommend for anyone looking to upskill in AI.",
      rating: 5,
      course: "GenAI Certification"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Stories from people like you</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Hear from our successful students who transformed their careers with Coding Ninjas
          </p>
          <Link to="/reviews" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold">
            Read all success stories
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {testimonials[currentTestimonial].image}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div>
                  <div className="font-bold text-xl text-gray-800">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </div>
                  <div className="text-sm text-orange-500 font-medium mt-1">
                    {testimonials[currentTestimonial].course}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Success Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">500K+</div>
            <div className="text-gray-600">Students Trained</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">95%</div>
            <div className="text-gray-600">Placement Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">1200+</div>
            <div className="text-gray-600">Hiring Partners</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">15 LPA</div>
            <div className="text-gray-600">Average Package</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to start your success story?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their careers with Coding Ninjas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="btn-primary">
              Explore Courses
            </Link>
            <Link to="/bootcamp" className="btn-secondary">
              Join Bootcamp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
