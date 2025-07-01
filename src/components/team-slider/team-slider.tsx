import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import { MoveLeft, MoveRight } from "lucide-react";

const teamMembers = [
  {
    name: "John Smith",
    title: "Comany CEO",
    image: "/images/wepik-export-20230929204043501C 1 (1).png",
    bg: "#FEDDC0",
  },
  {
    name: "David Johnson",
    title: "Co-Founder",
    image: "/images/wepik-export-20230929204535TO7n 1.png",
    bg: "#f9beba",
  },
  {
    name: "Mary Johnson",
    title: "Property Managers",
    image: "/images/wepik-export-20230929204459Q400 1.png",
    bg: "#D2E6F5",
  },
  {
    name: "Patricia Davis",
    title: "Estate Consultant",
    image: "/images/wepik-export-20230929204142EJoX 1.png",
    bg: "#FEDDC0",
  },
  {
    name: "Emily Watson",
    title: "Marketing Head",
    image: "/images/wepik-export-20230929204459Q400 1.png",
    bg: "#f9beba",
  },
  {
    name: "Emily Watson",
    title: "Marketing Head",
    image: "/images/wepik-export-20230929204142EJoX 1.png",
    bg: "#D2E6F5",
  },
];

const TeamSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-10">
        Meet Our <span className="text-[#6A1B1A] font-bold">Team</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="pb-16"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center relative overflow-hidden">
              <div className="w-[262px] h-[397px] relative z-10">
                <svg
                  viewBox="0 0 200 250"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d={
                      index % 2 === 0
                        ? "M0,30 Q100,0 200,30 L200,220 Q100,250 0,220 Z"
                        : "M0,0 Q100,30 200,0 L200,220 Q100,190 0,220 Z"
                    }
                    fill={member.bg}
                  />
                </svg>
                <img
                  src={member.image}
                  alt={member.name}
                  className={`absolute ${
                    index % 2 === 0 ? "top-[200px]" : "top-[180px]"
                  } left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 object-cover`}
                />
              </div>
              <h3 className="text-lg font-semibold mt-6">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.title}</p>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center mt-10 gap-50">
          <button
            ref={prevRef}
            className="w-[135px] h-[135px] border-[0.92px] flex-col rounded-full flex items-center justify-center text-sm border-black hover:bg-gray-100 transition"
          >
            <span className="text-sm">Prev</span>
            <MoveLeft />
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination !static !w-auto flex items-center justify-center mt-6"></div>

          <button
            ref={nextRef}
            className="w-[135px] h-[135px] border-[0.92px] rounded-full flex flex-col items-center justify-center text-sm border-black hover:bg-gray-100 transition"
          >
            <span className="text-sm">Next</span>
            <MoveRight />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default TeamSlider;
