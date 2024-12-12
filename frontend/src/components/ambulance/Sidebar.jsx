import { Home, Users, Hospital, MapPin, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white p-4 sticky top-0">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-2xl font-semibold text-blue-400">Sahara</span>
      </div>

      <nav className="space-y-2">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-slate-800 rounded-lg"
        >
          <Home className="h-5 w-5" />
          <span>Dashboard</span>
        </a>
        <a
          href="#request"
          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-slate-800 rounded-lg"
        >
          <Users className="h-5 w-5" />
          <span>Requests</span>
        </a>
        <a
          href="#hospital"
          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-slate-800 rounded-lg"
        >
          <Hospital className="h-5 w-5" />
          <span>Hospitals</span>
        </a>
        <a
          href="#location"
          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-slate-800 rounded-lg"
        >
          <MapPin className="h-5 w-5" />
          <span>Location</span>
        </a>
        <a
          href="#setting"
          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-slate-800 rounded-lg"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </a>
      </nav>

      <div className="absolute bottom-4 flex items-center gap-3 px-3 py-2">
        <div className="flex-shrink-0">
          <div className="h-8 w-8 rounded-full bg-gray-500" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium">John Doe</div>
          <div className="text-xs text-gray-400">john@example.com</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
