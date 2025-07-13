import { Header } from "../components/Header.jsx";

const destinations = [
  {
    id: 1,
    name: "The New Palace Museum",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e4608ca5c82662bf85f236fa77f5522ce3a483fd?width=900",
  },
  {
    id: 2,
    name: "Rankala Lake",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2fb25d5d59278e92e0cc30cdf5e47418db125b04?width=900",
  },
  {
    id: 3,
    name: "The Jyotiba Temple",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/55ce703ca04b2077c33a4d7b8a0e8e88ae0ff1de?width=900",
  },
  {
    id: 4,
    name: "Panhala Fort",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7844855bc9ea2dad1304cb9bbed14d7e5167cb54?width=900",
  },
];

export default function Trips() {
  return (
    <div className="min-h-screen bg-traverse-rose">
      <Header />

      <main className="flex justify-center items-center min-h-[calc(100vh-73px)] p-4">
        <div className="max-w-screen-xl mx-auto px-4">
      
          <div className="text-center mb-8">
            <h1 className="font-inter text-[40px] md:text-[48px] font-bold text-black mb-4 leading-tight">
              Plan Your Next Trip
            </h1>
            <p className="font-inter text-[18px] md:text-[20px] font-medium text-black">
              Find curated trips for your next adventure.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {destinations.map((destination) => (
              <div key={destination.id} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-[20px] mb-3">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-inter text-[16px] md:text-[18px] font-bold text-black text-center leading-tight">
                  {destination.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}