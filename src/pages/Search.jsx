import { Header } from "../components/Header.jsx";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BookingModal from "../components/ui/BookingModal.jsx";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Search() {
    const query = useQuery();
    const location = query.get("location") || "";
    // const type = query.get("type") || ""; // type is not used anymore

    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_GIST_DATA_URL}`)
            .then(res => res.json())
            .then(data => {
                setTrips(Array.isArray(data.trips) ? data.trips : []);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    const filtered = trips.filter(pkg => {
        // Try to match location in name, highlights, or description
        if (!location) return true;
        const loc = location.toLowerCase();
        return (
            (pkg.name && pkg.name.toLowerCase().includes(loc)) ||
            (pkg.highlights && pkg.highlights.some(h => h.toLowerCase().includes(loc))) ||
            (pkg.description && pkg.description.toLowerCase().includes(loc))
        );
    });

    const handleBookNow = (pkg) => {
        setSelectedPackage(pkg);
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
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="font-passion text-[56px] md:text-[72px] font-normal text-travel-blue-dark dark:text-travel-purple-light leading-tight drop-shadow-lg dark:glow-heading mb-4">
                            Search Results
                        </h1>
                        <p className="text-xl md:text-2xl text-travel-purple-dark dark:text-travel-purple-light">
                            {location && <span>Location: <b>{location}</b></span>}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                        {loading ? (
                            <div className="col-span-full text-center text-xl text-travel-purple-dark dark:text-travel-purple-light">
                                Loading...
                            </div>
                        ) : filtered.length === 0 ? (
                            <div className="col-span-full text-center text-xl text-travel-purple-dark dark:text-travel-purple-light">
                                No trips found for your search.
                            </div>
                        ) : filtered.map(pkg => (
                            <div key={pkg.id} className="rounded-2xl shadow-xl border border-travel-blue-light dark:border-travel-purple-dark bg-white/80 dark:bg-gray-900/80 p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in">
                                {pkg.images && pkg.images.length > 0 && (
                                    <img src={pkg.images[0]} alt={pkg.name} className="w-full h-[200px] object-cover rounded-xl mb-4" />
                                )}
                                <h2 className="font-inter text-2xl font-bold text-travel-blue-dark dark:text-travel-blue-light mb-2">
                                    {pkg.name}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-2">
                                    {pkg.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-2 justify-center">
                                    {pkg.highlights && pkg.highlights.map((h, i) => (
                                        <span key={i} className="bg-travel-blue-light/20 dark:bg-travel-purple-dark/20 text-travel-blue-dark dark:text-travel-purple-light px-2 py-1 rounded-full text-xs">
                                            {h}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between w-full text-sm mb-2">
                                    <span className="text-gray-600 dark:text-gray-300">⏱️ {pkg.duration}</span>
                                    <span className="text-gray-600 dark:text-gray-300">🏃 {pkg.difficulty}</span>
                                    <span className="text-gray-600 dark:text-gray-300">{pkg.price}</span>
                                </div>
                                <button className="w-full bg-gradient-to-tr from-travel-blue-light via-travel-purple-light to-travel-blue-dark dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-travel-blue-light text-white font-inter font-semibold py-3 rounded-xl hover:opacity-90 transition-all duration-200 shadow-md mt-2" onClick={() => handleBookNow(pkg)}>
                                    Book Now
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/" className="text-travel-blue-dark dark:text-travel-purple-light underline font-semibold">
                            ← Back to Home
                        </Link>
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