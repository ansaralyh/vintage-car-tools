import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#D4AF371A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#6A1B1A" }}
        >
          What Our Guests Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="text-start p-6 border custom-testamonial-shadow border-gray-200 rounded-lg">
           <img src="/images/SVG.png" alt=""  className="mb-4"/>
            <p className="text-gray-600 mb-6 italic">
              "Absolutely loved the ride! It felt like traveling back in time."
            </p>
            <div className="font-medium">
              <span className="block">– Sarah J., Manchester</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="text-start bg-[#FDF5E6] p-6 border custom-testamonial-shadow border-gray-200 rounded-lg">
            <img src="/images/SVG.png" alt=""  className="mb-4"/>
            <p className="text-gray-600 mb-6 italic">
              "The car was immaculate, and the guide was incredibly
              knowledgeable."
            </p>
            <div className="font-medium">
              <span className="block">– Mark D.,London</span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="text-start p-6 border custom-testamonial-shadow border-gray-200 rounded-lg">
             <img src="/images/SVG.png" alt=""  className="mb-4"/>
            <p className="text-gray-600 mb-6 italic">
              "A must-do experience for anyone visiting the city."
            </p>
            <div className="font-medium">
              <span className="block">– Chloe T., Bristol</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
