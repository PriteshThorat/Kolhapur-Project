import { Header } from "../components/Header.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import TripTypeDropdown from "../components/ui/TripTypeDropdown";
import LocationDropdown from "../components/ui/LocationDropdown";

const heroImages = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/3f9d07cfc468b7034996b1e74ceef706e47f2ff9?width=2880",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/e4608ca5c82662bf85f236fa77f5522ce3a483fd?width=900",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/2fb25d5d59278e92e0cc30cdf5e47418db125b04?width=900",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/55ce703ca04b2077c33a4d7b8a0e8e88ae0ff1de?width=900",
];

const keyHighlights = [
  { icon: "🏛️", text: "Ancient Temples" },
  { icon: "🏰", text: "Historic Forts" },
  { icon: "🌊", text: "Scenic Lakes" },
  { icon: "🍽️", text: "Local Cuisine" },
];

const tripTypes = [
  "Solo Trip",
  "Couple Trip",
  "Family Trip",
  "Friends Trip",
  "Group/Community Trip",
];

const allLocations = [
  "Kolhapur",
  "Rankala Lake",
  "Jyotiba Temple",
  "Panhala Fort",
  "Mahalakshmi Temple",
  "Kolhapuri Chappal Market",
];

export default function Index() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTripType, setSelectedTripType] = useState("");
  const [location, setLocation] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const suggestionsRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?location=${encodeURIComponent(location)}&type=${encodeURIComponent(selectedTripType)}`);
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    setActiveSuggestion(-1);
    if (value.length > 0) {
      setShowSuggestions(true);
      setFilteredSuggestions(allLocations.filter(loc => loc.toLowerCase().includes(value.toLowerCase())));
    } else {
      setShowSuggestions(true);
      setFilteredSuggestions(allLocations);
    }
  };

  const handleLocationFocus = () => {
    setShowSuggestions(true);
    setFilteredSuggestions(location.length > 0 ? allLocations.filter(loc => loc.toLowerCase().includes(location.toLowerCase())) : allLocations);
  };

  const handleLocationBlur = () => {
    setTimeout(() => setShowSuggestions(false), 100);
  };

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion);
    setShowSuggestions(false);
  };

  const handleLocationKeyDown = (e) => {
    if (!showSuggestions) return;
    if (e.key === "ArrowDown") {
      setActiveSuggestion((prev) => Math.min(prev + 1, filteredSuggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      setActiveSuggestion((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && activeSuggestion >= 0) {
      setLocation(filteredSuggestions[activeSuggestion]);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-travel-blue-light via-travel-purple-light to-white dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-gray-900 transition-colors duration-500">
      <Header />

      {/* Enhanced Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 animate-fade-in">
        {/* Dynamic Background Carousel */}
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }} />
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-travel-blue-light via-travel-purple-light to-white dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-gray-900 opacity-80" />

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
                }`}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="z-20 relative text-center max-w-6xl mx-auto">
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
                  options={allLocations.map(loc => ({
                    label: loc,
                    value: loc,
                    icon: "📍"
                  }))}
                  placeholder="Where do you want to go?"
                />
              </div>

              {/* Trip Type Dropdown */}
              <div className="lg:w-80">
                <TripTypeDropdown
                  value={selectedTripType}
                  onChange={setSelectedTripType}
                  options={tripTypes.map(type => ({
                    label: type,
                    value: type,
                    icon:
                      type === "Solo Trip" ? "🧑‍🦯" :
                        type === "Couple Trip" ? "👩‍❤️‍👨" :
                          type === "Family Trip" ? "👨‍👩‍👧‍👦" :
                            type === "Friends Trip" ? "🧑‍🤝‍🧑" :
                              type === "Group/Community Trip" ? "👥" :
                                "👤"
                  }))}
                  placeholder="Trip type"
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