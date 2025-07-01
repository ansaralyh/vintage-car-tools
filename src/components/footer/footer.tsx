import { Facebook, Instagram, Youtube } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#6A1B1A] py-8 px-16 text-[#D4AF37]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Tours</a></li>
              <li><a href="#">Bookings</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className='flex items-center text-white gap-2'>

            <Instagram/> <Facebook/> <Youtube/>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li><a href="mailto:info@vintagecartours.co.uk" className="text-white">info@vintagecartours.co.uk</a></li>
              <li><a href="tel:+44123456789" className="text-white">+44 123 456 789</a></li>
            </ul>
            <address className="not-italic text-white">
              15 Classic Street, London, UK
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#374151] pt-6 text-center text-white">
          <p>© 2025 Vintage Car Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;