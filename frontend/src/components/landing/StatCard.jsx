import React from "react";

const StatCard = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-red-600 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default StatCard;
