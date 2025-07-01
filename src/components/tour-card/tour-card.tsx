import React from 'react';
// import { Users } from 'lucide-react'; 
import { FaUser } from 'react-icons/fa'; // For the person icon

type Tour = {
  title: string;
  duration: string;
  price: string;
  description: string;
  image: string;
};

const tours: Tour[] = [
  {
    title: 'Sunset City Tour',
    duration: '1.5 hours',
    price: '£45',
    description: 'A relaxing evening ride through the city’s most scenic spots as the sun sets.',
    image: '/images/Sunset City Tour.png',
  },
  {
    title: 'Royal Landmarks Tour',
    duration: '2 hours',
    price: '£55',
    description: 'Cruise past the city’s royal and historic sites in a vintage car.',
    image: '/images/Royal Landmarks Tour.png',
  },
  {
    title: 'Old Town Explorer',
    duration: '1 hour',
    price: '£40',
    description: 'Discover the charm of old streets, artisan shops, and hidden gems.',
    image: '/images/Old Town Explorer.png',
  },
  {
    title: 'Vintage Night Drive',
    duration: '1.5 hours',
    price: '£50',
    description: 'Experience the magic of the city under the lights — a night ride in a classic convertible.',
    image: '/images/Vintage Night Drive.png',
  },
  {
    title: 'Vintage Night Drive',
    duration: '1.5 hours',
    price: '£50',
    description: 'Experience the magic of the city under the lights — a night ride in a classic convertible.',
    image: '/images/Vintage Night Drive.png',
  },
  {
    title: 'Vintage Night Drive',
    duration: '1.5 hours',
    price: '£50',
    description: 'Experience the magic of the city under the lights — a night ride in a classic convertible.',
    image: '/images/Vintage Night Drive.png',
  },
  // ...repeat data as needed
];

const TourCard: React.FC<Tour> = ({ title, duration, price, description, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="text-sm text-gray-600 mt-1 flex items-center justify-between">
          <span>{duration}</span>
          <span className="flex items-center gap-1">
            <FaUser className="w-3.5 h-3.5" />
            {price} per person
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
      <div className="px-4 pb-4">
        <button className="w-full bg-[#6A1B1A] hover:bg-[#5a1616] text-white py-2 rounded-md text-sm font-medium transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

const TourGrid: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tours.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </div>
    </section>
  );
};

export default TourGrid;
