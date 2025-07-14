import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-travel-blue-light via-travel-purple-light to-white dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-gray-900 transition-colors duration-500 animate-fade-in">
      <div className="text-center bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-12 animate-fade-in">
        <div className="flex flex-col items-center mb-6">
          {/* Animated 404 Icon */}
          <svg className="w-24 h-24 text-travel-blue-dark dark:text-travel-blue-light animate-bounce mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" strokeDasharray="4 4" />
            <text x="32" y="42" textAnchor="middle" fontSize="32" fill="currentColor" fontFamily="monospace">404</text>
          </svg>
          <h1 className="text-5xl font-bold text-travel-blue-dark dark:text-travel-purple-light mb-2 dark:glow-heading">404</h1>
        </div>
        <p className="text-2xl text-travel-purple-dark dark:text-travel-purple-light mb-6">Oops! Page not found</p>
        <a href="/" className="inline-block px-8 py-3 rounded-full bg-gradient-to-tr from-travel-blue-light via-travel-purple-light to-travel-blue-dark dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-travel-blue-light text-white font-bold shadow-lg hover:opacity-90 transition-all duration-200">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
