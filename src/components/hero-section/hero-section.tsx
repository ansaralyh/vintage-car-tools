import { Car } from "lucide-react";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative h-screen w-full flex items-center justify-center bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/Rectangle 2.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white font-extrabold">
          Discover the City in <br />
          Style
        </h1>

        <p className="text-lg md:text-2xl text-white mb-8">
          Ride through history in a classic car
        </p>

        <button className="bg-[#621B1F] hover:bg-[#372021] flex items-center justify-center mx-auto gap-2 text-white px-6 py-3 rounded-md font-medium text-lg transition duration-300">
          <Car />
          Book a Tour
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
