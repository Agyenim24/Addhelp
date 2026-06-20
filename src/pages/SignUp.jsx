import React from "react";
import {
  User,
  Mail,
  Phone,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-[#F5F7FC] pt-20">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* LEFT SIDE */}
        <div className="relative px-10 py-8 flex flex-col">
          {/* Logo */}
          

          <div className="flex-1 flex items-center">
            <div className="relative w-full">
              {/* Phone Mockup */}
              <div className="relative w-[290px] h-[500px] mx-auto">
                <div className="absolute inset-0 rounded-[45px] bg-[#AEB5C1] shadow-2xl"></div>

                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-40 h-6 bg-[#9198A3] rounded-full"></div>

                <div className="absolute inset-[12px] rounded-[38px] overflow-hidden bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Overlay */}
              <div className="absolute left-0 top-8 max-w-[330px]">
                <h1 className="text-[58px] leading-[1.05] font-bold text-slate-900">
                  Your journey to wellness starts here.
                </h1>

                <p className="mt-6 text-slate-600 text-lg leading-8">
                  Join thousands of others who have found
                  clarity, strength, and support on their
                  unique path to recovery.
                </p>
              </div>

              {/* Testimonial Card */}
              <div className="absolute left-0 bottom-16 bg-white rounded-2xl shadow-lg p-5 w-[340px]">
                <div className="flex gap-1 text-green-600">
                  ★★★★★
                </div>

                <p className="text-sm text-slate-600 italic mt-3 leading-6">
                  "This platform changed my perspective on
                  what's possible. The community and tools
                  kept me accountable when I needed it
                  most."
                </p>

                <div className="flex items-center gap-3 mt-5">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">
                    JD
                  </div>

                  <div>
                    <h4 className="font-medium text-sm">
                      James D.
                    </h4>

                    <p className="text-xs text-slate-500">
                      Member since 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex gap-6 text-xs text-slate-500">
            <span>© 2024 Recovery Path</span>
            <span>Privacy Policy</span>
            <span>Support</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center px-8">
          <div className="w-full max-w-[500px]">
            <h1 className="text-3xl font-bold text-slate-900">
              Create your account
            </h1>

            <p className="mt-2 text-slate-500">
              Already have an account?{" "}
              <span className="text-blue-600 cursor-pointer">
                Login here
              </span>
            </p>

            {/* Progress */}
            <div className="mt-10 flex gap-4">
              <div className="h-1.5 flex-1 bg-blue-600 rounded-full"></div>
              <div className="h-1.5 flex-1 bg-slate-300 rounded-full"></div>
            </div>

            {/* Form */}
            <form className="mt-12 space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm text-slate-600 mb-2">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full h-10 pl-12 pr-4 border border-slate-300 rounded-xl bg-white outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-slate-600 mb-2">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full h-10 pl-12 pr-4 border border-slate-300 rounded-xl bg-white outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-slate-600 mb-2">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full h-10 pl-12 pr-4 border border-slate-300 rounded-xl bg-white outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-2 font-medium transition"
              >
                Continue
                <ArrowRight size={18} />
              </button>
            </form>

            {/* Divider */}
            <div className="my-12 border-t border-slate-300"></div>

            {/* Bottom Help */}
            <div className="text-center">
              <div className="flex justify-center items-center gap-2 text-slate-500 text-sm">
                <HeartHandshake
                  size={16}
                  className="text-green-600"
                />
                Need help signing up?
              </div>

              <button className="mt-3 text-blue-600 font-semibold hover:text-blue-700">
                Speak with a specialist 24/7
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}