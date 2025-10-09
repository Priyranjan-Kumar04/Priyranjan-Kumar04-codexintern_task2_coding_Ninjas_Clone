import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const EnrollmentSuccess = () => {
  const location = useLocation();
  const { enrollmentData } = location.state || {};
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    // Load all enrollments from localStorage
    const storedEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
    setEnrollments(storedEnrollments);
  }, []);

  if (!enrollmentData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Enrollment data not found</h2>
          <Link to="/courses" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const { course, plan, personalInfo } = enrollmentData;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Successfully Enrolled!</h1>
            <p className="text-xl text-gray-600">Welcome to your learning journey with Coding Ninjas</p>
          </div>

          {/* Enrollment Details */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Enrollment Details</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Course Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{course.title}</h4>
                      <p className="text-gray-600 text-sm">{course.duration} • {course.level}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Selected Plan: {plan.name}</h5>
                    <p className="text-gray-600 mb-2">{plan.duration}</p>
                    <p className="text-2xl font-bold text-orange-500">{plan.price}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Student Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-semibold">{personalInfo.firstName} {personalInfo.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-semibold">{personalInfo.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-semibold">{personalInfo.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-semibold capitalize">{personalInfo.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Enrollment Date:</span>
                    <span className="font-semibold">
                      {new Date(enrollmentData.enrollmentDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">What's Next?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Check Your Email</h3>
                <p className="text-gray-600 text-sm">You'll receive a confirmation email with course access details within 24 hours.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Join Community</h3>
                <p className="text-gray-600 text-sm">Connect with fellow students and mentors in our exclusive Discord community.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Start Learning</h3>
                <p className="text-gray-600 text-sm">Access your course materials and attend your first live class.</p>
              </div>
            </div>
          </div>

          {/* All Enrollments */}
          {enrollments.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Enrolled Courses</h2>
              <div className="space-y-4">
                {enrollments.map((enrollment, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img 
                        src={enrollment.course.image} 
                        alt={enrollment.course.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">{enrollment.course.title}</h4>
                        <p className="text-sm text-gray-600">{enrollment.plan.name} • {enrollment.plan.price}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Enrolled on</p>
                      <p className="font-semibold text-gray-800">
                        {new Date(enrollment.enrollmentDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/courses" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore More Courses
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Support
              </Link>
            </div>
            <p className="text-gray-600">
              Need help? Our support team is available 24/7 to assist you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentSuccess;
