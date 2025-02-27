import React from 'react';
import { Instagram, Linkedin, ArrowRight, Compass } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: 'https://www.instagram.com/richeyrealty', 
      label: 'Instagram' 
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: 'https://www.linkedin.com/in/jaredrichey/', 
      label: 'LinkedIn' 
    },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Compass className="w-8 h-8" />
              <h3 className="text-xl font-bold">Richey Realty</h3>
            </div>
            <a
              href="https://www.compass.com/agents/jared-richey/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              Visit My Compass Profile
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transform hover:scale-110 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.compass.com/homes-for-sale/_map/mapview=34.0085186,-117.2036143,33.2699418,-118.3571787/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  Properties
                </a>
              </li>
              {['About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Compass Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.compass.com/agents/jared-richey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  My Compass Profile
                </a>
              </li>
              <li>
                <a
                  href="https://www.compass.com/private-exclusives/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  Private Exclusives
                </a>
              </li>
              <li>
                <a
                  href="https://www.compass.com/homes-for-sale/westminster-ca/listing-type=coming-soon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  Coming Soon Listings
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-sm text-gray-400 space-y-6">
            <div className="flex flex-col gap-4">
              <p className="text-center md:text-left">
                Compass is a real estate broker licensed by the State of California and abides by Equal Housing Opportunity laws. License # 01991628, 1527235, 1527365, 1356742, 1443761, 1997075, 1935359, 1961027, 1842987, 1869607, 1866771, 1527205, 1079009, 1272467.
              </p>
              <p className="text-center md:text-left">
                Jared Richey | DRE #02155947 | Compass
              </p>
            </div>
            <div className="text-center border-t border-white/10 pt-6">
              <p>&copy; {new Date().getFullYear()} Richey Realty. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}