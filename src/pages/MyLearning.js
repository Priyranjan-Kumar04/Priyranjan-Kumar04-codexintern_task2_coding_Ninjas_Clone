import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyLearning = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('enrollments') || '[]');
    // latest first
    setEnrollments(stored.slice().reverse());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-max">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Learning</h1>
          <Link to="/courses" className="btn-primary">Explore More Courses</Link>
        </div>

        {enrollments.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">No enrollments yet</h2>
            <p className="text-gray-600 mb-6">Start your journey by enrolling in a course.</p>
            <Link to="/courses" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">Browse Courses</Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {enrollments.map((enrollment, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-6 flex gap-4">
                <img
                  src={enrollment.course.image}
                  alt={enrollment.course.title}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{enrollment.course.title}</h3>
                  <div className="text-sm text-gray-600 mb-2">
                    {enrollment.course.duration} • {enrollment.course.level}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Plan:</span> {enrollment.plan.name} • {enrollment.plan.price}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Enrolled on:</span> {new Date(enrollment.enrollmentDate).toLocaleDateString()}
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Link to="/enrollment-success" state={{ enrollmentData: enrollment }} className="btn-secondary text-sm">View Details</Link>
                    <Link to="/contact" className="px-4 py-2 border rounded-lg text-sm text-gray-700 hover:bg-gray-50">Get Support</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLearning;
