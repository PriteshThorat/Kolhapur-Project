import { Header } from "../components/Header.jsx";

const destinations = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e4608ca5c82662bf85f236fa77f5522ce3a483fd?width=900",
    alt: "Ancient Temple",
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7378bc1f4ded6ec99d5ec7e39bca559e9f0fa61a?width=900",
    alt: "Mountain Landscape",
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2fb25d5d59278e92e0cc30cdf5e47418db125b04?width=900",
    alt: "Modern Architecture",
  },
  {
    id: 4,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/55ce703ca04b2077c33a4d7b8a0e8e88ae0ff1de?width=900",
    alt: "Palace Complex",
  },
  {
    id: 5,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dade6f256796581027514403d5b5bc657495964e?width=900",
    alt: "Sunset Lake View",
  },
  {
    id: 6,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7844855bc9ea2dad1304cb9bbed14d7e5167cb54?width=900",
    alt: "Rocky Terrain",
  },
];

export default function Destinations() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16 pb-16">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="font-inter text-[64px] font-bold italic text-black mb-6 leading-tight">
              Destinations
            </h1>
            <p className="font-inter text-[32px] font-bold italic text-black">
              Explore our most popular destinations
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1422px] mx-auto">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="group cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={destination.image}
                  alt={destination.alt}
                  className="w-full h-[380px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
