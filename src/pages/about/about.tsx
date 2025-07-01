import TeamSlider from "../../components/team-slider/team-slider";

function About() {
  return (
    <div>
      <div
        className="relative h-screen w-full flex items-center justify-center bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/Rectangle 199 (1).png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white font-extrabold">
            Who We Are
          </h1>

          <p className="text-lg md:text-2xl text-white mb-8 max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur. Diam etiam purus non nullam
            aliquet
          </p>
        </div>
      </div>
      <section className="text-center px-6 md:px-20 py-12 space-y-6">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold">
        About Vintage <span className="text-[#6A1B1A]">Car Tours</span>
      </h2>

      {/* Description */}
      <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Vintage Car Tours is a passionate startup offering classic car rides through the heart of the city. 
        Whether you’re a first-time visitor or a local looking for a new experience, we bring you a memorable 
        ride in timeless style. Our mission is to deliver a unique, stylish, and personal touring experience 
        using beautifully restored vintage vehicles.
      </p>

      {/* Quote Box */}
      <div className="bg-orange-100 text-brown-900 max-w-xl mx-auto p-6 rounded-md shadow-sm">
        <p className="italic font-medium text-lg">
          "To bring the charm of vintage motoring to modern travelers."
        </p>
      </div>
    </section>
      <section className="flex flex-col md:flex-row items-center mb-24  justify-between px-6 md:px-24 py-12 gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-6xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2024 by classic car enthusiasts, Vintage Car Tours began
            as a weekend hobby. Our founders wanted to combine their love for
            old automobiles with the joy of storytelling and exploring the city.
            What started with a single 1965 Mustang has now grown into a
            full-service guided tour company.
          </p>
        </div>

        {/* Image Content */}
        <div className="relative md:w-1/2 flex justify-center">
          <div className="relative w-[320px] h-[220px]">
            <img
              src="/images/Rectangle 203.png" // Top image (adjust as needed)
              alt="Vintage Tour"
              className="absolute top-0 left-0 w-48 md:w-56 rounded-md shadow-lg z-0"
            />
            <img
              src="/images/Rectangle 202.png" // Bottom image (adjust as needed)
              alt="Vintage Car"
              className="absolute top-24 left-14 w-60 md:w-72 rounded-md shadow-md z-10"
            />
          </div>
        </div>
      </section>
      <TeamSlider />
    </div>
  );
}

export default About;
