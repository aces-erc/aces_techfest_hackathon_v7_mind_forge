import { Building2, MapPin, Ambulance, Map } from "lucide-react";
import AmbulanceLocationsMap from "./NearestAmbulanceMap";

export default function ComopnentB() {

  return (
    <div className="mx-auto px-20 space-y-6 mt-4" >
     
      <div id="location" className="bg-white rounded-lg shadow-sm border p-4">
        <h2 className="font-semibold mb-4">Location Tracking</h2>

        <div className=" rounded-lg mb-4 flex items-center justify-center text-gray-500 ">
          <AmbulanceLocationsMap />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Ambulance className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="font-medium">Ambulance #A123</p>
                <p className="text-sm text-gray-500">
                  En route to your location
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">ETA</p>
              <p className="font-medium text-blue-500">8 mins</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-gray-500" />
            <div>
              <p className="font-medium">Your Location</p>
              <p className="text-sm text-gray-500">123 Patient Street, City</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-gray-500" />
            <div>
              <p className="font-medium">City General Hospital</p>
              <p className="text-sm text-gray-500">456 Hospital Avenue, City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
