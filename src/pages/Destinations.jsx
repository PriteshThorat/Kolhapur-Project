import { Header } from "../components/Header.jsx";
import { useState } from "react";

const destinations = [
  {
    id: 1,
    name: "Mahalakshmi Temple",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4608ca5c82662bf85f236fa77f5522ce3a483fd?width=900",
    alt: "Mahalakshmi Temple",
    category: "Temples",
    description: "The sacred Mahalakshmi Temple, known as 'Dakshin Kashi', is the heart of Kolhapur's spiritual heritage.",
    highlights: ["Sacred Temple", "Cultural Heritage", "Local Markets"],
    rating: 4.9,
    reviews: 203
  },
  {
    id: 2,
    name: "Panhala Fort",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7378bc1f4ded6ec99d5ec7e39bca559e9f0fa61a?width=900",
    alt: "Panhala Fort",
    category: "Forts",
    description: "Historic Panhala Fort offers breathtaking views of the Sahyadri mountains and rich Maratha history.",
    highlights: ["Historical Fort", "Panoramic Views", "Adventure Trek"],
    rating: 4.7,
    reviews: 94
  },
  {
    id: 3,
    name: "Rankala Lake",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fb25d5d59278e92e0cc30cdf5e47418db125b04?width=900",
    alt: "Rankala Lake",
    category: "Lakes",
    description: "Serene Rankala Lake is perfect for boating, sunset views, and enjoying local street food.",
    highlights: ["Boating", "Sunset Views", "Local Food"],
    rating: 4.6,
    reviews: 89
  },
  {
    id: 4,
    name: "The New Palace Museum",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/55ce703ca04b2077c33a4d7b8a0e8e88ae0ff1de?width=900",
    alt: "The New Palace Museum",
    category: "Museums",
    description: "Explore the magnificent New Palace Museum showcasing Indo-Saracenic architecture and royal artifacts.",
    highlights: ["Royal Architecture", "Historical Artifacts", "Photo Opportunities"],
    rating: 4.8,
    reviews: 127
  },
  {
    id: 5,
    name: "Jyotiba Temple",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/dade6f256796581027514403d5b5bc657495964e?width=900",
    alt: "Jyotiba Temple",
    category: "Temples",
    description: "Sacred Jyotiba Temple, one of the most important pilgrimage sites in Maharashtra.",
    highlights: ["Spiritual Experience", "Mountain Views", "Traditional Rituals"],
    rating: 4.9,
    reviews: 156
  },
  {
    id: 6,
    name: "Kolhapuri Chappal Market",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7844855bc9ea2dad1304cb9bbed14d7e5167cb54?width=900",
    alt: "Kolhapuri Chappal Market",
    category: "Shopping",
    description: "Famous Kolhapuri chappal market where you can buy authentic handcrafted leather footwear.",
    highlights: ["Handicrafts", "Local Artisans", "Traditional Footwear"],
    rating: 4.5,
    reviews: 67
  },
];

const categories = ["All", "Temples", "Forts", "Lakes", "Museums", "Shopping"];

export default function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
            {filteredDestinations.map((destination) => (
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
                    <button className="bg-gradient-to-tr from-travel-blue-light via-travel-purple-light to-travel-blue-dark dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-travel-blue-light text-white font-inter font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-200 text-sm">
                      Learn More
                    </button>
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
