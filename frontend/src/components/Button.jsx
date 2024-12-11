"use client";

const Button = ({ children, color, onClick }) => (
  <button
    onClick={onClick}
    className={`py-2 px-5 bg-[${color}] text-white border-none rounded-md cursor-pointer w-full font-normal`}
    style={{ backgroundColor: color }}
  >
    {children}
  </button>
);

export default Button;
