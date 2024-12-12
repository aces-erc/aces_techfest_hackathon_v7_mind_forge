"use client"
import {
  Bell,
  Brain,
  Car,
  Heart,
  HelpCircle,
  LogOut,
  Menu,
  User,
  Phone,
  MessageSquare,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store/userStore";
import { useEffect, useState } from "react";
import { useSocket } from "@/store/useSocket";
import { useToast } from "@/hooks/use-toast";

export default function ComponentA() {
  const { user } = useUserStore();
  const { socket, ambulanceList, setAmbulanceList, setAmbulanceLocation, ambulanceLocation, setPatientDisease, patientDisease } = useSocket();
  const [isBooked, setIsBooked] = useState("Book Now")
  const { toast } = useToast()
  const [selectHospital, setSelectHospital] = useState("");


  const handleHospitalSelect = (hospital) => {
    setSelectHospital(hospital);
  }

  useEffect(() => {
    if (socket) {
      socket.on('ambulanceLocation', (data) => {
        setAmbulanceList([...ambulanceList, data]);
        setAmbulanceLocation([...ambulanceLocation, data?.location]);
        console.log("Ambulance Location: ", data);
      });

      socket.on("decision", (data) => {
        setIsBooked(data);
        
      })
    }
  }, [socket])

  useEffect(() => {
    if(socket){
      if (isBooked === "Accepted") {
        const userLocation = JSON.parse(localStorage.getItem("userLocation"))
        const vehicleNumber = localStorage.getItem("ambulanceNo")
        socket.emit("notifyHospital", { user, location: userLocation, disease: patientDisease, hospital: selectHospital, ambulanceNo: vehicleNumber });
      }
    }
  }, [isBooked, socket])

  const bookNow = (vehicleNumber) => {
    if (socket) {
      console.log("book data send: ", localStorage.getItem("userLocation"), user)
      localStorage.setItem("ambulanceNo", vehicleNumber)
      if (!patientDisease || !selectHospital) {
        toast({
          title: "Error",
          description: "Please select disease and hospital",
          variant: "destructive",
        })
        return;
      }
      const userLocation = JSON.parse(localStorage.getItem("userLocation"))
      socket.emit('bookAmbulance', { user, location: userLocation, disease: patientDisease, hospital: selectHospital });
      setIsBooked("Pending Request")
      toast({
        title: "Success",
        description: "Booking Request Sent",
      })
    }
  }

  return (
    <main className="flex-1">
      <div className="flex justify-between items-center px-8 pt-8 pb-6 bg-slate-200">
        <h1 className="text-2xl font-semibold">Welcome, {user?.fullName}</h1>
        <div className="flex items-center gap-4">
          <Bell className="h-5 w-5 text-gray-500" />
          <LogOut className="h-5 w-5 text-gray-500" />
        </div>
      </div>

      <div id="emergency" className="px-20 pt-14">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Book Emergency Ambulance</h2>
          <Button variant="destructive" className="bg-red-500 hover:bg-red-600" onClick={() => socket}>
            SOS Emergency
          </Button>
        </div>

        <div className="mb-8">
          <h3 className="text-gray-600 mb-4">What's the health condition?</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button className={` p-6  ${patientDisease === "Heart Problem" ? "border shadow-lg border-green-800" : "border"} rounded-lg hover:border-blue-500 flex flex-col items-center gap-2`} onClick={() => setPatientDisease("Heart Problem")}>
              <Heart className="h-6 w-6 text-red-500" />
              <span>Heart Problem</span>
            </button>
            <button className={`p-6 ${patientDisease === "Accident" ? "border shadow-lg border-green-800" : "border"} rounded-lg hover:border-blue-500 flex flex-col items-center gap-2`} onClick={() => setPatientDisease("Accident")}>

              <Car className="h-6 w-6 text-orange-500" />
              <span>Accident</span>
            </button>
            <button className={`p-6 ${patientDisease === "Brain Stroke" ? "border shadow-lg border-green-800" : "border"} rounded-lg hover:border-blue-500 flex flex-col items-center gap-2`} onClick={() => setPatientDisease("Brain Stroke")}>

              <Brain className="h-6 w-6 text-purple-500" />
              <span>Brain Stroke</span>
            </button>
            <button className={`p-6 ${patientDisease === "Fracture" ? "border shadow-lg border-green-800" : "border"} rounded-lg hover:border-blue-500 flex flex-col items-center gap-2`} onClick={() => setPatientDisease("Fracture")}>

              <Menu className="h-6 w-6 text-blue-500" />
              <span>Fracture</span>
            </button>
            <button className={`p-6 ${patientDisease === "Breathing" ? "border shadow-lg border-green-800" : "border"} rounded-lg hover:border-blue-500 flex flex-col items-center gap-2`} onClick={() => setPatientDisease("Breathing")}>

              <User className="h-6 w-6 text-green-500" />
              <span>Breathing</span>
            </button>
            <button className={`p-6 ${patientDisease === "Other" ? "border shadow-lg border-green-800" : "border"} rounded-lg hover:border-blue-500 flex flex-col items-center gap-2`} onClick={() => setPatientDisease("Other")}>

              <HelpCircle className="h-6 w-6 text-gray-500" />
              <span>Other</span>
            </button>
          </div>
        </div>

        <div id="hospital" className="bg-white rounded-lg shadow-sm border p-4">
          <h2 className="font-semibold mb-4">Select Hospital</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg hover:border-blue-500 cursor-pointer">
              <div className="flex gap-3">
                <Building2 className="h-10 w-10 text-blue-500" />
                <div>
                  <h3 className="font-medium">City General Hospital</h3>
                  <p className="text-sm text-gray-500">
                    Trauma Center, ICU, Emergency Care
                  </p>
                  <p className="text-xs text-gray-400">Open 24/7</p>
                </div>
              </div>
              <Button size="sm" onClick={() => handleHospitalSelect("City General Hospital")}>{
                selectHospital === "City General Hospital" ? "Selected" : "Select"
              }</Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg hover:border-blue-500 cursor-pointer">
              <div className="flex gap-3">
                <Building2 className="h-10 w-10 text-blue-500" />
                <div>
                  <h3 className="font-medium">Heart & Stroke Center</h3>
                  <p className="text-sm text-gray-500">
                    Cardiology, Neurology, Emergency Care
                  </p>
                  <p className="text-xs text-gray-400">Open 24/7</p>
                </div>
              </div>
              <Button size="sm" onClick={() => handleHospitalSelect("Heart & Stroke Center")}>{
                selectHospital === "Heart & Stroke Center" ? "Selected" : "Select"
              }</Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg hover:border-blue-500 cursor-pointer">
              <div className="flex gap-3">
                <Building2 className="h-10 w-10 text-blue-500" />
                <div>
                  <h3 className="font-medium">Metro Emergency Hospital</h3>
                  <p className="text-sm text-gray-500">
                    Emergency Care, Surgery, ICU
                  </p>
                  <p className="text-xs text-gray-400">Open 24/7</p>
                </div>
              </div>
              <Button size="sm" onClick={() => handleHospitalSelect("Metro Emergency Hospital")}>
                {
                  selectHospital === "Metro Emergency Hospital" ? "Selected" : "Select"
                }
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-gray-600 mb-4 mt-4">Nearest Available Ambulances</h3>
          <div className="space-y-4">

            {
              ambulanceList.length > 0 && ambulanceList?.map((item, index) => (
                <div className="bg-white p-4 rounded-lg border flex justify-between items-center" key={index}>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Car className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-medium">Ambulance No:{item?.user?.vehicleNumber}</div>
                      <div className="text-sm text-gray-500">{item?.user?.fullName}</div>
                    </div>
                  </div>
                  <Button onClick={() => bookNow(item?.user?.vehicleNumber)}>{
                    isBooked}</Button>
                </div>
              ))
            }
            {
              ambulanceList.length === 0 &&
              <>
                <div className="bg-white p-4 rounded-lg border flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Car className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-medium">Ambulance Not Available</div>
                    </div>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <h2 className="font-semibold mb-4">Emergency Contacts</h2>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Hospital Emergency</p>
                  <p className="text-sm text-gray-500">+1 234 567 890</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Ambulance Driver</p>
                  <p className="text-sm text-gray-500">+1 234 567 890</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="destructive" className="w-full">
            Emergency Stop
          </Button>
          <Button className="w-full">
            <MessageSquare className="h-4 w-4 mr-2" />
            Send Message
          </Button>
        </div>
      </div>
    </main>
  );
}
