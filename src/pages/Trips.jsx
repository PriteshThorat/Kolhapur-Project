import { Header } from "../components/Header.jsx";
import { Link } from "react-router-dom";

const tourPackages = [
  {
    id: 1,
    name: "The New Palace Museum",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4608ca5c82662bf85f236fa77f5522ce3a483fd?width=900",
    duration: "3-4 hours",
    difficulty: "Easy",
    price: "₹500",
    highlights: ["Royal Architecture", "Historical Artifacts", "Photo Opportunities"],
    description: "Explore the magnificent New Palace Museum, a stunning example of Indo-Saracenic architecture.",
    rating: 4.8,
    reviews: 127,
    category: "Heritage"
  },
  {
    id: 2,
    name: "Rankala Lake",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fb25d5d59278e92e0cc30cdf5e47418db125b04?width=900",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "₹300",
    highlights: ["Boating", "Sunset Views", "Local Food"],
    description: "Experience the serene beauty of Rankala Lake with boating and stunning sunset views.",
    rating: 4.6,
    reviews: 89,
    category: "Nature"
  },
  {
    id: 3,
    name: "The Jyotiba Temple",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/55ce703ca04b2077c33a4d7b8a0e8e88ae0ff1de?width=900",
    duration: "4-5 hours",
    difficulty: "Moderate",
    price: "₹400",
    highlights: ["Spiritual Experience", "Mountain Views", "Traditional Rituals"],
    description: "Visit the sacred Jyotiba Temple, one of the most important pilgrimage sites in Maharashtra.",
    rating: 4.9,
    reviews: 156,
    category: "Spiritual"
  },
  {
    id: 4,
    name: "Panhala Fort",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7844855bc9ea2dad1304cb9bbed14d7e5167cb54?width=900",
    duration: "5-6 hours",
    difficulty: "Moderate",
    price: "₹600",
    highlights: ["Historical Fort", "Panoramic Views", "Adventure Trek"],
    description: "Discover the historic Panhala Fort with breathtaking views of the Sahyadri mountains.",
    rating: 4.7,
    reviews: 94,
    category: "Adventure"
  },
  {
    id: 5,
    name: "Mahalakshmi Temple",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4608ca5c82662bf85f236fa77f5522ce3a483fd?width=900",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "₹200",
    highlights: ["Sacred Temple", "Cultural Heritage", "Local Markets"],
    description: "Pay homage at the revered Mahalakshmi Temple, the heart of Kolhapur's spiritual heritage.",
    rating: 4.9,
    reviews: 203,
    category: "Spiritual"
  },
  {
    id: 6,
    name: "Kolhapuri Chappal Workshop",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fb25d5d59278e92e0cc30cdf5e47418db125b04?width=900",
    duration: "3-4 hours",
    difficulty: "Easy",
    price: "₹800",
    highlights: ["Handicraft Workshop", "Local Artisans", "Custom Orders"],
    description: "Learn the art of making traditional Kolhapuri chappals from skilled local artisans.",
    rating: 4.5,
    reviews: 67,
    category: "Cultural"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    comment: "Amazing experience! The Panhala Fort tour was breathtaking. Our guide was knowledgeable and friendly.",
    avatar: "👩‍🦰"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    rating: 5,
    comment: "The Mahalakshmi Temple visit was spiritually uplifting. Highly recommend for anyone visiting Kolhapur.",
    avatar: "👨‍🦱"
  },
  {
    id: 3,
    name: "Meera Patel",
    rating: 4,
    comment: "Rankala Lake at sunset was magical! Perfect for families and photography enthusiasts.",
    avatar: "👩‍🦳"
  }
];

const categories = ["All", "Heritage", "Nature", "Spiritual", "Adventure", "Cultural"];

