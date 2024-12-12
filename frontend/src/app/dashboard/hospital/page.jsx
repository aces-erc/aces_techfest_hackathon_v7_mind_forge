import Sidebar from "@/components/hospital/Sidebar";
import ComponentA from "@/components/hospital/ComponentA";
import ComponentB from "@/components/hospital/ComponentB";
import ComponentC from "@/components/hospital/ComponentC";

const Page = () => {
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

export default Page;
