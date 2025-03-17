import React, { useEffect, useState } from 'react';
import './SplashScreen.css'; // Import the CSS for animation

const SplashScreen = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set a timeout to hide splash screen after 3 seconds
    const timer = setTimeout(() => {
      setIsLoaded(true); // Hide splash screen after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <div className={`splash-screen ${isLoaded ? 'fade-out' : ''}`}>
      <div className="splash-text">Stand by...</div>
    </div>
  );
};

export default SplashScreen;
