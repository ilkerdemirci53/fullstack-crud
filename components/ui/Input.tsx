import React from "react";

interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <>
      <input
        className="w-full px-12 py-4 font-bold mr-2 border-gray-500 border max-w-[400px] rounded-md bg-transparent md:max-w-[500px]"
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
      />
    </>
  );
};

export default Input;
