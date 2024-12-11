"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserInjured } from "@fortawesome/free-solid-svg-icons";
import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import { faHospital } from "@fortawesome/free-solid-svg-icons";

import Button from "@/components/Button";
import Card from "@/components/Card";

function ChooseRole({ children, color, onClick }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 font-sans md:p-10 md:pt-0">
      <h1 className="text-gray-900 text-[1.9rem] font-bold mt-4 mb-2">
        Registration
      </h1>
      <p className="text-[1.2rem] text-gray-600 mb-12 lg:mb-20">
        Choose your role and register
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:gap-6 md:w-[70vw]">
        <Card
          title="Patient"
          description="Register as a patient to book emergency ambulance services"
          buttonText="Register as Patient"
          buttonColor="#2563eb"
        >
          <FontAwesomeIcon
            icon={faUserInjured}
            className=" text-[34px] text-blue-600"
          />
        </Card>
        <Card
          title="Ambulance"
          description="Register as an ambulance driver to provide emergency services"
          buttonText="Register as Driver"
          buttonColor="#34A853"
        >
          <FontAwesomeIcon
            icon={faTruckMedical}
            className=" text-[28px] text-green-600"
          />
        </Card>
        <Card
          title="Hospital"
          description="Register your hospital to coordinate emergency services"
          buttonText="Register Hospital"
          buttonColor="#EA4335"
        >
          <FontAwesomeIcon
            icon={faHospital}
            className=" text-[28px] text-red-600"
          />
        </Card>
      </div>

      <div className="mt-7 text-center lg:mt-20">
        <p className="text-gray-600 mb-2">Already have an account?</p>
        <Button color="#1a202c">Login Here</Button>
      </div>
    </div>
  );
}

export default ChooseRole;
