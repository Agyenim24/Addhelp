import React from "react";
import {
  LayoutDashboard,
  CalendarDays,
  Building2,
  Trophy,
  Bell,
  Settings,
  CircleHelp,
  PlusCircle,
  Link,
  Users,
  Lightbulb,
  Droplets,
  Trash2,
} from "lucide-react";

export default function Reminders() {
  const alerts = [
    {
      id: 1,
      title: "Morning Medication",
      schedule: "Daily at 08:00 AM",
      icon: <Link size={18} />,
      active: true,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "Weekly Counselling Session",
      schedule: "Every Wednesday at 03:00 PM",
      icon: <Users size={18} />,
      active: true,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      title: "Journal Entry",
      schedule: "Daily at 09:00 PM",
      icon: <Lightbulb size={18} />,
      active: false,
      color: "bg-green-100 text-green-700",
    },
    {
      id: 4,
      title: "Hydration Goal",
      schedule: "Every 2 hours",
      icon: <Droplets size={18} />,
      active: true,
      color: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FC] flex pt-20">
      {/* Sidebar */}
      <aside className="w-[250px] bg-white border-r border-slate-200 flex flex-col justify-between">
        <div>
          {/* User */}
          <div className="p-5">
            <p className="text-[11px] text-slate-400 uppercase">
              Account
            </p>

            <div className="flex items-center gap-3 mt-4">
              <img
                src="https://i.pravatar.cc/60?img=12"
                alt=""
                className="w-10 h-10 rounded-full"
              />

              <div>
                <h3 className="font-semibold text-sm">
                  Welcome back
                </h3>

                <p className="text-xs text-green-600">
                  ✓ 7 Day Streak
                </p>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="px-3 mt-4">
            {[
              {
                icon: <LayoutDashboard size={16} />,
                name: "Dashboard",
              },
              {
                icon: <CalendarDays size={16} />,
                name: "Counselling",
              },
              {
                icon: <Building2 size={16} />,
                name: "Facilities",
              },
              {
                icon: <Trophy size={16} />,
                name: "Goals",
              },
              {
                icon: <Bell size={16} />,
                name: "Reminders",
                active: true,
              },
            ].map((item) => (
              <button
                key={item.name}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm mb-2 transition ${
                  item.active
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="p-4 border-t">
          <button className="w-full flex items-center gap-3 text-sm text-slate-600 py-2">
            <Settings size={16} />
            Settings
          </button>

          <button className="w-full flex items-center gap-3 text-sm text-slate-600 py-2">
            <CircleHelp size={16} />
            Support
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Reminders & Alerts
          </h1>

          <p className="text-slate-500 mt-2">
            Stay consistent on your journey. Manage your
            daily medication, appointments, and recovery
            tasks.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-8">
          {/* Left Column */}
          <div className="col-span-4">
            {/* Form Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Create Reminder
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="text-xs text-slate-500">
                    Title
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Morning Medication"
                    className="w-full mt-2 border border-slate-300 rounded-lg px-4 h-11 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-500">
                      Category
                    </label>

                    <select className="w-full mt-2 border border-slate-300 rounded-lg px-3 h-11">
                      <option>Medication</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-500">
                      Time
                    </label>

                    <input
                      type="time"
                      className="w-full mt-2 border border-slate-300 rounded-lg px-3 h-11"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-500">
                    Frequency
                  </label>

                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <button className="bg-blue-100 text-blue-700 rounded-lg py-2 text-sm">
                      Daily
                    </button>

                    <button className="border rounded-lg py-2 text-sm">
                      Weekly
                    </button>

                    <button className="border rounded-lg py-2 text-sm">
                      Monthly
                    </button>
                  </div>
                </div>

                <button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2">
                  <PlusCircle size={18} />
                  Add Reminder
                </button>
              </div>
            </div>

            {/* Blue Card */}
            <div className="mt-5 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-5 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 text-7xl opacity-10">
                ✦
              </div>

              <h3 className="font-semibold">
                Consistency is Key
              </h3>

              <p className="text-sm mt-3 text-blue-100 leading-6">
                Users who set daily reminders are 45%
                more likely to reach their 30-day
                milestone.
              </p>

              <button className="mt-6 bg-white text-blue-700 px-5 py-2 rounded-full text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-8">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold text-slate-800">
                Active Alerts
              </h2>

              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                4 Active
              </span>
            </div>

            {/* Alert Cards */}
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className="bg-white border border-slate-200 rounded-xl p-4 flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${alert.color}`}
                    >
                      {alert.icon}
                    </div>

                    <div>
                      <h3 className="font-medium text-slate-800">
                        {alert.title}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {alert.schedule}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    {/* Toggle */}
                    <button
                      className={`w-12 h-6 rounded-full relative ${
                        alert.active
                          ? "bg-blue-600"
                          : "bg-slate-300"
                      }`}
                    >
                      <span
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${
                          alert.active
                            ? "right-1"
                            : "left-1"
                        }`}
                      />
                    </button>

                    <Trash2
                      size={16}
                      className="text-slate-500 cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Community Card */}
            <div className="mt-5 bg-white border border-slate-200 rounded-xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    src="https://i.pravatar.cc/40?img=3"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt=""
                  />

                  <img
                    src="https://i.pravatar.cc/40?img=8"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt=""
                  />
                </div>

                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-blue-700">
                    James and 12 others
                  </span>{" "}
                  updated their reminders today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}