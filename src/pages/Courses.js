import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master modern web development with React, Node.js, and MongoDB",
      duration: "6 months",
      level: "Beginner to Advanced",
      category: "Web Development",
      price: "₹49,999",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      features: ["Live Classes", "Industry Projects", "Job Assistance", "Certification"]
    },
    {
      id: 2,
      title: "Data Analytics",
      description: "Learn data analysis with Python, SQL, and advanced analytics tools",
      duration: "4 months",
      level: "Beginner",
      category: "Data Science",
      price: "₹39,999",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      features: ["Python & SQL", "Data Visualization", "Real Projects", "Industry Mentorship"]
    },
    {
      id: 3,
      title: "Data Science",
      description: "Complete data science program with ML, AI, and deep learning",
      duration: "8 months",
      level: "Intermediate",
      category: "Data Science",
      price: "₹69,999",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      features: ["Machine Learning", "Deep Learning", "AI Projects", "Research Papers"]
    },
    {
      id: 4,
      title: "GenAI & Multi Agent Systems",
      description: "Master generative AI and build intelligent multi-agent systems",
      duration: "5 months",
      level: "Advanced",
      category: "Artificial Intelligence",
      price: "₹79,999",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      features: ["GPT Integration", "Agent Development", "LLM Fine-tuning", "AI Applications"]
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications",
      duration: "5 months",
      level: "Intermediate",
      category: "Mobile Development",
      price: "₹54,999",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      features: ["React Native", "Flutter", "iOS & Android", "App Store Publishing"]
    },
    {
      id: 6,
      title: "Cloud Computing & DevOps",
      description: "Master cloud platforms and DevOps practices",
      duration: "6 months",
      level: "Advanced",
      category: "Cloud & DevOps",
      price: "₹64,999",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      features: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD Pipelines"]
    }
  ];

  const categories = ['All', 'Web Development', 'Data Science', 'Artificial Intelligence', 'Mobile Development', 'Cloud & DevOps'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Beginner to Advanced'];
  const durations = ['All', '4 months', '5 months', '6 months', '8 months'];

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
      const matchesDuration = selectedDuration === 'All' || course.duration === selectedDuration;
      
      return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
    });
  }, [searchTerm, selectedCategory, selectedLevel, selectedDuration, courses]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedLevel('All');
    setSelectedDuration('All');
  };

  const handleEnrollClick = (course) => {
    navigate('/enrollment-plan', { state: { course } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Choose from our comprehensive range of courses designed to transform your career in tech
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full">Live Classes</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Industry Projects</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Job Assistance</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Certification</span>
            </div>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Courses</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by course name or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                  <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Category Filter */}
              <div className="w-full lg:w-48">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm('')} className="ml-2 hover:text-orange-900">×</button>
                </span>
              )}
              {selectedCategory !== 'All' && (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory('All')} className="ml-2 hover:text-blue-900">×</button>
                </span>
              )}
              {selectedLevel !== 'All' && (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center">
                  Level: {selectedLevel}
                  <button onClick={() => setSelectedLevel('All')} className="ml-2 hover:text-green-900">×</button>
                </span>
              )}
              {selectedDuration !== 'All' && (
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center">
                  Duration: {selectedDuration}
                  <button onClick={() => setSelectedDuration('All')} className="ml-2 hover:text-purple-900">×</button>
                </span>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-20">
        <div className="container-max">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No courses found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
              <button
                onClick={clearFilters}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {course.level}
                    </div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {course.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Duration: {course.duration}</span>
                      <span className="text-2xl font-bold text-orange-500">{course.price}</span>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">What you'll learn:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.features.map((feature, index) => (
                          <span key={index} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button 
                        onClick={() => handleEnrollClick(course)}
                        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                      >
                        Enroll Now
                      </button>
                      <button className="px-6 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg font-semibold transition-colors">
                        Learn More
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
          <h2 className="text-3xl font-bold mb-4">Not sure which course is right for you?</h2>
          <p className="text-xl mb-8">Talk to our career counselors and get personalized guidance</p>
          <Link to="/contact" className="btn-primary inline-block">
            Get Free Counseling
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Courses;
