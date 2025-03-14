
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: About Winning SERP */}
          <div className="space-y-4 animate-slide-in-from-left">
            <h3 className="text-xl font-semibold text-gray-900">Winning SERP</h3>
            <p className="text-gray-600 max-w-md">
              We help businesses improve their online visibility through effective SEO strategies, content marketing, and digital solutions tailored to your needs.
            </p>
            <Link 
              to="/about-us" 
              className="inline-flex text-winning-700 hover:text-winning-800 font-medium"
            >
              Learn more about us
            </Link>
          </div>

          {/* Column 2: Important Links */}
          <div className="space-y-4 animate-slide-up [animation-delay:100ms]">
            <h3 className="text-xl font-semibold text-gray-900">Important Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-gray-600 hover:text-winning-700 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-winning-700 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/publishing-principles" 
                  className="text-gray-600 hover:text-winning-700 transition-colors"
                >
                  Publishing Principles
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="space-y-4 animate-slide-in-from-right">
            <h3 className="text-xl font-semibold text-gray-900">Connect</h3>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-500 hover:text-winning-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-500 hover:text-winning-700 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-500 hover:text-winning-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-winning-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-winning-700 mt-0.5 shrink-0" />
                <span className="text-gray-600">123 SEO Street, Digital City, 10001</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-winning-700 mt-0.5 shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-winning-700 mt-0.5 shrink-0" />
                <span className="text-gray-600">contact@winningserp.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-10 mt-10 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Winning SERP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
