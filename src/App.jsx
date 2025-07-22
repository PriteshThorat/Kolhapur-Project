import "./global.css";

import { initTheme } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster.jsx";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner.jsx";
import { TooltipProvider } from "@/components/ui/tooltip.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Destinations from "./pages/Destinations.jsx";
import Trips from "./pages/Trips.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Explore from "./pages/Explore.jsx";
import Contact from "./pages/Contact.jsx";
import TripTypes from "./pages/TripTypes.jsx";
import TripType from "./pages/TripType.jsx";
import Search from "./pages/Search.jsx";
import DestinationDetails from "./pages/DestinationDetails.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trip-types" element={<TripTypes />} />
          <Route path="/trip-types/:type" element={<TripType />} />
          <Route path="/search" element={<Search />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

initTheme();
createRoot(document.getElementById("root")).render(<App />);
