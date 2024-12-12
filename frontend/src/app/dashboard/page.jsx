import Button from "@/components/Button";
import DashboardLayout from "@/components/landing/DashboardLayout";
import { Card } from "@/components/ui/card";
import React from "react";


const BookingForm = () => (
  <Card className="lg:col-span-2 p-6">
    <h2 className="text-xl font-semibold mb-4">Book Ambulance</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700 mb-2">
          Health Condition/Emergency Type
        </label>
        <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>Accident</option>
          <option>Heart Attack</option>
          <option>Pregnancy</option>
          <option>Burn</option>
          <option>Other Emergency</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">
          Select Hospital (Optional)
        </label>
        <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>City General Hospital</option>
          <option>Medicare Hospital</option>
          <option>Apollo Hospital</option>
          <option>Let Ambulance Choose</option>
        </select>
      </div>
      <Button color="blue" className="w-full">
        Book Now
      </Button>
    </div>
  </Card>
);

const ActiveBooking = () => (
  <Card className="p-6">
    <h2 className="text-xl font-semibold mb-4">Active Booking</h2>
    <div className="text-center p-6">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i className="fas fa-ambulance text-2xl text-gray-400"></i>
      </div>
      <p className="text-gray-600">No active bookings</p>
    </div>
  </Card>
);

const RecentBookings = () => (
  <Card className="lg:col-span-2 p-6">
    <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
    <div className="space-y-4">
      {[
        {
          hospital: "City General Hospital",
          type: "Accident Emergency",
          date: "23rd Jan 2024, 14:30",
        },
        {
          hospital: "Medicare Hospital",
          type: "Heart Emergency",
          date: "20th Jan 2024, 09:15",
        },
      ].map((booking, index) => (
        <div key={index} className="border rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{booking.hospital}</h3>
              <p className="text-gray-600 text-sm">{booking.type}</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Completed
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-2">{booking.date}</p>
        </div>
      ))}
    </div>
  </Card>
);

const QuickStats = () => (
  <Card className="p-6">
    <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
    <div className="space-y-4">
      <div className="border-b pb-4">
        <p className="text-gray-600">Total Bookings</p>
        <p className="text-2xl font-semibold">08</p>
      </div>
      <div className="border-b pb-4">
        <p className="text-gray-600">Preferred Hospital</p>
        <p className="text-lg font-semibold">City General</p>
      </div>
      <div>
        <p className="text-gray-600">Last Booking</p>
        <p className="text-lg font-semibold">2 days ago</p>
      </div>
    </div>
  </Card>
);

const PatientDashboard = () => {
  return (
    <DashboardLayout
      title="Welcome, John Doe"
      subtitle="Patient ID: #12345"
      actionButton={<Button color="red">Emergency SOS</Button>}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <BookingForm />
        <ActiveBooking />
        <RecentBookings />
        <QuickStats />
      </div>
    </DashboardLayout>
  );
};

export default PatientDashboard;
