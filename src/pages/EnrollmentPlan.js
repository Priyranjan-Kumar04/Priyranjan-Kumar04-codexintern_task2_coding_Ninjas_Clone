import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EnrollmentPlan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { course } = location.state || {};
  
  const [selectedPlan, setSelectedPlan] = useState('');
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: ''
  });

  const weeklyPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      duration: '3 hours/week',
      price: course?.price || '₹49,999',
      features: [
        '3 hours of live classes per week',
        'Weekend batch available',
        'Basic project assignments',
        'Community support',
        'Certificate on completion'
      ],
      recommended: false
    },
    {
      id: 'standard',
      name: 'Standard Plan',
      duration: '6 hours/week',
      price: `₹${parseInt((course?.price || '49999').replace('₹', '').replace(',', '')) + 10000}`,
      features: [
        '6 hours of live classes per week',
        'Weekday + Weekend batches',
        'Advanced project assignments',
        '1-on-1 mentor sessions',
        'Job placement assistance',
        'Industry-recognized certificate'
      ],
      recommended: true
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      duration: '10 hours/week',
      price: `₹${parseInt((course?.price || '49999').replace('₹', '').replace(',', '')) + 20000}`,
      features: [
        '10 hours of live classes per week',
        'Flexible batch timings',
        'Capstone project with industry mentor',
        'Weekly 1-on-1 mentor sessions',
        'Guaranteed job placement',
        'LinkedIn profile optimization',
        'Interview preparation bootcamp'
      ],
      recommended: false
    }
  ];

  const handleInputChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleEnrollment = (e) => {
    e.preventDefault();
    if (!selectedPlan) {
      alert('Please select a weekly plan');
      return;
    }
    
    const enrollmentData = {
      course: course,
      plan: weeklyPlans.find(plan => plan.id === selectedPlan),
      personalInfo: personalInfo,
      enrollmentDate: new Date().toISOString()
    };
    
    // Store enrollment data in localStorage for demo purposes
    const existingEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
    existingEnrollments.push(enrollmentData);
    localStorage.setItem('enrollments', JSON.stringify(existingEnrollments));
    
    navigate('/enrollment-success', { state: { enrollmentData } });
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course not found</h2>
          <button 
            onClick={() => navigate('/courses')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Course Info Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center gap-6">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{course.title}</h1>
                <p className="text-gray-600 mb-2">{course.description}</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>Duration: {course.duration}</span>
                  <span>Level: {course.level}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Plan Selection */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Weekly Plan</h2>
                <div className="space-y-4">
                  {weeklyPlans.map((plan) => (
                    <div 
                      key={plan.id}
                      className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                        selectedPlan === plan.id 
                          ? 'border-orange-500 bg-orange-50' 
                          : 'border-gray-200 hover:border-orange-300'
                      } ${plan.recommended ? 'relative' : ''}`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.recommended && (
                        <div className="absolute -top-3 left-6 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Recommended
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                          <p className="text-gray-600">{plan.duration}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-orange-500">{plan.price}</div>
                          <div className="text-sm text-gray-500">one-time payment</div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-4">
                        <input
                          type="radio"
                          id={plan.id}
                          name="plan"
                          value={plan.id}
                          checked={selectedPlan === plan.id}
                          onChange={() => setSelectedPlan(plan.id)}
                          className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                        />
                        <label htmlFor={plan.id} className="ml-2 font-semibold text-gray-800">
                          Select this plan
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Personal Information Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Personal Information</h3>
                <form onSubmit={handleEnrollment} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={personalInfo.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={personalInfo.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={personalInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={personalInfo.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                    <select
                      name="experience"
                      required
                      value={personalInfo.experience}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Select experience</option>
                      <option value="beginner">Complete Beginner</option>
                      <option value="some">Some Experience</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Enroll Now
                  </button>
                  
                  <div className="text-xs text-gray-500 text-center">
                    By enrolling, you agree to our Terms of Service and Privacy Policy
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentPlan;
