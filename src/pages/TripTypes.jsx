import { Header } from "../components/Header.jsx";
import { Link } from "react-router-dom";

const companionTypes = [
    {
        name: "Solo Trip",
        icon: "🧑‍🦯",
        description: "Independence, self-reflection, flexible plans.",
        query: "solo"
    },
    {
        name: "Couple Trip",
        icon: "👩‍❤️‍👨",
        description: "Bonding, romantic getaways, shared experiences.",
        query: "couple"
    },
    {
        name: "Family Trip",
        icon: "👨‍👩‍👧‍👦",
        description: "Activities for all ages, slower pace, kid-friendly.",
        query: "family"
    },
    {
        name: "Friends Trip",
        icon: "🧑‍🤝‍🧑",
        description: "Shared adventures, nightlife, budget splitting.",
        query: "friends"
    },
    {
        name: "Group/Community Trip",
        icon: "👥",
        description: "Group tours, retreats, mission trips.",
        query: "group"
    },
];

export default function TripTypes() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-travel-blue-light via-travel-purple-light to-white dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-gray-900 transition-colors duration-500">
            <Header />
            <main className="pt-16 pb-16">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="font-passion text-[56px] md:text-[72px] font-normal text-travel-blue-dark dark:text-travel-purple-light leading-tight drop-shadow-lg dark:glow-heading mb-4">
                            Types of Trips to Choose From
                        </h1>
                        <p className="text-xl md:text-2xl text-travel-purple-dark dark:text-travel-purple-light">
                            Find the perfect trip for your travel style and companions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                        {companionTypes.map((type) => (
                            <Link
                                key={type.name}
                                to={`/search?companion=${type.query}`}
                                className="rounded-2xl shadow-xl border border-travel-blue-light dark:border-travel-purple-dark bg-white/80 dark:bg-gray-900/80 p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
                            >
                                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-travel-blue-light to-travel-purple-light dark:from-travel-blue-dark dark:to-travel-purple-dark text-white text-4xl mb-6 shadow-lg">
                                    {type.icon}
                                </div>
                                <h2 className="font-inter text-2xl font-bold text-travel-blue-dark dark:text-travel-blue-light mb-2">
                                    {type.name}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-2">
                                    {type.description}
                                </p>
                                <span className="text-travel-purple-dark dark:text-travel-purple-light font-semibold mt-2 underline">View Trips</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
} 