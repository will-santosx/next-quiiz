"use client"
import { LogOut } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const WarningButton = (props: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={() => {
        props.onClick;
      }}
      className="bg-warning hover:bg-opacity-70 w-[261px] h-[40px] rounded-[15px] transition-all text-neutral-white flex px-[10px] justify-between items-center"
    >
      <span className="text-[13px] font-medium uppercase">{props.text}</span>{" "}
      <LogOut />
    </button>
  );
};
