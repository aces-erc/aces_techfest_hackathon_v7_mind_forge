import LoginForm from "@/components/auth/login/Login";
import NavBar from "@/components/landing/NavBar";
import React from "react";

const Page = () => {
  return (
    <div>
      <NavBar btnContent={"Signup"} hrefLink={"/chooserole"} />
      <div className="flex h-[90vh] items-center justify-center  bg-slate-200">
        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
