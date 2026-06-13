import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">AddHelp</h2>
            <p className="text-gray-400 leading-relaxed">
              Supporting mental wellness through AI-powered conversations,
              guidance, and community resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/chat" className="hover:text-white transition">
                  AI Chat
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Mental Health Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Self-Care Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-slate-700 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="bg-slate-700 p-3 rounded-full hover:bg-sky-500 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="bg-slate-700 p-3 rounded-full hover:bg-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-slate-700 p-3 rounded-full hover:bg-blue-700 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <p className="text-gray-400 mt-4 text-sm">
              support@addhelp.com
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AddHelp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;