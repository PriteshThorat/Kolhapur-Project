import { Header } from "../components/Header.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { DestinationCardSkeleton } from "../Skeletons/index.js";

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [destinations, setDestinations] = useState([])
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_GIST_DATA_URL}`)
      .then(res => res.json())
      .then(data => {
        setDestinations(Array.isArray(data.destinations) ? data.destinations : []);
        // Dynamically extract unique categories from data
        const uniqueCategories = Array.from(
          new Set((data.destinations || []).map(dest => dest.category))
        );
        setCategories(["All", ...uniqueCategories]);
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
        setLoading(false);
      })
  }, [])

  const filteredDestinations = selectedCategory === "All"
    ? destinations
    : destinations.filter(dest => dest.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-travel-blue-light via-travel-purple-light to-white dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-gray-900 transition-colors duration-500">
      <Header />

      <main className="flex justify-center items-center min-h-[calc(100vh-73px)] p-4">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-inter text-[64px] font-bold italic text-travel-blue-dark dark:text-travel-purple-light mb-6 leading-tight drop-shadow-lg dark:glow-heading">
              Destinations
            </h1>
            <p className="font-inter text-[32px] font-bold italic text-travel-purple-dark dark:text-travel-purple-light mb-8">
              Explore our most popular destinations
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-200 shadow-md ${selectedCategory === category
                    ? 'bg-travel-blue-light dark:bg-travel-purple-dark text-white'
                    : 'bg-white/80 dark:bg-gray-900/80 text-travel-blue-dark dark:text-travel-blue-light hover:bg-travel-blue-light dark:hover:bg-travel-purple-dark hover:text-white'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1422px] mx-auto animate-fade-in">
            {loading
              ? Array.from({ length: 6 }).map((_, idx) => <DestinationCardSkeleton key={idx} />)
              : filteredDestinations.map((destination) => (
                <div
                  key={destination.id}
                  className="group cursor-pointer overflow-hidden rounded-2xl shadow-xl border border-travel-blue-light dark:border-travel-purple-dark bg-white/80 dark:bg-gray-900/80 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-travel-purple-light dark:hover:border-travel-blue-light animate-fade-in"
                >
                  <div className="relative">
                    <img
                      src={destination.image}
                      alt={destination.alt}
                      className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-travel-purple-light dark:bg-travel-purple-dark text-white px-3 py-1 rounded-full text-sm font-medium">
                      {destination.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 text-travel-blue-dark dark:text-travel-blue-light px-3 py-1 rounded-full text-sm font-bold">
                      ⭐ {destination.rating}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-inter text-xl font-bold text-travel-blue-dark dark:text-travel-blue-light mb-2">
                      {destination.name}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {destination.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="bg-travel-blue-light/20 dark:bg-travel-purple-dark/20 text-travel-blue-dark dark:text-travel-purple-light px-2 py-1 rounded-full text-xs"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Reviews */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {destination.reviews} reviews
                      </span>
                      <Link
                        to={`/destinations/${destination.id}`}
                        className="bg-gradient-to-tr from-travel-blue-light via-travel-purple-light to-travel-blue-dark dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-travel-blue-light text-white font-inter font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-200 text-sm text-center block"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* No Results Message */}
          {filteredDestinations.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-xl text-travel-purple-dark dark:text-travel-purple-light">
                No destinations found in this category. Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Destinations;