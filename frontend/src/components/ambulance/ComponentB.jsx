const ComponentB = () => {
  return (
    <>
      <main id="hospital" className="flex flex-col px-24">
        <div className=" flex items-center justify-around border-solid border-[1px] rounded-md border-[#b6b0b0] px-4 py-5 mt-4">
          <div className="flex flex-col gap-2 text-slate-500">
            <label htmlFor="">Speciality required</label>
            <select
              name=""
              id=""
              className="border-2 border-solid border-black rounded-lg p-2"
            >
              <option value="">Cardiology</option>
              <option value="">Trauma Center</option>
              <option value="">Emergency Care</option>
              <option value="">General Medicine</option>
            </select>
          </div>
          <div className="flex  flex-col gap-2 text-slate-500">
            <label htmlFor="">Sort By</label>
            <select
              name=""
              id=""
              className="border-2 border-solid border-black rounded-lg p-2"
            >
              <option value="">Distance</option>
              <option value="">Emergency Readiness</option>
              <option value="">Available Specialities</option>
              <option value="">Waiting time</option>
            </select>
          </div>
          <div className="flex  flex-col gap-2 text-slate-500">
            <label htmlFor="">Max distance</label>
            <select
              name=""
              id=""
              className="border-2 border-solid border-black rounded-lg p-2"
            >
              <option value="">5km</option>
              <option value="">10km</option>
              <option value="">15km</option>
              <option value="">20km</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-3 my-5">
          <div className=" border-2 border-[#c5c1c1] rounded-lg flex flex-row items-center justify-between px-3 py-4">
            <div>
              <h1>City General Hospital</h1>
              <span>Distance</span>
              <br />
              <span>2.5km</span>
            </div>
            <div>
              <span>ETA</span>
              <br />
              <span>8 mins</span>
            </div>
            <div>
              <span>Emergency bed </span>
              <br />
              <span>12 availables</span>
            </div>
            <div>
              <span>cardic specialists</span>
              <br />
              <span>on duty</span>
            </div>
            <button className="rounded-lg px-3 py-3 bg-blue-400 text-white hover:bg-blue-600">
              Select Hospital
            </button>
          </div>
          <div className=" border-2 border-[#c5c1c1] rounded-lg flex items-center justify-between px-3 py-4 ">
            <div>
              <h1>City General Hospital</h1>
              <span>Distance</span>
              <br />
              <span>2.5km</span>
            </div>
            <div>
              <span>ETA</span>
              <br />
              <span>8 mins</span>
            </div>
            <div>
              <span>Emergency bed </span>
              <br />
              <span>12 availables</span>
            </div>
            <div>
              <span>cardic specialists</span>
              <br />
              <span>on duty</span>
            </div>
            <button className="rounded-lg px-3 py-3 bg-blue-400 text-white hover:bg-blue-600">
              Select Hospital
            </button>
          </div>
          <div className=" border-2 border-[#c5c1c1] rounded-lg flex items-center justify-between px-3 py-4">
            <div>
              <h1>City General Hospital</h1>
              <span>Distance</span>
              <br />
              <span>2.5km</span>
            </div>
            <div>
              <span>ETA</span>
              <br />
              <span>8 mins</span>
            </div>
            <div>
              <span>Emergency bed </span>
              <br />
              <span>12 availables</span>
            </div>
            <div>
              <span>cardic specialists</span>
              <br />
              <span>on duty</span>
            </div>
            <button className="rounded-lg px-3 py-3 bg-blue-400 text-white hover:bg-blue-600">
              Select Hospital
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ComponentB;
