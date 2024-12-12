import React from "react";
import Button from "./Button";

const DashboardLayout = ({ children, title, subtitle, actionButton }) => {
  return (
    <section className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://avatar.iran.liara.run/public"
              className="w-12 h-12 rounded-full"
              alt="Profile"
            />
            <div>
              <h1 className="text-xl font-semibold">{title}</h1>
              <p className="text-gray-600">{subtitle}</p>
            </div>
          </div>
          {actionButton}
        </div>
        {children}
      </div>
    </section>
  );
};

export default DashboardLayout;
