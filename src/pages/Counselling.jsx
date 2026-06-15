import React from 'react'
 import {
  BriefcaseMedical,
  Map,
  Sparkles,
  ChartColumn,
  ListChecks,
  LayoutGrid,
} from "lucide-react";
function Counselling() {
  const tools = [
  {
    icon: BriefcaseMedical,
    title: "Book Counselling",
    description:
      "Connect with licensed therapists specializing in addiction and mental health.",
  },
  {
    icon: Map,
    title: "Find Rehab",
    description:
      "Search and filter verified treatment centers tailored to your clinical needs.",
  },
  {
    icon: Sparkles,
    title: "Daily Motivation",
    description:
      "Receive personalized daily reflections and strength-based reminders.",
  },
  {
    icon: ChartColumn,
    title: "Progress Tracking",
    description:
      "Visualize your journey with detailed sobriety metrics and behavioral logs.",
  },
  {
    icon: ListChecks,
    title: "Habit Building",
    description:
      "Structure your routine with evidence-based habits that stick.",
  },
  {
    icon: LayoutGrid,
    title: "Unified Dashboard",
    description:
      "Manage all your appointments, goals, and resources in one secure place.",
  },
];


  const steps = [
    {
      number: 1,
      title: 'Create Account',
      description: 'Set up your private, HIPAA-compliant profile in under two minutes.',
      isActive: true,
    },
    {
      number: 2,
      title: 'Connect',
      description: 'Match with the right clinical team or finding a local treatment center.',
      isActive: false,
    },
    {
      number: 3,
      title: 'Track',
      description: 'Log your daily progress and attend your first session with confidence.',
      isActive: false,
    },
  ];

  
  return (
    <div>
          <div className="min-h-screen bg-[#f5f7fb] px-8 py-10 pt-28">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-block px-4 py-1 text-xs font-medium text-teal-600 bg-teal-100 rounded-full">
            COMPASSIONATE CARE
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900 leading-tight">
            Your Recovery Journey
            <br />
            Starts Today
          </h1>

          <p className="mt-5 text-gray-500 max-w-lg">
            Find the specialized support, clinical expertise, and
            community strength you need to build a stable, healthy
            future. Professional guidance, at every step.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition">
              Get Started
            </button>

            <button className="px-8 py-4 border border-gray-300 hover:bg-gray-100 rounded-xl font-medium text-gray-700 transition">
              Find Support
            </button>
          </div>

          {/* Users */}
          <div className="flex items-center gap-3 mt-8">
            <div className="flex -space-x-3">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=2"
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>

            <p className="text-sm text-gray-500">
              Joined by <span className="font-semibold">2,400+</span> people this month
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200"
              alt="Recovery Journey"
              className="w-full h-[450px] object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 flex items-center justify-center rounded-full">
              💚
            </div>

            <div>
              <p className="text-xs text-gray-500">Daily Milestone</p>
              <h4 className="font-semibold text-gray-800">
                365 Days Sober
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mt-14 grid md:grid-cols-4 gap-5">
        
        {/* Card 1 */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-sm text-gray-500">Global Success Rate</p>

          <h2 className="text-5xl font-bold text-blue-600 mt-4">
            94%
          </h2>

          <div className="mt-4 h-2 bg-gray-200 rounded-full">
            <div className="w-[94%] h-full bg-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-sm text-gray-500">Active Members</p>

          <h2 className="text-5xl font-bold text-green-600 mt-4">
            12.5k
          </h2>

          <p className="text-sm text-green-500 mt-2">
            +12% this month
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-sm text-gray-500">Verified Centers</p>

          <h2 className="text-5xl font-bold text-gray-800 mt-4">
            450+
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Across 50 states
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-blue-700 text-white rounded-xl p-6">
          <p className="text-sm opacity-80">
            Your Next Session
          </p>

          <h3 className="text-2xl font-bold mt-4">
            Tomorrow, 10:00 AM
          </h3>

          <p className="text-sm mt-2 opacity-80">
            With Dr. Sarah Mitchell
          </p>
        </div>
      </div>
    </div>
   




    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Tools for Sustainable Recovery
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Integrated features designed by clinical experts to help you
            navigate every aspect of your wellness journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl p-8 bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                  <Icon size={22} className="text-slate-700" />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-slate-900">
                  {tool.title}
                </h3>

                <p className="mt-3 text-gray-500 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
<section className="bg-[#fcfdff] py-16 px-6 md:px-12 lg:px-24 font-sans text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Column: Text and Steps */}
        <div className="flex-1 w-full relative">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
            Getting started is simple
          </h2>
          <p className="text-slate-500 text-lg mb-10 max-w-md">
            We've streamlined the intake process to focus on what matters: your recovery.
          </p>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                {/* Step Number Badge */}
                <div 
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-6
                    ${step.isActive 
                      ? 'bg-[#155eef] text-white' 
                      : 'bg-[#eef2ff] text-[#1e293b]'
                    }`}
                >
                  {step.number}
                </div>
                
                {/* Step Text */}
                <div>
                  <h3 className="text-xl font-semibold text-[#1e293b]">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 mt-1 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Decorative pink circle (as seen in the screenshot) */}
          <div className="hidden lg:block absolute -right-8 top-1/2 transform w-3 h-3 rounded-full border-2 border-pink-500"></div>
        </div>

        {/* Right Column: Image and Badge */}
        <div className="flex-1 w-full relative">
          
          {/* Floating Badge */}
          <div className="absolute -top-5 right-0 lg:-right-8 bg-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 z-10">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5 text-emerald-700"
            >
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-sm text-slate-800 tracking-wide">
              Secure & Confidential
            </span>
          </div>

          {/* Main Image Container */}
          {/* Note: I've used a placeholder image that mimics the sage-green background color in your design. Replace the src with your actual asset. */}
          <div className="bg-[#b3cec6] rounded-2xl overflow-hidden aspect-[4/3] w-full relative shadow-sm border border-slate-100">
            <img 
              src="/api/placeholder/800/600" 
              alt="Clinical team member and patient" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative pink line (as seen in the screenshot) */}
          <div className="hidden lg:block absolute -top-12 -left-6 w-6 border-t-2 border-pink-500"></div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default Counselling
