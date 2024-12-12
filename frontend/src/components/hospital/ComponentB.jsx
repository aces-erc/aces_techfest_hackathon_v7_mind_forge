const ComponentB = () => {
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
              <th className="border border-gray-300 px-4 py-2">ETA</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-green-700">
                John Doe
              </td>
              <td className="border border-gray-300 px-4 py-2">
                9/10 (<span className="text-red-600">critical</span>)
              </td>
              <td className="border border-gray-300 px-4 py-2">AMMB-123</td>
              <td className="border border-gray-300 px-4 py-2">
                2.5km (8 mins)
              </td>
              <td className="border border-gray-300 px-4 py-2 text-red-700">
                En Route
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 text-green-700">
                Sarah Smith
              </td>
              <td className="border border-gray-300 px-4 py-2">
                6/10 (<span className="text-blue-600">Severe</span>)
              </td>
              <td className="border border-gray-300 px-4 py-2">AMMB-124</td>
              <td className="border border-gray-300 px-4 py-2">
                4km (15 mins)
              </td>
              <td className="border border-gray-300 px-4 py-2 text-red-700">
                Arriving
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="Name" className=" border-2 border-solid ">
        <h1>Live Tracking Map</h1>
        <div className=" m-4 h-[330px] w-full bg-blue-300 "></div>
      </div>
    </div>
  );
};

export default ComponentB;
