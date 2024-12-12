"use client";
import {
  Users,
  CheckCircle,
  XCircle,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Bell,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useUserStore } from "@/store/userStore";
import UserLocationAmbulance from "./UserLocationAmbulance";
import { useSocket } from "@/store/useSocket";
import { useEffect, useState } from "react";

export default function ComponentA() {
  const { user } = useUserStore();
  const { socket, setPatientDetail, patientDetail } = useSocket();
  const [decision, setDecision] = useState("");


  useEffect(() => {
    if (socket) {
      socket.on("bookAmbulance", (data) => {
        console.log("book call from patient: ", data)
        setPatientDetail(data);

      })
    }
  }, [socket])

  const handlePatientRequest = (decision) => {
    if (socket) {
      setDecision(decision)
      socket.emit("decision", decision)
    }
  }

  return (
    <div className="container mx-auto  space-y-6">
      <div className="flex justify-between items-center px-8 pt-8 pb-6 bg-slate-200">
        <h1 className="text-2xl font-semibold">Welcome, {user?.fullName}</h1>
        <div className="flex items-center gap-4">
          <Bell className="h-5 w-5 text-gray-500" />
          <LogOut className="h-5 w-5 text-gray-500" />
        </div>
      </div>
      <div className="px-24">
        <p className="text-2xl pb-[20px] font-semibold text-gray-900">
          View and manage incoming patient requests
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600">Pending Requests</p>
                <p className="text-3xl font-bold">5</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-600">Accepted Today</p>
                <p className="text-3xl font-bold">12</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-gray-600">Missed Requests</p>
                <p className="text-3xl font-bold">2</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div id="request">
          <div className="flex flex-col md:flex-row mt-6 mb-4">
            <h1 className=" text-2xl font-bold">Patient requests</h1>
          </div>
          <div className="space-y-4">
            {
              patientDetail &&
              <Card className="border-red-100 bg-red-50 mb-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-red-200 text-red-800 text-sm font-medium rounded">
                        EMERGENCY
                      </span>
                    </div>
                    <div className="space-x-2">
                      {
                        decision ? 
                        <Button variant="default" disable >{decision}</Button>
                        : 
                        <>
                          <Button variant="default" onClick={() => handlePatientRequest("Accepted")}>Accept</Button>
                          <Button variant="outline" onClick={() => handlePatientRequest("Declined")}>Decline</Button>
                        </>
                      }
                    
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {patientDetail?.user?.fullName} - {patientDetail?.disease}
                  </h3>
                  <h4>
                    {patientDetail?.user.phoneNumber}
                  </h4>
                </CardContent>
              </Card>
            }

            {
              !patientDetail &&
              <Card className="border-red-100 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Patient Not Available
                  </h3>
                </CardContent>
              </Card>
            }



          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Showing 1 to 2 of 8 results</p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline">1</Button>
              <Button variant="outline" className="bg-blue-50">
                2
              </Button>
              <Button variant="outline">3</Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <h2 className="font-semibold mb-4">Location Tracking</h2>

          <div className=" rounded-lg mb-4 flex items-center justify-center text-gray-500 ">
            <UserLocationAmbulance />
          </div>
        </div>
      </div>
    </div>
  );
}
