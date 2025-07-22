import { Header } from "../components/Header.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LocationDropdown from "../components/ui/LocationDropdown";

const keyHighlights = [
  { icon: "🏛️", text: "Ancient Temples" },
  { icon: "🏰", text: "Historic Forts" },
  { icon: "🌊", text: "Scenic Lakes" },
  { icon: "🍽️", text: "Local Cuisine" },
];

export default function Index() {
  const [location, setLocation] = useState("");
  const [destinations, setDestinations] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_GIST_DATA_URL}`)
      .then(res => res.json())
      .then(data => {
        setDestinations(Array.isArray(data.destinations) ? data.destinations : []);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const scrollToContent = () => {
    document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?location=${encodeURIComponent(location)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-travel-blue-light via-travel-purple-light to-white dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-gray-900 transition-colors duration-500">
      <Header />

      {/* Enhanced Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 animate-fade-in bg-gradient-to-br from-travel-blue-light via-travel-purple-light to-white dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-gray-900">
        <div className="relative text-center max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-travel-blue-dark dark:text-travel-purple-light font-irish-grover font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[128px] leading-normal drop-shadow-lg dark:glow-heading mb-4">
              EXPLORE THE
              <br />
              KOLHAPUR
            </h1>

            {/* Compelling Tagline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-tinos font-semibold drop-shadow-lg max-w-4xl mx-auto">
              Discover the "Dakshin Kashi" - Where Heritage Meets Adventure
            </p>
          </div>

          {/* Key Highlights */}
          <div className="mb-8 animate-fade-in">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {keyHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <span className="text-2xl">{highlight.icon}</span>
                  <span className="text-white font-inter font-medium text-sm md:text-base drop-shadow-md">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in">
            <Link
              to="/explore"
              className="bg-gradient-to-tr from-travel-blue-light via-travel-purple-light to-travel-blue-dark dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-travel-blue-light hover:opacity-90 transition-all duration-200 rounded-[20px] px-8 py-6 md:px-12 md:py-8 shadow-xl transform hover:scale-105"
              aria-label="Start exploring Kolhapur"
            >
              <span className="text-white font-tienne text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-normal">
                Let's Go
              </span>
            </Link>

            <Link
              to="/trips"
              className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm border-2 border-white/50 hover:bg-white/30 dark:hover:bg-gray-900/30 transition-all duration-200 rounded-[20px] px-8 py-6 md:px-12 md:py-8 shadow-xl transform hover:scale-105"
            >
              <span className="text-white font-tienne text-xl md:text-2xl lg:text-3xl xl:text-[36px] font-normal">
                View Packages
              </span>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce cursor-pointer" onClick={scrollToContent}>
            <div className="w-6 h-10 border-2 border-white/70 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-white/70 text-sm mt-2 font-inter">Scroll to explore</p>
          </div>
        </div>
      </div>

      {/* Search Form Section */}
      <div id="search-section" className="w-full max-w-6xl mx-auto px-4 -mt-20 relative z-30 animate-fade-in">
        <div className="bg-white/80 dark:bg-gray-900/80 rounded-[20px] p-6 md:p-8 lg:p-12 shadow-xl backdrop-blur-sm">
          <form onSubmit={handleSearch}>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
              {/* Location Input */}
              <div className="flex-1">
                <LocationDropdown
                  value={location}
                  onChange={setLocation}
                  options={destinations.map(loc => ({
                    label: loc.name,
                    value: loc.name,
                    icon: "📍"
                  }))}
                  placeholder="Where do you want to go?"
                />
              </div>


              {/* Search Button */}
              <button className="lg:w-48 bg-gradient-to-tr from-travel-purple-light to-travel-blue-dark dark:from-travel-purple-dark dark:to-travel-blue-light hover:opacity-90 transition-all duration-200 rounded-[10px] p-4 flex items-center justify-center shadow-md">
                <span className="text-white font-istok-web font-normal text-lg md:text-2xl lg:text-[32px]">
                  Search
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}