import { Header } from "../components/Header.jsx";

export default function Trips() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="font-inter text-[64px] font-bold italic text-black mb-6 leading-tight">
            Trips
          </h1>
          <p className="font-inter text-[32px] font-bold italic text-black mb-8">
            Coming Soon
          </p>
          <p className="font-handlee text-[24px] text-gray-600">
            Curated travel experiences will be available here soon.
          </p>
        </div>
      </main>
    </div>
  );
}
