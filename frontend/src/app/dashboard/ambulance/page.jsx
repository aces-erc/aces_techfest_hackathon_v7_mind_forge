"use client";

import Sidebar from "@/components/ambulance/Sidebar";
import ComponentA from "@/components/ambulance/ComponentA";
import ComponentB from "@/components/ambulance/ComponentB";



const Page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <ComponentA />
        <ComponentB />
      </div>
    </div>
  );
};

export default Page;
