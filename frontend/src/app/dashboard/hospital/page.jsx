import Sidebar from "@/components/hospital/Sidebar";
import ComponentA from "@/components/hospital/ComponentA";

const page = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full">
        <ComponentA />
      </div>
    </div>
  );
};

export default page;
