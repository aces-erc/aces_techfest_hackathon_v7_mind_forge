import Sidebar from "@/components/hospital/Sidebar";
import ComponentA from "@/components/hospital/ComponentA";
import ComponentB from "@/components/hospital/ComponentB";
import ComponentC from "@/components/hospital/Componentc";

const page = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full">
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </div>
  );
};

export default page;
