import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Offerings from './components/Offerings';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Courses from './pages/Courses';
import Bootcamp from './pages/Bootcamp';
import Certifications from './pages/Certifications';
import Reviews from './pages/Reviews';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import EnrollmentPlan from './pages/EnrollmentPlan';
import EnrollmentSuccess from './pages/EnrollmentSuccess';
import MyLearning from './pages/MyLearning';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || "demo-client-id"}>
      <AuthProvider>
        <Router>
          <div className="App">
            <ScrollToTop />
            <Header />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Offerings />
                  <Features />
                  <Testimonials />
                </>
              } />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/web-development" element={<Courses />} />
              <Route path="/courses/data-analytics" element={<Courses />} />
              <Route path="/courses/data-science" element={<Courses />} />
              <Route path="/courses/gen-ai" element={<Courses />} />
              <Route path="/bootcamp" element={<Bootcamp />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/certifications/iit" element={<Certifications />} />
              <Route path="/certifications/ibm" element={<Certifications />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/enrollment-plan" element={<EnrollmentPlan />} />
              <Route path="/enrollment-success" element={<EnrollmentSuccess />} />
              <Route path="/my-learning" element={<MyLearning />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
