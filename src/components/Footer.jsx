import React from "react";
import { Globe, MessageSquare, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#EAF0FF] px-8 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <h3 className="font-bold text-[#1E293B] mb-5">
              Recovery Path
            </h3>

            <p className="text-gray-600 text-sm leading-7 max-w-[220px]">
              Empowering recovery through technology and compassionate
              clinical care. Support is available 24/7.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <Globe
                size={16}
                className="text-[#374151] cursor-pointer"
              />
              <MessageSquare
                size={16}
                className="text-[#374151] cursor-pointer"
              />
              <Mail
                size={16}
                className="text-[#374151] cursor-pointer"
              />
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold tracking-wide uppercase text-[#1E293B] mb-5">
              Resources
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Emergency Contacts
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-600">
                  Find Help
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-600">
                  Clinician Login
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-600">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold tracking-wide uppercase text-[#1E293B] mb-5">
              Legal
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Terms of Service
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-600">
                  HIPAA Compliance
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-600">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Helpline Card */}
          <div className="flex flex-col justify-between">
            <div className="bg-[#F7D9D3] border border-[#E9BDB4] rounded-xl p-4 max-w-[260px]">
              <h5 className="text-[10px] uppercase font-bold text-[#B91C1C] tracking-wide">
                Emergency Helpline
              </h5>

              <p className="mt-2 text-lg font-medium text-[#B91C1C]">
                053-118-0263-HELP
              </p>

              <p className="text-xs text-[#B91C1C] mt-1">
                Available 24/7 • Free & Confidential
              </p>
            </div>

            <p className="text-xs text-gray-600 mt-1">
              © 2026 Recovery Path. All rights reserved.
            </p>
          </div>
        </div>

        {/* Floating Chat Button */}
        <button className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-700 text-white shadow-lg flex items-center justify-center hover:bg-blue-800 transition">
          <MessageSquare size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;