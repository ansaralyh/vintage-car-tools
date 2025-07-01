import React from 'react';

const Bookings: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
     
      {/* Header with background image */}
      <div className="relative w-full h-[340px] md:h-[380px] lg:h-[400px] flex items-center justify-center">
        <img
          src="/public/images/Rectangle 199.png"
          alt="Book your tour header"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 z-10" style={{ background: 'rgba(24, 23, 23, 0.5)' }} />
        <div className="relative z-20 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">Book Your Tour</h1>
          <p className="text-white text-lg text-center max-w-xl mx-auto">Lorem ipsum dolor sit amet consectetur. Diam etiam purus non nullam aliquet</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center py-10 px-2">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow border border-gray-200 p-12">
          <h2 className="text-2xl font-bold mb-2">Book Your Tour</h2>
          <p className="text-gray-600 mb-6">Please fill out the form below to reserve your spot. We will confirm your booking via email within 24 hours.</p>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">Full Name <span className="text-red-500">*</span></label>
              <input id="name" type="text" placeholder="e.g., John Doe" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7A2D23]" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
              <input id="email" type="email" placeholder="e.g., john@example.com" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7A2D23]" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="phone">Phone Number <span className="text-red-500">*</span></label>
              <input id="phone" type="tel" placeholder="e.g., +44 123 456 789" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7A2D23]" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="tour">Select Tour <span className="text-red-500">*</span></label>
              <select id="tour" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#7A2D23]">
                <option value="">Select a tour</option>
                <option value="classic">Classic Car City Tour</option>
                <option value="countryside">Countryside Escape</option>
                <option value="custom">Custom Experience</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="date">Preferred Date <span className="text-red-500">*</span></label>
              <input id="date" type="date" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7A2D23]" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="time">Preferred Time <span className="text-red-500">*</span></label>
              <select id="time" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#7A2D23]">
                <option value="">Select a time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="guests">Number of Guests <span className="text-red-500">*</span></label>
              <input id="guests" type="number" min="1" placeholder="1" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7A2D23]" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="requests">Special Requests</label>
              <textarea id="requests" placeholder='e.g. "Wheelchair access needed" or "Birthday surprise"' className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7A2D23] resize-none" />
            </div>
            <div className="flex justify-center pt-2">
              <button type="submit" className="bg-[#7A2D23] text-white rounded-md px-6 py-2 font-semibold hover:bg-[#5a211a] transition w-[154px]">Submit Booking</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
