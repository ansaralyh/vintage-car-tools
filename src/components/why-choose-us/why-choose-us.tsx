import { Car, Clock, User } from "lucide-react";
import React from "react";

const WhyChooseUs: React.FC = () => {
  return (
    <section
      className="why-gradient-bg py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(270.23deg, #FDF5E6 0.3%, rgba(231, 231, 231, 0) 97.69%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Image */}
          <div className="md:w-1/2 w-full">
            <img
              src="/images/illustrasi.png"
              alt="Vintage Car"
              className="w-full h-auto rounded-lg object-cover min-h-[300px] md:min-h-[400px]"
            />
          </div>

          {/* Right Column - Heading + Features */}
          <div className="md:w-1/2 w-full">
            {/* Left-aligned Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#6A1B1A] text-left">
              Why Choose Vintage Car Tours?
            </h2>

            <div className="space-y-4">
              {/* Feature 1 */}
              <div className="mt-1 flex items-center justify-center p-4 w-[64px] h-[64px] rounded-full text-[#f6bf0933] bg-[#D4AF3733]">
                <Car size={32} />
              </div>
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-xl text-[#6A1B1A] font-bold mb-1">
                    Unique Classic Cars
                  </h3>
                  <p className="text-[#333333]">
                    Enjoy our collection of beautifully restored vintage
                    vehicles.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="mt-1 flex items-center justify-center p-4 w-[64px] h-[64px] rounded-full text-[#f6bf0933] bg-[#D4AF3733]">
                <User size={32} />
              </div>
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-xl text-[#6A1B1A] font-bold mb-1">
                    Experienced Local Guides
                  </h3>
                  <p className="text-[#333333]">
                    Our friendly drivers know the city's best kept secrets.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="mt-1 flex items-center justify-center p-4 w-[64px] h-[64px] rounded-full text-[#f6bf0933] bg-[#D4AF3733]">
                <Clock size={32} />
              </div>
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-xl text-[#6A1B1A] font-bold mb-1">
                    Flexible Booking Times
                  </h3>
                  <p className="text-[#333333]">
                    Choose a tour time that fits your schedule perfectly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
