import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}
const Button = ({ children }: ButtonProps) => {
  return (
    <button className="mr-5 mb-2 border p-3 rounded-xl font-bold hover:text-slate-700 transition-all duration-500 hover:bg-white ">
      {children}
    </button>
  );
};

export default Button;
