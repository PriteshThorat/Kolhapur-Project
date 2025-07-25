import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-[100] w-full backdrop-blur-md bg-white/95 dark:bg-gray-900/95 shadow-lg border-b border-gray-200/50 dark:border-gray-700/50 transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2">
        <Link to="/" className="flex-shrink-0 group relative z-20 min-w-fit">
          <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-xl border-2 border-travel-blue-light/20 dark:border-travel-purple-light/20 p-3 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:border-travel-purple-light/40 dark:hover:border-travel-blue-light/40">
            <div className="relative">
              <img
                src="/Logo.png"
                alt="Kolhapur Tourism Logo"
                className="w-[180px] md:w-[220px] h-[48px] md:h-[60px] object-contain drop-shadow-lg group-hover:scale-105 group-hover:drop-shadow-2xl transition-transform duration-200 block filter brightness-100 dark:brightness-110"
                onError={(e) => {
                  console.error('Logo failed to load, showing text fallback');
                  e.target.style.display = 'none';
                  const fallback = e.target.nextElementSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
                onLoad={(e) => {
                  const fallback = e.target.nextElementSibling;
                  if (fallback) fallback.style.display = 'none';
                }}
              />
              {/* Text Fallback */}
              <div 
                className="hidden w-[180px] md:w-[220px] h-[48px] md:h-[60px] items-center justify-center bg-gradient-to-r from-travel-blue-light to-travel-purple-light text-white rounded-lg font-passion text-lg md:text-xl font-bold tracking-wide group-hover:scale-105 transition-transform duration-200"
                style={{ display: 'none' }}
              >
                <span className="drop-shadow-lg">KOLHAPUR TOURISM</span>
              </div>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 px-8">
          {[
            { to: "/destinations", label: "Destination" },
            { to: "/trips", label: "Trips" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "font-tinos text-[22px] md:text-[28px] lg:text-[32px] font-semibold px-2.5 py-2.5 relative text-travel-blue-dark dark:text-travel-blue-light transition-colors duration-200",
                "hover:text-travel-purple-dark dark:hover:text-travel-purple-light",
                isActive(to) && "text-travel-purple-dark dark:text-travel-purple-light"
              )}
            >
              <span className="relative z-10">
                {label}
                <span
                  className={cn(
                    "block h-[3px] rounded-full transition-all duration-300 scale-x-0 bg-gradient-to-r from-travel-blue-light via-travel-purple-light to-travel-blue-dark dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-travel-blue-light absolute left-0 right-0 -bottom-1",
                    (isActive(to) ? "scale-x-100" : "group-hover:scale-x-100")
                  )}
                  style={{ width: "100%" }}
                />
              </span>
            </Link>
          ))}
        </nav>
        {/* Dark Mode Toggle with Tooltip */}
        <div className="relative group ml-2">
          <button
            onClick={() => {
              const html = document.documentElement;
              html.classList.toggle('dark');
              if (html.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
              } else {
                localStorage.setItem('theme', 'light');
              }
            }}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full bg-gradient-to-tr from-travel-blue-light via-travel-purple-light to-travel-blue-dark dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-travel-blue-light shadow-lg transition-colors duration-300 focus:outline-none flex items-center justify-center"
          >
            {/* Animated sun/moon icon */}
            <span className="relative block w-7 h-7">
              <svg
                className="absolute inset-0 w-7 h-7 text-yellow-400 transition-opacity duration-300 dark:opacity-0 opacity-100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
              </svg>
              <svg
                className="absolute inset-0 w-7 h-7 text-blue-200 transition-opacity duration-300 opacity-0 dark:opacity-100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                />
              </svg>
            </span>
          </button>
          {/* Tooltip */}
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-60 whitespace-nowrap">
            Toggle dark mode
          </span>
        </div>
      </div>
    </header>
  );
};
