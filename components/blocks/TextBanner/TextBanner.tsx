import React from "react";
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";

function TextBanner(props) {
  const { darkMode } = useContext(DarkContext);

  return (
    <div className={`p-10 md:px-48 flex flex-col items-center justify-center ${darkMode ? "bg-primaryPurple" : "bg-darkBeige"}`}>
      <p className={`text-md md:text-2xl ${darkMode ? "lightBeige" : ""}`}>{props.titel}</p>
      <p className={`text-xs md:text-md mt-5 text-center md:block hidden${darkMode ? "lightBeige" : ""}`}>{props.text}</p>
    </div>
  );
}

export default TextBanner;
