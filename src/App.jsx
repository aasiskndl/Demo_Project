import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import LoadingAnimation from './components/projects/loading-animation/LoadingAnimation';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Start loading animation when navigating to a new route
    setLoading(true);
    
    // Delay to simulate page loading
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading animation after a brief delay
    }, 800); // Adjust this time based on the animation's duration

    // Cleanup the timer when the component unmounts or re-renders
    return () => clearTimeout(timer);
  }, [location]); // Dependency on location ensures animation only triggers on route change

  return (
    <>
      {loading && <LoadingAnimation />} {/* Only show loading animation when loading is true */}
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
