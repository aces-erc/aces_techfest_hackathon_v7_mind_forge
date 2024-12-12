"use client";

import Sidebar from "@/components/patient/Sidebar";
import ComponentA from "@/components/patient/ComponentA";
import ComponentB from "@/components/patient/ComponentB";
import ComponentC from "@/components/patient/ComponentC";

export default function Patient() {
   
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </div>
  );
}
