"use client";

import { useUserStore } from "@/store/userStore";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Card = ({ children, title, description, buttonText, buttonColor, role }) => {

  const {setUserRole} = useUserStore();
  const router = useRouter();

  const handleRoleClick = (role) => {
    setUserRole(role);
    router.push("/signup");
    console.log(role);
  }
  return <div className=" bg-white border-none rounded-xl border-t border-b border-gray-300 py-7 lg:py-9 px-6 lg:px-3 flex flex-col items-center text-center gap-4 lg:gap-5 shadow-lg register-card">
    <div
      className="flex items-center justify-center rounded-full w-20 h-20"
      style={{ backgroundColor: `${buttonColor}20` }}
    >
      {children}
    </div>
    <h2 className="text-2xl font-semibold">{title}</h2>
    <p className="text-gray-600 text-lg">{description}</p>
    <Button color={buttonColor} onClick={()=>handleRoleClick(role)}>{buttonText}</Button>
  </div>
}

export default Card;
