import { Header } from "../components/Header.jsx";
import { Link } from "react-router-dom";

const featured = [
    {
        id: 1,
        name: "The New Palace Museum",
        image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e4608ca5c82662bf85f236fa77f5522ce3a483fd?width=900",
        link: "/trips",
    },
    {
        id: 2,
        name: "Rankala Lake",
        image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/2fb25d5d59278e92e0cc30cdf5e47418db125b04?width=900",
        link: "/trips",
    },
    {
        id: 3,
        name: "The Jyotiba Temple",
        image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/55ce703ca04b2077c33a4d7b8a0e8e88ae0ff1de?width=900",
        link: "/trips",
    },
];

export default function Explore() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-travel-blue-light via-travel-purple-light to-white dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-gray-900 transition-colors duration-500">
            <Header />
            <main className="pt-16 pb-16">
                <div className="max-w-screen-xl mx-auto px-4">
                    {/* Hero Section */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="font-passion text-[56px] md:text-[72px] font-normal text-travel-blue-dark dark:text-travel-purple-light leading-tight drop-shadow-lg dark:glow-heading mb-4">
                            Welcome to Kolhapur Explorer
                        </h1>
                        <p className="text-xl md:text-2xl text-travel-purple-dark dark:text-travel-purple-light mb-8">
                            Discover the best of Kolhapur! Start your journey with our featured destinations.
                        </p>
                    </div>

                    {/* Featured Destinations */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                        {featured.map((item) => (
                            <Link
                                to={item.link}
                                key={item.id}
                                className="group cursor-pointer overflow-hidden rounded-2xl shadow-xl border border-travel-blue-light dark:border-travel-purple-dark bg-white/80 dark:bg-gray-900/80 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-travel-purple-light dark:hover:border-travel-blue-light animate-fade-in"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-[280px] object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="p-4 text-center">
                                    <span className="font-inter text-lg text-travel-blue-dark dark:text-travel-blue-light font-semibold">
                                        {item.name}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
} 