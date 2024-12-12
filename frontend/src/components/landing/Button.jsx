const Button = ({ children }) => {
  return (
    <button className="text-white py-[0.4rem] px-6 rounded-full transition-colors duration-200 bg-red-600 hover:bg-red-700 ">
      {children}
    </button>
  );
};

export default Button;
