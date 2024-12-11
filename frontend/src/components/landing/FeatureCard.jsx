import React from "react";
import { Check } from "lucide-react";

const FeatureCard = ({ icon, title, features }) => {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
