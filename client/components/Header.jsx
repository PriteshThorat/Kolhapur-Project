import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-traverse-header px-4 py-1">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1df842607b032ce66debbd7f7280c0fc0d344658?width=500"
            alt="TRAVERSE"
            className="w-[250px] h-[69px] object-contain"
          />
        </Link>

        <nav className="flex items-center gap-8 px-12">
          <Link
            to="/destinations"
            className={cn(
              "font-tinos text-[32px] font-normal text-black px-2.5 py-2.5 hover:opacity-70 transition-opacity",
              isActive("/destinations") && "opacity-70",
            )}
          >
            Destination
          </Link>
          <Link
            to="/trips"
            className={cn(
              "font-tinos text-[32px] font-normal text-black px-2.5 py-2.5 hover:opacity-70 transition-opacity",
              isActive("/trips") && "opacity-70",
            )}
          >
            Trips
          </Link>
          <Link
            to="/about"
            className={cn(
              "font-tinos text-[32px] font-normal text-black px-2.5 py-2.5 hover:opacity-70 transition-opacity",
              isActive("/about") && "opacity-70",
            )}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};
