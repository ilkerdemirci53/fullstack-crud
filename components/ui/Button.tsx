import React, { ReactNode } from "react";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
  isCompleted?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const Button = ({
  disabled,
  type,
  text,
  onClick,
  actionButton,
  isCompleted,
  style,
}: buttonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`text-black border border-gray-500 px-12 py-4 rounded-md tracking-widest uppercase font-bold hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 w-[400px] md:w-auto ${
          actionButton
            ? isCompleted
              ? "bg-green-400 rounded-full px-4 hover:bg-green-700 border-none"
              : "bg-red-500 rounded-full px-4 hover:bg-red-600 border-none"
            : ""
        }`}
        style={style}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
