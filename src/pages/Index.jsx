import { Header } from "../components/Header.jsx";

export default function Index() {
  return (
      <div className="min-h-screen bg-white">
        <Header />
  
        {/* Hero Section */}
        <div
          className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/3f9d07cfc468b7034996b1e74ceef706e47f2ff9?width=2880')`,
            backgroundColor: "lightgray",
          }}
        >
          {/* Main Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-white font-irish-grover font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[128px] leading-normal">
              EXPLORE THE
              <br />
              KOLHAPUR
            </h1>
          </div>
  
          {/* Let's Go Button */}
          <div className="mb-16 md:mb-20">
            <button
              className="bg-[#848CD9] hover:bg-[#7379d1] transition-colors duration-200 rounded-[20px] px-8 py-6 md:px-12 md:py-8"
              aria-label="Start exploring Kolhapur"
            >
              <span className="text-black font-tienne text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-normal">
                Let's Go
              </span>
            </button>
          </div>
  
          {/* Search Form */}
          <div className="w-full max-w-6xl mx-auto">
            <div
              className="bg-cover bg-center bg-no-repeat rounded-[20px] p-6 md:p-8 lg:p-12 mx-4"
              style={{
                backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/8ca5a41a79cd59ca2c1fc4785084caad01afb0b4?width=2376')`,
              }}
            >
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
                {/* Location Input */}
                <div className="flex-1 bg-white rounded-[10px] p-4 flex items-center gap-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e83a3536730e0470b76b4c8d6d188805cd8f11e?width=124"
                    alt="Location icon"
                    className="w-8 h-8 md:w-12 md:h-12 flex-shrink-0"
                  />
                  <input
                    type="text"
                    placeholder="Where did you want to go?"
                    className="flex-1 text-black font-tinos text-lg md:text-2xl lg:text-[32px] bg-transparent border-none outline-none placeholder-black"
                  />
                </div>
  
                {/* Trip Type Dropdown */}
                <div className="lg:w-80 bg-white rounded-[10px] p-4 flex items-center justify-between">
                  <span className="text-black font-tinos text-lg md:text-2xl lg:text-[32px]">
                    Trip type
                  </span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0343ab1dd5316b51154bf64b6fd1c6c1d9a2f57d?width=146"
                    alt="Dropdown arrow"
                    className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"
                  />
                </div>
  
                {/* Search Button */}
                <button className="lg:w-48 bg-[#312121] hover:bg-[#4a2d2d] transition-colors duration-200 rounded-[10px] p-4 flex items-center justify-center">
                  <span className="text-white font-istok-web font-normal text-lg md:text-2xl lg:text-[32px]">
                    Search
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}