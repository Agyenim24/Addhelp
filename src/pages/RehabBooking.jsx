import React from 'react'
import {
  Search,
  Users,
  Building2,
  Star,
  Navigation,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Footer from '../components/Footer';

function RehabBooking() {
  

  const facilities = [
    {
      id: 1,
      badge: "Verified",
      title: "Cedar Ridge Wellness",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600",
      description:
        "Specializing in holistic addiction recovery and personalized treatment plans.",
      capacity: "12/20",
      type: "Inpatient",
    },
    {
      id: 2,
      badge: "Popular",
      title: "Pacific Harbor Recovery",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
      description:
        "Coastal-inspired therapeutic environment focusing on long-term recovery.",
      capacity: "4/15",
      type: "Detox",
    },
    {
      id: 3,
      title: "Evergreen Heights",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
      description:
        "A peaceful mountain retreat offering dual-diagnosis treatment.",
      capacity: "18/30",
      type: "Outpatient",
    },
    {
      id: 4,
      badge: "New",
      title: "Foundation Wellness",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
      description:
        "Evidence-based treatment protocols focusing on sustainable recovery.",
      capacity: "10/25",
      type: "Therapy",
    },
  ];

  
  return (
    <div className="min-h-screen bg-[#f5f7fc] flex pt-20">
      {/* Sidebar */}
      <aside className="w-[280px] bg-white border-r border-slate-200 p-5">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-slate-700">Filters</h2>
          <button className="text-blue-600 text-sm">Clear all</button>
        </div>

        {/* Search */}
        <div className="relative mt-4">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full h-11 pl-10 rounded-lg border border-slate-300 bg-slate-50 outline-none"
          />
        </div>

        {/* Treatment Type */}
        <div className="mt-8">
          <h3 className="text-sm font-medium mb-3">
            Treatment Type
          </h3>

          <div className="space-y-3 text-sm">
            <label className="flex gap-2">
              <input type="checkbox" checked readOnly />
              Inpatient Care
            </label>

            <label className="flex gap-2">
              <input type="checkbox" />
              Outpatient Detox
            </label>

            <label className="flex gap-2">
              <input type="checkbox" />
              Holistic Recovery
            </label>
          </div>
        </div>

        {/* Insurance */}
        <div className="mt-8">
          <h3 className="text-sm font-medium mb-3">
            Insurance Providers
          </h3>

          <select className="w-full h-11 border rounded-lg px-3">
            <option>All Insurances</option>
          </select>
        </div>

        {/* Rating */}
        <div className="mt-8">
          <h3 className="text-sm font-medium mb-3">
            Minimum Rating
          </h3>

          <div className="flex gap-2">
            <button className="px-4 py-2 border rounded-lg text-sm">
              3.0+
            </button>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
              4.0+
            </button>

            <button className="px-4 py-2 border rounded-lg text-sm">
              4.5+
            </button>
          </div>
        </div>

        {/* Help Card */}
        <div className="mt-10 bg-[#eef4ff] rounded-2xl p-5">
          <h3 className="font-semibold text-blue-700">
            Need Help Choosing?
          </h3>

          <p className="text-xs text-slate-500 mt-2">
            Our specialists can guide you through the process
            24/7.
          </p>

          <button className="w-full h-11 mt-4 bg-blue-600 text-white rounded-lg">
            Speak to a Guide
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Map Section */}
        <div className="relative h-[230px] rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-sky-100/80 to-white/20" />

          <div className="absolute left-8 bottom-8 bg-white rounded-2xl shadow-lg p-6 w-[320px]">
            <h2 className="text-blue-600 font-bold text-xl">
              Map View
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Found 24 accredited facilities in your current
              route.
            </p>
          </div>

          <button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
            <Navigation size={18} />
          </button>
        </div>

        {/* Facility Cards */}
        <div className="grid lg:grid-cols-3 gap-5 mt-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={facility.image}
                  alt=""
                  className="w-full h-[180px] object-cover"
                />

                {facility.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    {facility.badge}
                  </span>
                )}
              </div>

              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-slate-800">
                    {facility.title}
                  </h3>

                  <div className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                    <Star
                      size={14}
                      fill="currentColor"
                    />
                    {facility.rating}
                  </div>
                </div>

                <p className="text-sm text-slate-500 mt-3 line-clamp-3">
                  {facility.description}
                </p>

                <div className="flex gap-4 mt-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    Capacity: {facility.capacity}
                  </div>

                  <div className="flex items-center gap-1">
                    <Building2 size={14} />
                    {facility.type}
                  </div>
                </div>

                <button className="w-full mt-5 h-11 rounded-xl bg-[#edf3ff] text-blue-600 font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-12 mb-10">
          <button className="w-9 h-9 rounded-full border flex items-center justify-center">
            <ChevronLeft size={16} />
          </button>

          <button className="w-9 h-9 rounded-full bg-blue-600 text-white">
            1
          </button>

          <button className="text-slate-600">2</button>

          <button className="text-slate-600">3</button>

          <button className="w-9 h-9 rounded-full border flex items-center justify-center">
            <ChevronRight size={16} />
          </button>
        </div>
         <Footer/>
      </main>
    </div>

  )
}

export default RehabBooking
