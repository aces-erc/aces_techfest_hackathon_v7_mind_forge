import { Building2, MapPin, Ambulance, Map } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ComopnentB() {
  return (
    <div className="mx-auto px-20 space-y-6">
      <div id="hospital" className="bg-white rounded-lg shadow-sm border p-4">
        <h2 className="font-semibold mb-4">Select Hospital</h2>

        <div className="flex gap-2 mb-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search hospitals..."
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border rounded-lg hover:border-blue-500 cursor-pointer">
            <div className="flex gap-3">
              <Building2 className="h-10 w-10 text-blue-500" />
              <div>
                <h3 className="font-medium">City General Hospital</h3>
                <p className="text-sm text-gray-500">
                  Trauma Center, ICU, Emergency Care
                </p>
                <p className="text-xs text-gray-400">Open 24/7 • 2.5 km away</p>
              </div>
            </div>
            <Button size="sm">Select</Button>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg hover:border-blue-500 cursor-pointer">
            <div className="flex gap-3">
              <Building2 className="h-10 w-10 text-blue-500" />
              <div>
                <h3 className="font-medium">Heart & Stroke Center</h3>
                <p className="text-sm text-gray-500">
                  Cardiology, Neurology, Emergency Care
                </p>
                <p className="text-xs text-gray-400">Open 24/7 • 4.8 km away</p>
              </div>
            </div>
            <Button size="sm">Select</Button>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg hover:border-blue-500 cursor-pointer">
            <div className="flex gap-3">
              <Building2 className="h-10 w-10 text-blue-500" />
              <div>
                <h3 className="font-medium">Metro Emergency Hospital</h3>
                <p className="text-sm text-gray-500">
                  Emergency Care, Surgery, ICU
                </p>
                <p className="text-xs text-gray-400">Open 24/7 • 4.2 km away</p>
              </div>
            </div>
            <Button size="sm">Select</Button>
          </div>
        </div>

        <Button variant="outline" className="w-full mt-4">
          <Map className="h-4 w-4 mr-2" />
          View on Map
        </Button>
      </div>
      <div id="location" className="bg-white rounded-lg shadow-sm border p-4">
        <h2 className="font-semibold mb-4">Location Tracking</h2>

        <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center text-gray-500">
          Map loading...
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
