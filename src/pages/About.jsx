import { Header } from "../components/Header.jsx";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-travel-blue-light via-travel-purple-light to-white dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-gray-900 transition-colors duration-500">
      <Header />

      <main className="pt-16 pb-16">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-passion text-[64px] font-normal text-travel-blue-dark dark:text-travel-purple-light leading-tight drop-shadow-lg dark:glow-heading">
              About
            </h1>
          </div>

          {/* Content Layout */}
          <div className="relative max-w-7xl mx-auto">
            {/* First Paragraph */}
            <div className="mb-8 px-4 lg:px-24">
              <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 animate-fade-in">
                <p className="font-handlee text-[36px] font-normal text-travel-purple-dark dark:text-travel-purple-light leading-relaxed">
                  <span className="text-[48px] text-travel-blue-dark dark:text-travel-blue-light">K</span>olhapur district, nestled
                  in the southwestern part of Maharashtra, is a vibrant blend of
                  heritage, nature, and enterprise. Surrounded by the Sahyadri
                  hills and nourished by the Panchganga River, it boasts lush
                  landscapes and a pleasant climate year-round. Historically, it
                  was a princely state under the visionary rule of Chhatrapati
                  Shahu Maharaj, who championed education and social reform. The
                  district is revered for its spiritual significance, particularly
                  the Mahalakshmi Temple, earning it the title "Dakshin Kashi."
                  With a diverse cultural tapestry that includes Marathi theatre,
                  traditional wrestling, and regional cuisine, Kolhapur is a hub
                  of artistic and social expression.
                </p>
              </div>
            </div>

            {/* Second Section with Map */}
            <div className="flex flex-col lg:flex-row gap-8 items-start animate-fade-in">
              {/* Left Column - Text */}
              <div className="lg:w-1/2 px-4 lg:px-24">
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 h-full flex items-center">
                  <p className="font-handlee text-[36px] font-normal text-travel-purple-dark dark:text-travel-purple-light leading-relaxed">
                    Its economy is powered by agro-based industries, sugar mills,
                    foundries, and the iconic Kolhapuri chappals and jewelry. With
                    a literacy rate above 80%, Kolhapur stands out for its
                    entrepreneurial spirit and community pride. Whether you're
                    exploring Rankala Lake, hiking to Panhala Fort, or uncovering
                    the folklore behind Jyotiba Temple, Kolhapur offers a
                    captivating experience that blends tradition with modern-day
                    vitality.
                  </p>
                </div>
              </div>

              {/* Right Column - Map */}
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-4 animate-fade-in">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c8bba4c05b40cea426bd0f89e24042cfa889f0a?width=1100"
                    alt="Kolhapur Maharashtra Map"
                    className="w-full max-w-[550px] h-auto object-contain rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
