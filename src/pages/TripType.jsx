import { Header } from "../components/Header.jsx";
import { useParams, Link } from "react-router-dom";

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

export default function TripType() {
    const { type } = useParams();
    const filtered = tourPackages.filter(pkg => pkg.category.toLowerCase() === type.toLowerCase());

    return (
        <div className="min-h-screen bg-gradient-to-br from-travel-blue-light via-travel-purple-light to-white dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-gray-900 transition-colors duration-500">
            <Header />
            <main className="pt-16 pb-16">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="font-passion text-[56px] md:text-[72px] font-normal text-travel-blue-dark dark:text-travel-purple-light leading-tight drop-shadow-lg dark:glow-heading mb-4">
                            {type} Trips
                        </h1>
                        <p className="text-xl md:text-2xl text-travel-purple-dark dark:text-travel-purple-light">
                            Explore the best {type.toLowerCase()} experiences in Kolhapur
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                        {filtered.length === 0 && (
                            <div className="col-span-full text-center text-xl text-travel-purple-dark dark:text-travel-purple-light">
                                No trips found for this type.
                            </div>
                        )}
                        {filtered.map(pkg => (
                            <div key={pkg.id} className="rounded-2xl shadow-xl border border-travel-blue-light dark:border-travel-purple-dark bg-white/80 dark:bg-gray-900/80 p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in">
                                <img src={pkg.image} alt={pkg.name} className="w-full h-[200px] object-cover rounded-xl mb-4" />
                                <h2 className="font-inter text-2xl font-bold text-travel-blue-dark dark:text-travel-blue-light mb-2">
                                    {pkg.name}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-2">
                                    {pkg.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-2 justify-center">
                                    {pkg.highlights.map((h, i) => (
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
                                <button className="w-full bg-gradient-to-tr from-travel-blue-light via-travel-purple-light to-travel-blue-dark dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-travel-blue-light text-white font-inter font-semibold py-3 rounded-xl hover:opacity-90 transition-all duration-200 shadow-md mt-2">
                                    Book Now
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/trip-types" className="text-travel-blue-dark dark:text-travel-purple-light underline font-semibold">
                            ← Back to Trip Types
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
} 