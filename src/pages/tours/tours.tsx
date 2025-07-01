import { Clock, DollarSign, Filter, Moon, Tag } from "lucide-react";
import TourGrid from "../../components/tour-card/tour-card";
import { FaCarSide, FaClock, FaUserFriends } from "react-icons/fa";

function Tours() {
  return (
    <div>
      <div
        className="relative h-screen w-full flex items-center justify-center bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/tours.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white font-extrabold">
            Our Tours
          </h1>

          <p className="text-lg md:text-2xl max-w-[680px] text-white mb-8">
            Explore our curated collection of vintage car experiences – from
            iconic city landmarks to hidden historical gems. Choose a tour that
            fits your style and schedule.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm  ml-[37px] mr-[67px] mb-10 mt-8">
        <div className="flex items-center text-gray-700 mb-6 font-medium">
          <Filter className="w-4 h-4 mr-2" />
          Filter by:
        </div>
        <div className="flex items-center flex-wrap gap-4">
          {/* Filter Label */}

          {/* Filter Options */}
          <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200 transition">
            <Clock className="w-4 h-4" />
            Duration
          </button>

          <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200 transition">
            <Tag className="w-4 h-4" />
            Theme
          </button>

          <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200 transition">
            <DollarSign className="w-4 h-4" />
            Price Range
          </button>

          <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200 transition">
            <Moon className="w-4 h-4" />
            Day/Night
          </button>
        </div>
      </div>
      <TourGrid />

      <section className="py-16">
        <h2 className="text-3xl md:text-6xl font-bold text-center max-w-[661px] mx-auto mb-12">
          Why Choose <span className="text-[#6A1B1A]">Vintage Car</span> Tours?
        </h2>
        <div
          
          className="bg-[#FFF0D1] pt-[62px] pb-[100px]"
        >
          {/* Heading */}

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-[103px] text-start">
            {/* Feature 1 */}
            <div className="flex flex-col items-start space-y-4">
              <div className="bg-[#F3D998] p-4 rounded-full">
                <FaCarSide className="text-[#6A1B1A] w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#6A1B1A]">
                Unique Classic Cars
              </h3>
              <p className="text-gray-700 text-sm max-w-xs">
                Enjoy our collection of beautifully restored vintage vehicles.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start space-y-4">
              <div className="bg-[#F3D998] p-4 rounded-full">
                <FaUserFriends className="text-[#6A1B1A] w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#6A1B1A]">
                Experienced Local Guides
              </h3>
              <p className="text-gray-700 text-sm max-w-xs">
                Our friendly drivers know the city’s best kept secrets.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start space-y-4">
              <div className="bg-[#F3D998] p-4 rounded-full">
                <FaClock className="text-[#6A1B1A] w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#6A1B1A]">
                Flexible Booking Times
              </h3>
              <p className="text-gray-700 text-sm max-w-xs">
                Choose a tour time that fits your schedule perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tours;
