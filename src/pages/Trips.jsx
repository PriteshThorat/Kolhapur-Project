import { Header } from "../components/Header.jsx";
import { Link } from "react-router-dom";
import Slideshow from "../components/ui/Slideshow.jsx";
import BookingModal from "../components/ui/BookingModal.jsx";
import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { TripCardSkeleton } from "../Skeletons/index.js";

const Trips = () => {
  const [tourPackages, setTourPackages] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [loading, setLoading] = useState(true);
  // Removed categories and selectedCategory state

  useEffect(() => {
    fetch(`${import.meta.env.VITE_GIST_DATA_URL}`)
      .then(res => res.json())
      .then(data => {
        setTourPackages(Array.isArray(data.trips) ? data.trips : []);
        setTestimonials(Array.isArray(data.testimonials) ? data.testimonials : []);
        setLoading(false);
        // Removed category extraction
      })
      .catch(err => {
        console.log(err)
        setLoading(false);
      })
  }, [])

  // Removed filteredTourPackages

  const handleBookNow = (tourPackage) => {
    setSelectedPackage(tourPackage);
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
    setSelectedPackage(null);
  };

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
            {/* Removed Category Filter */}
          </div>

          {/* Tour Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-fade-in">
            {loading
              ? Array.from({ length: 6 }).map((_, idx) => <TripCardSkeleton key={idx} />)
              : tourPackages.map((ptourPackage) => (
                <div key={ptourPackage.id} className="group cursor-pointer">
                  <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl border border-travel-blue-light dark:border-travel-purple-dark overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-travel-purple-light dark:hover:border-travel-blue-light animate-fade-in">
                    {/* Image */}
                    <div className="relative">
                      <Slideshow images={ptourPackage.images} alt={ptourPackage.name} />
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
                      <button
                        onClick={() => handleBookNow(ptourPackage)}
                        className="w-full bg-gradient-to-tr from-travel-blue-light via-travel-purple-light to-travel-blue-dark dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-travel-blue-light text-white font-inter font-semibold py-3 rounded-xl hover:opacity-90 transition-all duration-200 shadow-md"
                      >
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
              {loading
                ? Array.from({ length: 3 }).map((_, idx) => (
                  <div key={idx} className="bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 shadow-xl border border-travel-blue-light dark:border-travel-purple-dark">
                    <div className="flex items-center mb-4">
                      <Skeleton circle height={48} width={48} style={{ marginRight: 16 }} />
                      <div>
                        <Skeleton height={20} width={100} />
                        <Skeleton height={16} width={80} />
                      </div>
                    </div>
                    <Skeleton count={2} height={16} />
                  </div>
                ))
                : testimonials.map((testimonial) => (
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
                <a
                  href="https://wa.me/123456789"
                  className="bg-green-500 hover:bg-green-600 text-white font-inter font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md">
                  📱 WhatsApp Us
                </a>
                <a
                  href="tel:+91123456789"
                  className="bg-travel-blue-dark dark:bg-travel-purple-dark hover:opacity-90 text-white font-inter font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md">
                  📞 Call Now
                </a>
                <a
                  to="/contact"
                  href="mailto:someone@example.com"
                  className="bg-white dark:bg-gray-800 border-2 border-travel-blue-dark dark:border-travel-purple-dark text-travel-blue-dark dark:text-travel-purple-light font-inter font-semibold px-6 py-3 rounded-xl hover:bg-travel-blue-light dark:hover:bg-travel-purple-dark hover:text-white transition-all duration-200 shadow-md"
                >
                  📧 Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseModal}
        tourPackage={selectedPackage}
      />
    </div>
  );
}

export default Trips;