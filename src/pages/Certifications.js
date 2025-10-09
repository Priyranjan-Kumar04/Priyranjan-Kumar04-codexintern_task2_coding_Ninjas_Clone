import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Certifications = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const certifications = useMemo(() => [
    {
      id: 1,
      title: "IIT Roorkee - Full Stack Development",
      provider: "IIT Roorkee",
      duration: "6 months",
      level: "Intermediate",
      category: "Web Development",
      price: "₹89,999",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
      features: ["IIT Certificate", "Industry Projects", "Placement Support", "Alumni Network"],
      description: "Get certified by IIT Roorkee in Full Stack Development with hands-on projects"
    },
    {
      id: 2,
      title: "IIT Madras - Data Science & AI",
      provider: "IIT Madras",
      duration: "8 months",
      level: "Advanced",
      category: "Data Science",
      price: "₹1,29,999",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      features: ["IIT Certificate", "Research Projects", "Industry Mentorship", "Job Guarantee"],
      description: "Advanced certification in Data Science and AI from IIT Madras"
    },
    {
      id: 3,
      title: "IBM - Cloud Computing Professional",
      provider: "IBM",
      duration: "4 months",
      level: "Intermediate",
      category: "Cloud Computing",
      price: "₹69,999",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      features: ["IBM Badge", "Cloud Projects", "AWS/Azure Training", "Global Recognition"],
      description: "Professional certification in cloud computing technologies from IBM"
    },
    {
      id: 4,
      title: "IBM - AI & Machine Learning",
      provider: "IBM",
      duration: "5 months",
      level: "Advanced",
      category: "Artificial Intelligence",
      price: "₹79,999",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      features: ["IBM Certificate", "Watson AI", "ML Models", "Industry Case Studies"],
      description: "Master AI and Machine Learning with IBM's comprehensive certification program"
    },
    {
      id: 5,
      title: "IIT Delhi - Cybersecurity Professional",
      provider: "IIT Delhi",
      duration: "6 months",
      level: "Advanced",
      category: "Cybersecurity",
      price: "₹95,999",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      features: ["IIT Certificate", "Ethical Hacking", "Security Auditing", "Industry Recognition"],
      description: "Comprehensive cybersecurity certification from IIT Delhi"
    },
    {
      id: 6,
      title: "Google - Digital Marketing Professional",
      provider: "Google",
      duration: "3 months",
      level: "Beginner",
      category: "Digital Marketing",
      price: "₹45,999",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      features: ["Google Certificate", "Analytics", "AdWords", "Global Recognition"],
      description: "Professional digital marketing certification from Google"
    }
  ], []);

  const providers = ['All', 'IIT Roorkee', 'IIT Madras', 'IIT Delhi', 'IBM', 'Google'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const durations = ['All', '3 months', '4 months', '5 months', '6 months', '8 months'];
  const categories = ['All', 'Web Development', 'Data Science', 'Cloud Computing', 'Artificial Intelligence', 'Cybersecurity', 'Digital Marketing'];

  const filteredCertifications = useMemo(() => {
    return certifications.filter(cert => {
      const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesProvider = selectedProvider === 'All' || cert.provider === selectedProvider;
      const matchesLevel = selectedLevel === 'All' || cert.level === selectedLevel;
      const matchesDuration = selectedDuration === 'All' || cert.duration === selectedDuration;
      const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
      
      return matchesSearch && matchesProvider && matchesLevel && matchesDuration && matchesCategory;
    });
  }, [searchTerm, selectedProvider, selectedLevel, selectedDuration, selectedCategory, certifications]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedProvider('All');
    setSelectedLevel('All');
    setSelectedDuration('All');
    setSelectedCategory('All');
  };

  const handleEnrollClick = (cert) => {
    // Convert certification to course format for enrollment
    const courseData = {
      id: cert.id,
      title: cert.title,
      description: cert.description,
      duration: cert.duration,
      level: cert.level,
      price: cert.price,
      image: cert.image,
      features: cert.features,
      category: cert.category
    };
    navigate('/enrollment-plan', { state: { course: courseData } });
  };

  const benefits = [
    {
      icon: "🏆",
      title: "Industry Recognition",
      description: "Certificates recognized by top companies worldwide"
    },
    {
      icon: "📈",
      title: "Career Growth",
      description: "Average 40% salary increase post certification"
    },
    {
      icon: "🌐",
      title: "Global Validity",
      description: "Internationally accepted certifications"
    },
    {
      icon: "🤝",
      title: "Network Access",
      description: "Join exclusive alumni and professional networks"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Professional Certifications</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Earn industry-recognized certifications from top institutions like IIT and IBM
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full">IIT Certified</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">IBM Recognized</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Global Standards</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Career Boost</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16">Why Get Certified?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container-max">
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end">
              {/* Search Bar */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Certifications</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by certification name or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Provider Filter */}
              <div className="w-full lg:w-48">
                <label className="block text-sm font-medium text-gray-700 mb-2">Provider</label>
                <select
                  value={selectedProvider}
                  onChange={(e) => setSelectedProvider(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  {providers.map(provider => (
                    <option key={provider} value={provider}>{provider}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div className="w-full lg:w-48">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <div className="w-full lg:w-48">
                <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Duration Filter */}
              <div className="w-full lg:w-48">
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  {durations.map(duration => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters Button */}
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap"
              >
                Clear Filters
              </button>
            </div>

            {/* Active Filters Display */}
            <div className="mt-4 flex flex-wrap gap-2">
              {searchTerm && (
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm('')} className="ml-2 hover:text-purple-900">×</button>
                </span>
              )}
              {selectedProvider !== 'All' && (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center">
                  Provider: {selectedProvider}
                  <button onClick={() => setSelectedProvider('All')} className="ml-2 hover:text-blue-900">×</button>
                </span>
              )}
              {selectedCategory !== 'All' && (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory('All')} className="ml-2 hover:text-green-900">×</button>
                </span>
              )}
              {selectedLevel !== 'All' && (
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center">
                  Level: {selectedLevel}
                  <button onClick={() => setSelectedLevel('All')} className="ml-2 hover:text-orange-900">×</button>
                </span>
              )}
              {selectedDuration !== 'All' && (
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center">
                  Duration: {selectedDuration}
                  <button onClick={() => setSelectedDuration('All')} className="ml-2 hover:text-indigo-900">×</button>
                </span>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredCertifications.length} of {certifications.length} certifications
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="pb-20 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16">Available Certifications</h2>
          {filteredCertifications.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No certifications found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
              <button
                onClick={clearFilters}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredCertifications.map((cert) => (
                <div key={cert.id} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {cert.provider}
                    </div>
                    <div className="absolute top-4 right-4 bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {cert.level}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {cert.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{cert.title}</h3>
                    <p className="text-gray-600 mb-4">{cert.description}</p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Duration: {cert.duration}</span>
                      <span className="text-2xl font-bold text-purple-600">{cert.price}</span>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Certification Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.features.map((feature, index) => (
                          <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button 
                        onClick={() => handleEnrollClick(cert)}
                        className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                      >
                        Enroll Now
                      </button>
                      <button className="px-6 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-lg font-semibold transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="text-xl mb-8">Join thousands who have transformed their careers with our certifications</p>
          <Link to="/contact" className="btn-primary inline-block">
            Get Certification Guidance
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