export default function Trips() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-travel-blue-light via-travel-purple-light to-white dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-gray-900 transition-colors duration-500">
      <Header />

      <main className="pt-16 pb-16">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-inter text-[40px] md:text-[48px] font-bold text-travel-blue-dark dark:text-travel-purple-light mb-4 leading-tight drop-shadow-lg dark:glow-heading">
              Plan Your Next Trip
            </h1>
            <p className="font-inter text-[18px] md:text-[20px] font-medium text-travel-purple-dark dark:text-travel-purple-light mb-8">
              Choose from our curated collection of Kolhapur experiences
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 rounded-full bg-white/80 dark:bg-gray-900/80 text-travel-blue-dark dark:text-travel-blue-light font-inter font-medium hover:bg-travel-blue-light dark:hover:bg-travel-purple-dark hover:text-white transition-all duration-200 shadow-md"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tour Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-fade-in">
            {tourPackages.map((ptourPackage) => (
              <div key={ptourPackage.id} className="group cursor-pointer">
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl border border-travel-blue-light dark:border-travel-purple-dark overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-travel-purple-light dark:hover:border-travel-blue-light animate-fade-in">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={ptourPackage.image}
                      alt={ptourPackage.name}
                      className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-travel-purple-light dark:bg-travel-purple-dark text-white px-3 py-1 rounded-full text-sm font-medium">
                      {ptourPackage.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 text-travel-blue-dark dark:text-travel-blue-light px-3 py-1 rounded-full text-sm font-bold">
                      {ptourPackage.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-inter text-xl font-bold text-travel-blue-dark dark:text-travel-blue-light mb-2">
                      {ptourPackage.name}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {ptourPackage.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(ptourPackage.rating) ? "text-yellow-400" : "text-gray-300"}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                        {ptourPackage.rating} ({ptourPackage.reviews} reviews)
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex justify-between items-center mb-4 text-sm">
                      <span className="text-gray-600 dark:text-gray-300">
                        ⏱️ {ptourPackage.duration}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        🏃 {ptourPackage.difficulty}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-inter font-semibold text-travel-purple-dark dark:text-travel-purple-light mb-2">
                        Highlights:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {ptourPackage.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="bg-travel-blue-light/20 dark:bg-travel-purple-dark/20 text-travel-blue-dark dark:text-travel-purple-light px-2 py-1 rounded-full text-xs"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Book Now Button */}
                    <button className="w-full bg-gradient-to-tr from-travel-blue-light via-travel-purple-light to-travel-blue-dark dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-travel-blue-light text-white font-inter font-semibold py-3 rounded-xl hover:opacity-90 transition-all duration-200 shadow-md">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-center font-inter text-3xl font-bold text-travel-blue-dark dark:text-travel-purple-light mb-8 dark:glow-heading">
              What Our Travelers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 shadow-xl border border-travel-blue-light dark:border-travel-purple-dark">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{testimonial.avatar}</span>
                    <div>
                      <h4 className="font-inter font-semibold text-travel-blue-dark dark:text-travel-blue-light">
                        {testimonial.name}
                      </h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{testimonial.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center animate-fade-in">
            <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl p-8 shadow-xl border border-travel-blue-light dark:border-travel-purple-dark">
              <h2 className="font-inter text-2xl font-bold text-travel-blue-dark dark:text-travel-purple-light mb-4 dark:glow-heading">
                Need Help Planning?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Contact us for custom packages and personalized recommendations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-500 hover:bg-green-600 text-white font-inter font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md">
                  📱 WhatsApp Us
                </button>
                <button className="bg-travel-blue-dark dark:bg-travel-purple-dark hover:opacity-90 text-white font-inter font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md">
                  📞 Call Now
                </button>
                <Link
                  to="/contact"
                  className="bg-white dark:bg-gray-800 border-2 border-travel-blue-dark dark:border-travel-purple-dark text-travel-blue-dark dark:text-travel-purple-light font-inter font-semibold px-6 py-3 rounded-xl hover:bg-travel-blue-light dark:hover:bg-travel-purple-dark hover:text-white transition-all duration-200 shadow-md"
                >
                  📧 Email Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}