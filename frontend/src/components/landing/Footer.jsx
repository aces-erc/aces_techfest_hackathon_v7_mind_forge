import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Sahara</h2>
            <p className="text-gray-400">
              Revolutionizing emergency medical response with real-time tracking
              and coordination.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hospital Network
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ambulance Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Emergency Response
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hospital Selection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Live Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Medical Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  24/7 Assistance
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <span>Emergency: 1001</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-500" />
                <a
                  href="mailto:support@Sahara.com"
                  className="hover:text-white transition-colors"
                >
                  support@Sahara.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  erc Tinkune Dharan
                  <br />
                  Dharan road, st 7459
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="tel:911"
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Emergency Call Now
          </a>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            © 2024 Sahara. All rights reserved.
          </div>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
