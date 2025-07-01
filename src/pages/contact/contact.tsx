import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with background image */}
      <div className="relative w-full h-[638px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1749497683202-d3073573d996?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          alt="Contact header"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">Get in Touch</h1>
          <p className="text-white text-lg text-center max-w-xl mx-auto">Lorem ipsum dolor sit amet consectetur. Diam etiam purus non nullam aliquet</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-2">Get in Touch</h2>
        <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have questions about our tours or want to customize an experience – reach out to us below.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <form className="bg-white rounded-xl shadow border border-gray-200 p-6 flex-1 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Form</h3>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-1" htmlFor="name">Full Name <span className="text-red-500">*</span></label>
              <input id="name" type="text" placeholder="John Smith" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7A2D23]" />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-1" htmlFor="email">Email <span className="text-red-500">*</span></label>
              <input id="email" type="email" placeholder="your.email@example.com" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7A2D23]" />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-1" htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="Tour inquiry" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7A2D23]" />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-1" htmlFor="message">Your Message <span className="text-red-500">*</span></label>
              <textarea id="message" placeholder="Let us know how we can help you..." rows={4} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7A2D23] resize-none" />
            </div>
            <button type="submit" className="bg-[#7A2D23] text-white rounded-[6px]  px-6 py-2 font-semibold hover:bg-[#5a211a] transition w-[154px]">Send Message</button>
          </form>

          {/* Right Column: Alternative Contact Info + Map */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-gray-100 rounded-xl shadow border border-gray-200 p-6 flex flex-col gap-4 mb-4">
              <h3 className="text-lg font-semibold mb-2">Alternative Contact Info</h3>
              <div className="flex items-center mb-2">
                <span className="material-icons text-gray-500 mr-2">email</span>
                <span>Email: <a href="mailto:info@vintagecartours.co.uk" className="text-[#7A2D23] underline">info@vintagecartours.co.uk</a></span>
              </div>
              <div className="flex items-center mb-2">
                <span className="material-icons text-gray-500 mr-2">phone</span>
                <span>Phone: <a href="tel:+44123456789" className="text-[#7A2D23] underline">+44 123 456 789</a></span>
              </div>
              <div className="flex items-center mb-2">
                <span className="material-icons text-gray-500 mr-2">location_on</span>
                <span>Address: 15 Classic Street, London, UK</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <a href="#" className="text-gray-500 hover:text-[#7A2D23]"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-500 hover:text-[#7A2D23]"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-500 hover:text-[#7A2D23]"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            {/* Map directly below contact info */}
            <div className="bg-white rounded-xl shadow border border-gray-200 p-2">
              <iframe
                title="Map showing our location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.142,51.501,-0.137,51.504&amp;layer=mapnik&amp;marker=51.5025,-0.1395"
                className="w-full" style={{height: 326}} 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
