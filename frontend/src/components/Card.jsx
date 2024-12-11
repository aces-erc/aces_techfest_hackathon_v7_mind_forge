"use client";

import Button from "./Button";

const Card = ({ children, title, description, buttonText, buttonColor }) => (
  <div className="border-none rounded-xl border-t border-b border-gray-300 py-7 lg:py-9 px-6 lg:px-3 flex flex-col items-center text-center gap-4 lg:gap-5 shadow-lg register-card">
    <div
      className="flex items-center justify-center rounded-full w-20 h-20"
      style={{ backgroundColor: `${buttonColor}20` }}
    >
      {children}
    </div>
    <h2 className="text-2xl font-semibold">{title}</h2>
    <p className="text-gray-600 text-lg">{description}</p>
    <Button color={buttonColor}>{buttonText}</Button>
  </div>
);

export default Card;
