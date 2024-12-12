"use client";

import { Phone, Edit, Plus, Trash2, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ComponentC() {
  return (
    <div className="px-20 mx-auto space-y-6">
      <Card id="status">
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Active Ambulance Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-500 text-xl">🚑</span>
              </div>
              <div>
                <p className="font-medium">Ambulance #A123</p>
                <p className="text-sm text-gray-500">Ambulance is on the way</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Estimated Time</p>
              <p className="font-medium text-blue-500">8:45</p>
            </div>
          </div>

          <div className="relative mb-8">
            <div className="absolute top-1/2 h-0.5 w-full bg-gray-200"></div>
            <div className="absolute top-1/2 h-0.5 w-1/2 bg-green-500"></div>
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-xs mt-1">Pickup</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-xs mt-1">Route</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-gray-200"></div>
                <span className="text-xs mt-1">Hospital</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-gray-200"></div>
                <span className="text-xs mt-1">Arrival</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Vehicle Information</h3>
              <p className="text-sm text-gray-500">
                Vehicle Type: Ambulance ICU Support
              </p>
              <p className="text-sm text-gray-500">
                Equipment: Full Emergency Kit
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Medical Staff</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Dr. Sarah Wilson</span>
                </div>
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Nurse Anderson</span>
                </div>
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="destructive" className="flex-1">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Report Emergency
            </Button>
            <Button className="flex-1">
              <Phone className="h-4 w-4 mr-2" />
              Contact Team
            </Button>
            <Button variant="outline" className="flex-1">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card id="settings">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium">
            Profile Settings
          </CardTitle>
          <Button variant="ghost" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 space-y-1">
              <Input defaultValue="John Doe" />
              <Input defaultValue="john@example.com" />
              <Input defaultValue="+1 234 567 890" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Emergency Contacts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-gray-500">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Emergency Contact
          </Button>
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Button className="flex-1">Save Changes</Button>
        <Button variant="outline" className="flex-1">
          Cancel
        </Button>
      </div>
    </div>
  );
}
