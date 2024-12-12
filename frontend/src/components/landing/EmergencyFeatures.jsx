import FeatureCard from "./FeatureCard";
import StatCard from "./StatCard";
import { User, Ambulance, Building2 } from "lucide-react";

const EmergencyFeatures = () => {
  const features = {
    patient: [
      "Find and book nearest ambulance",
      "Select specialized hospitals based on condition",
      "Real-time ambulance tracking",
      "Automatic hospital suggestion",
    ],
    ambulance: [
      "Real-time patient location access",
      "Hospital selection assistance",
      "Patient condition assessment",
      "Direct hospital communication",
    ],
    hospital: [
      "Real-time ambulance tracking",
      "Patient information preview",
      "Preparation time optimization",
      "Emergency resource management",
    ],
  };

  const stats = [
    { value: "4.5min", label: "Average Response Time" },
    { value: "98%", label: "Success Rate" },
    { value: "24/7", label: "Service Available" },
    { value: "100+", label: "Partner Hospitals" },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Emergency Response Features</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Three integrated platforms working together to provide seamless
          emergency medical services
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          icon={<User className="w-8 h-8 text-red-500" />}
          title="Patient Platform"
          features={features.patient}
        />
        <FeatureCard
          icon={<Ambulance className="w-8 h-8 text-red-500" />}
          title="Ambulance Platform"
          features={features.ambulance}
        />
        <FeatureCard
          icon={<Building2 className="w-8 h-8 text-red-500" />}
          title="Hospital Platform"
          features={features.hospital}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default EmergencyFeatures;
