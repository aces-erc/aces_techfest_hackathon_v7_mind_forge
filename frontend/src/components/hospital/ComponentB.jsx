"use client"

import { useSocket } from "@/store/useSocket";
import { useEffect } from "react";
import UserLocationHospital from "./UserLocationHospital";

const ComponentB = () => {

  const { socket, incommingPatient, setIncommingPatient } = useSocket();


  useEffect(() => {
    if (socket) {
      socket.on("notifyHospital", (data) => {
        console.log("Notify hospital: ", data)
        setIncommingPatient(data);
      })
    }
  }, [socket])

  return (
    <div className="mx-24 mt-8">
      <div>
        <h1 className="text-2xl pb-2">Active Emergecy Cases</h1>
        <table
          id="emergency"
          className="table-auto border-collapse border border-gray-300 w-full text-left mb-4"
        >
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Patient Info</th>
              <th className="border border-gray-300 px-4 py-2">Condition</th>
              <th className="border border-gray-300 px-4 py-2">Ambulance</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-green-700">
                {incommingPatient?.user?.fullName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {
                  incommingPatient?.disease
                }
              </td>
              <td className="border border-gray-300 px-4 py-2">{
                incommingPatient && "#" + incommingPatient?.ambulanceNo
              }</td>
              <td className="border border-gray-300 px-4 py-2 text-red-700">
                {
                  incommingPatient && "Incomming"
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="Name" className=" border-2 border-solid ">
        <h1>Tracking Map</h1>
        <div className=" rounded-lg mb-4 flex items-center justify-center text-gray-500 ">
          <UserLocationHospital />
        </div>
      </div>
    </div>
  );
};

export default ComponentB;
