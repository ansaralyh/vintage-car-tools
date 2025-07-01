import React from 'react';

const PopularTours: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-start mb-12" style={{ color: '#6A1B1A' }}>
          Popular Tours
        </h2>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tour 1 */}
         <div className="bg-[#FDF5E6] rounded-lg overflow-hidden transition-shadow duration-300 custom-tour-shadow hover:shadow-lg">

            <div className="h-48 bg-gray-200">
              {/* Replace with your tour image */}
              <img 
                src="/images/The Royal Route.png" 
                alt="The Royal Route"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">The Royal Route</h3>
              <p className="text-gray-600 mb-4">Visit historic landmarks and royal routes in style.</p>
              <a 
                href="#" 
                className="inline-flex items-center font-medium" 
                style={{ color: '#6A1B1A' }}
              >
                View Details →
              </a>
            </div>
          </div>

          {/* Tour 2 */}
         <div className="bg-[#FDF5E6] rounded-lg overflow-hidden transition-shadow duration-300 custom-tour-shadow hover:shadow-lg">

            <div className="h-48 bg-gray-200">
              {/* Replace with your tour image */}
              <img 
                src="/images/Sunset Drive.png" 
                alt="Sunset Drive"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Sunset Drive</h3>
              <p className="text-gray-600 mb-4">Cruise through the city at golden hour.</p>
              <a 
                href="#" 
                className="inline-flex items-center font-medium" 
                style={{ color: '#6A1B1A' }}
              >
                View Details →
              </a>
            </div>
          </div>

          {/* Tour 3 */}
          <div className="bg-[#FDF5E6] rounded-lg overflow-hidden transition-shadow duration-300 custom-tour-shadow hover:shadow-lg">

            <div className="h-48 bg-gray-200">
              {/* Replace with your tour image */}
              <img 
                src="/images/Heritage Explorer.png" 
                alt="Heritage Explorer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Heritage Explorer</h3>
              <p className="text-gray-600 mb-4">Discover hidden gems and vintage vibes.</p>
              <a 
                href="#" 
                className="inline-flex items-center font-medium" 
                style={{ color: '#6A1B1A' }}
              >
                View Details →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularTours;