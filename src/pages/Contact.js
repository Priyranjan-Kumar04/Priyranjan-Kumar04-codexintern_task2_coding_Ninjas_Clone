import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store contact form submission in localStorage for demo
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...formData,
      submissionDate: new Date().toISOString()
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: ["Banni, Khagaria", "Bihar - 851214", "India"]
    },
    {
      icon: "📞",
      title: "Phone",
      details: ["+91 8270722026"]
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["priyranjan1k@gmail.com"]
    },
    {
      icon: "🕒",
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 8:00 PM", "Saturday: 10:00 AM - 6:00 PM", "Sunday: Closed"]
    }
  ];

  const faqData = [
    {
      question: "How do I enroll in a course?",
      answer: "You can enroll by selecting a course, choosing your preferred weekly plan, and completing the enrollment form with your personal information."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, UPI, net banking, and EMI options through our secure payment gateway."
    },
    {
      question: "Can I switch between different weekly plans?",
      answer: "Yes, you can upgrade your plan anytime during the course. Contact our support team for assistance with plan changes."
    },
    {
      question: "Do you provide job placement assistance?",
      answer: "Yes, our Standard and Premium plans include job placement assistance, interview preparation, and access to our hiring partner network."
    },
    {
      question: "What if I miss a live class?",
      answer: "All live classes are recorded and available for replay. You can access recordings within 24 hours of the session."
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Have questions about our courses? Need help with enrollment? We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Information</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 9999-888-777"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="courses">Course Information</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing & Payments</option>
                      <option value="career">Career Guidance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please describe your inquiry in detail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Quick Links */}
            <div className="space-y-8">
              {/* Interactive Map Placeholder */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Find Us</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Banni, Khagaria, Bihar</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Directions
                  </button>
                  <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                    View on Maps
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📞</span>
                      <div>
                        <p className="font-semibold text-gray-800">Schedule a Call</p>
                        <p className="text-sm text-gray-600">Book a free consultation</p>
                      </div>
                    </div>
                  </button>
                  <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💬</span>
                      <div>
                        <p className="font-semibold text-gray-800">Live Chat</p>
                        <p className="text-sm text-gray-600">Chat with our support team</p>
                      </div>
                    </div>
                  </button>
                  <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📧</span>
                      <div>
                        <p className="font-semibold text-gray-800">Email Support</p>
                        <p className="text-sm text-gray-600">Get help via email</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6 group">
                <summary className="font-semibold text-gray-800 cursor-pointer flex justify-between items-center">
                  {faq.question}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="w-40 h-40 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
                PK
              </div>
              
              {/* Developer Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Priyranjan Kumar</h1>
                <p className="text-xl text-orange-100 mb-6 font-medium">Full Stack Developer & Computer Science Student</p>
                
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <p className="text-white leading-relaxed">
                    I'm Priyranjan Kumar, 21 years old, currently in my 4th year of Computer Science and Engineering at 
                    Mahendra Institute of Technology. I'm passionate about software development, data structures and algorithms, 
                    and full-stack development. Over the past few years, I've worked on projects involving Java, Python, Flutter, 
                    and Android Studio, with a focus on building real-world applications like farmer-centric marketplace apps 
                    and AI-powered solutions for agriculture. I'm also interested in sustainable technology, hackathons, 
                    and exploring new business opportunities in the tech space. My goal is to become a skilled software engineer 
                    and create impactful products that solve real-world problems.
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">21</div>
                    <div className="text-sm text-orange-100">Years Old</div>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">4th</div>
                    <div className="text-sm text-orange-100">Year CSE</div>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm text-orange-100">Technologies</div>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">∞</div>
                    <div className="text-sm text-orange-100">Passion</div>
                  </div>
                </div>
                
                {/* Contact CTA */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a 
                    href="mailto:priyranjan1k@gmail.com" 
                    className="bg-white text-orange-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center gap-2 shadow-lg"
                  >
                    <span>✉️</span>
                    Contact Me
                  </a>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-semibold flex items-center gap-2">
                    <span>💼</span>
                    View Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
