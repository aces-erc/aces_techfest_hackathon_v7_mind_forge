import {
  Clock,
  Shield,
  MapPin,
  Smartphone,
  Building2,
  Heart,
} from "lucide-react";

const iconMap = {
  clock: Clock,
  shield: Shield,
  mapPin: MapPin,
  smartphone: Smartphone,
  building: Building2,
  heart: Heart,
};

const BenefitCard = ({ icon, title, description }) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="flex gap-4 p-6 bg-white rounded-lg">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-red-500" />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
