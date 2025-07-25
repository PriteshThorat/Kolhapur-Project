import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "../components/Header.jsx";

export default function DestinationDetails() {
    const { id } = useParams();
    const [destination, setDestination] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_GIST_DATA_URL}`)
            .then(res => res.json())
            .then(data => {
                const found = (data.destinations || []).find(dest => String(dest.id) === String(id));
                if (found) {
                    setDestination(found);
                    setNotFound(false);
                } else {
                    setNotFound(true);
                }
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                setNotFound(true);
            });
    }, [id]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-travel-blue-light via-travel-purple-light to-white dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-gray-900 transition-colors duration-500">
            <Header />
            <main className="pt-24 pb-16 relative z-10">
                <div className="max-w-screen-md mx-auto px-4">
                    {loading ? (
                        <div className="text-center text-xl text-travel-purple-dark dark:text-travel-purple-light py-24">Loading...</div>
                    ) : notFound ? (
                        <div className="text-center text-xl text-travel-purple-dark dark:text-travel-purple-light py-24">Destination not found.</div>
                    ) : (
                        <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl border border-travel-blue-light dark:border-travel-purple-dark p-8 animate-fade-in">
                            <Link to="/destinations" className="text-travel-blue-dark dark:text-travel-purple-light underline font-semibold mb-4 inline-block">← Back to Destinations</Link>
                            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                                <img
                                    src={destination.image}
                                    alt={destination.alt || destination.name}
                                    className="w-full md:w-1/2 h-[300px] object-cover rounded-2xl shadow-md mb-4 md:mb-0"
                                />
                                <div className="flex-1">
                                    <h1 className="font-inter text-3xl font-bold text-travel-blue-dark dark:text-travel-blue-light mb-2">
                                        {destination.name}
                                    </h1>
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="bg-travel-purple-light dark:bg-travel-purple-dark text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {destination.category}
                                        </span>
                                        <span className="bg-white/90 dark:bg-gray-900/90 text-travel-blue-dark dark:text-travel-blue-light px-3 py-1 rounded-full text-sm font-bold">
                                            ⭐ {destination.rating} ({destination.reviews} reviews)
                                        </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {destination.description}
                                    </p>
                                    <div className="mb-2">
                                        <h4 className="font-inter font-semibold text-travel-purple-dark dark:text-travel-purple-light mb-1">
                                            Highlights:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {destination.highlights && destination.highlights.map((highlight, i) => (
                                                <span key={i} className="bg-travel-blue-light/20 dark:bg-travel-purple-dark/20 text-travel-blue-dark dark:text-travel-purple-light px-2 py-1 rounded-full text-xs">
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
} 