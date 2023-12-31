"use client";
import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import Button from "./Button";
import { MdSunny, MdBedtime } from "react-icons/md";
import Toggle from "./Toggle";

export default function ThemeToggler() {
  const { colorTheme, setTheme } = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <>
      <div className="p-4">
        <Toggle />
      </div>
    </>
  );
}
