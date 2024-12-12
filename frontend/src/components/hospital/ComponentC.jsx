const ComponentC = () => {
  return (
    <div className=" mx-24 mt-8  border-solid border-[1px] border-[#615f5f] mb-10 rounded-lg">
      <div className="flex flex-row items-center justify-between p-4">
        <h1>Equipment status</h1>
        <p className="text-blue-700"> General report</p>
      </div>
      <hr />
      <div
        id="status"
        className="flex flex-row items-center justify-around p-4"
      >
        <div className=" border-red-400 border-solid border-2 bg-red-200 p-3 rounded-xl flex flex-col gap-3">
          <h1>Critical Equipment</h1>
          <div className="flex gap-[40px]">
            <span>Ventilators</span>
            <span>8/10</span>
          </div>
        </div>
        <div className="border-yellow-400 border-solid border-2 bg-yellow-200 p-3 rounded-xl  flex flex-col gap-3">
          <h1>Emergency Supplies</h1>
          <div className="flex gap-[40px]">
            <span>Medical Kits</span>
            <span>15/20</span>
          </div>
        </div>
        <div className="border-green-400 border-solid border-2 bg-green-200 p-3 rounded-xl  flex flex-col gap-3">
          <h1>General Resources</h1>
          <div className="flex gap-[40px]">
            <span>Beds Available</span>
            <span>25/30</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentC;
