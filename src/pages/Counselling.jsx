import React from 'react'
import {
  Search,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
} from "lucide-react";
import Footer from '../components/Footer';

function Counselling() {
  const specialists = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    specialty: "Addiction Specialist",
    rating: 4.9,
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    description:
      "Over 15 years experience in alcohol and chemical dependency treatment.",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    specialty: "PTSD & Trauma",
    rating: 5.0,
    price: "$145",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    description:
      "Focused on mindfulness and evidence-based trauma recovery approaches.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    specialty: "Family Systems",
    rating: 4.8,
    price: "$130",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    description:
      "Specializing in rebuilding family dynamics during and after recovery.",
  },
];

  return (
   <div className="min-h-screen bg-[#F5F7FC] p-8 pt-28">
      <div className="max-w-7xl mx-auto flex gap-6">
        {/* Sidebar */}
        <div className="w-[260px]">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h2 className="text-blue-600 font-semibold text-xl mb-6">
              Specialists
            </h2>

            <div>
              <label className="text-xs text-slate-500">
                Specialty
              </label>

              <select className="w-full mt-2 border border-slate-200 rounded-lg p-3 text-sm outline-none">
                <option>All Specialties</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="text-xs text-slate-500">
                Price Range
              </label>

              <div className="flex justify-between mt-3 text-xs text-slate-600">
                <span>$50</span>
                <span>$300</span>
              </div>
            </div>

            <div className="mt-6">
              <label className="text-xs text-slate-500">
                Availability
              </label>

              <div className="mt-3 space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Today
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  This Week
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Weekends
                </label>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 mt-8">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium text-sm">
                October 2024
              </h4>

              <div className="flex gap-2">
                <ChevronLeft size={15} />
                <ChevronRight size={15} />
              </div>
            </div>

            <div className="grid grid-cols-7 text-center text-[10px] gap-2 text-slate-500">
              {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 text-center text-xs gap-2 mt-2">
              {[29, 30, 1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className={`p-1 rounded ${
                    n === 4
                      ? "bg-blue-600 text-white"
                      : ""
                  }`}
                >
                  {n}
                </div>
              ))}

              {[6, 7, 8, 9, 10, 11, 12].map((n) => (
                <div key={n}>{n}</div>
              ))}
            </div>

            <div className="bg-[#E8F5EE] rounded-lg p-3 mt-4">
              <p className="text-[11px] font-medium text-green-700">
                ✓ Next Session
              </p>

              <p className="text-sm text-slate-700 mt-1">
                Tomorrow at 10:00 AM
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-5xl font-bold text-slate-800">
                Find your guide.
              </h1>

              <p className="text-slate-500 mt-2">
                Choose from our verified network of
                recovery specialists.
              </p>
            </div>

            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search by name or keyword..."
                className="w-[330px] bg-white border border-slate-300 rounded-full py-3 pl-12 pr-4 outline-none"
              />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-5 mt-10">
            {specialists.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl p-4"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt=""
                    className="w-20 h-20 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-bold text-slate-800">
                          {item.name}
                        </h3>

                        <p className="text-blue-600 text-sm font-medium">
                          {item.specialty}
                        </p>
                      </div>

                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                        ★ {item.rating}
                      </div>
                    </div>

                    <p className="text-sm text-slate-500 mt-3">
                      {item.description}
                    </p>

                    <div className="flex justify-between items-center mt-5">
                      <div>
                        <span className="font-bold">
                          {item.price}
                        </span>
                        <span className="text-slate-400 text-sm">
                          /hr
                        </span>
                      </div>

                      <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Elena */}
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <div className="flex gap-4">
                <img
                  src={specialists[2].image}
                  alt=""
                  className="w-20 h-20 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold">
                        Elena Rodriguez
                      </h3>

                      <p className="text-blue-600 text-sm">
                        Family Systems
                      </p>
                    </div>

                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                      ★ 4.8
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 mt-3">
                    Specializing in rebuilding family
                    dynamics during and after recovery.
                  </p>

                  <div className="flex justify-between items-center mt-5">
                    <div>
                      <span className="font-bold">
                        $130
                      </span>
                      <span className="text-slate-400">
                        /hr
                      </span>
                    </div>

                    <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendation Card */}
            <div className="bg-blue-700 rounded-xl p-6 text-white relative overflow-hidden">
              <span className="bg-white/20 text-[10px] px-3 py-1 rounded-full">
                RECOMMENDED FOR YOU
              </span>

              <h3 className="text-3xl font-bold mt-5">
                Group Recovery Sessions
              </h3>

              <p className="mt-3 text-blue-100">
                Join a supportive community led by top
                facilitators. High success rates for
                peer-supported recovery.
              </p>

              <div className="flex justify-between items-end mt-8">
                <div className="flex items-center">
                  <img
                    src="https://i.pravatar.cc/30?img=1"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/30?img=2"
                    className="-ml-2 w-8 h-8 rounded-full border-2 border-white"
                  />
                  <span className="ml-2 bg-white text-blue-600 text-xs px-2 py-1 rounded-full">
                    +12
                  </span>
                </div>

                <button className="bg-white text-blue-700 px-5 py-2 rounded-md text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-12 mb-10">
            <button className="border border-slate-300 bg-white px-12 py-4 rounded-full flex items-center gap-2 text-slate-600">
              <RefreshCw size={16} />
              Load More Specialists
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Counselling
