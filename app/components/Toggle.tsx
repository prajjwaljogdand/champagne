"use client";
import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import Button from "./Button";
import { MdSunny, MdBedtime } from "react-icons/md";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);
  const { colorTheme, setTheme } = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <div className="flex gap-2 items-center ">
      <span className="ml-2 text-sm font-medium text-gray-500">
        <MdSunny size={20} />
      </span>
      <label className="inline-flex relative items-center mr-5 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={darkMode}
          readOnly
        />
        <div
          onClick={() => toggleDarkMode(!darkMode)}
          className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
        ></div>
        <span className="ml-2 text-sm font-medium text-gray-500">
          <MdBedtime size={20} />
        </span>
      </label>
    </div>
  );
}
