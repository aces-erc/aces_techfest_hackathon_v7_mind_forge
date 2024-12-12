import React from "react";
import BenefitCard from "./BenefitCard";

const benefits = [
  {
    icon: "clock",
    title: "Rapid Response Time",
    description:
      "Immediate connection with nearby ambulances ensures the fastest possible emergency response in critical situations.",
  },
  {
    icon: "shield",
    title: "Advance Preparation",
    description:
      "Hospitals receive patient information in advance to prepare necessary resources and medical equipment.",
  },
  {
    icon: "mapPin",
    title: "Real-Time Tracking",
    description:
      "Live location tracking between patient, ambulance, and hospital for seamless coordination and updates.",
  },
  {
    icon: "smartphone",
    title: "Easy to Use Interface",
    description:
      "Simple and intuitive application design for quick emergency service access when every second counts.",
  },
  {
    icon: "building",
    title: "Smart Hospital Selection",
    description:
      "Intelligent system suggests the most appropriate hospitals based on patient condition and specialization needs.",
  },
  {
    icon: "heart",
    title: "Comprehensive Care",
    description:
      "End-to-end emergency care coordination from initial contact to hospital admission.",
  },
];

const KeyBenefits = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Key Benefits</h2>
          <p className="text-xl text-gray-600">
            Experience the advantages of our integrated emergency response
            system
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Join our network of emergency service providers
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors">
            <a href="/chooserole">Get Started Today</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
