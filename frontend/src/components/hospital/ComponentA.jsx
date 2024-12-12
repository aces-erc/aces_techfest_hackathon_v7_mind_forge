import { Bell, LogOut } from "lucide-react";

const ComponentA = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-8 pt-8 pb-6 bg-slate-200">
        <h1 className="text-2xl font-semibold">Welcome, Hospital A!</h1>
        <div className="flex items-center gap-4">
          <Bell className="h-5 w-5 text-gray-500" />
          <LogOut className="h-5 w-5 text-gray-500" />
        </div>
      </div>
      <div className="flex gap-4 mt-8 px-24">
        <div className="flex-1 border-2 border-solid  rounded-lg bg-white px-6 py-2 shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-medium text-gray-500">
              Active Cases
            </h2>
            <span className="rounded-full bg-red-50 px-2 py-1 text-sm font-medium text-red-500">
              Live
            </span>
          </div>
          <p className="mt-2 text-3xl font-semibold">5</p>
        </div>

        <div className="flex-1 border-2 border-solid  rounded-lg bg-white px-6 py-2 shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-medium text-gray-500">
              Incoming Today
            </h2>
            <span className="rounded-full bg-green-50 px-2 py-1 text-sm font-medium text-green-500">
              +3
            </span>
          </div>
          <p className="mt-2 text-3xl font-semibold">12</p>
        </div>

        <div className="flex-1 border-2 border-solid  rounded-lg bg-white px-6 py-2 shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-medium text-gray-500">
              Average Response
            </h2>
            <span className="rounded-full bg-blue-50 px-2 py-1 text-sm font-medium text-blue-500">
              15 min
            </span>
          </div>
          <p className="mt-2 text-3xl font-semibold">13 min</p>
        </div>
      </div>
    </div>
  );
};

export default ComponentA;
