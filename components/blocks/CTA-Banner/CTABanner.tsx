import React from "react";
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";

function CTABanner(props) {
  const { darkMode } = useContext(DarkContext);
  //const darkMode = useContext(DarkModeContext);
  console.log("Current darkMode value in CTABanner:", darkMode); // Tilføj denne linje

  return (
    <div className={`p-10 flex flex-col items-center justify-center ${darkMode ? "bg-primaryPurple" : "bg-mediumBeige"}`}>
      <p className={`text-md md:text-2xl ${darkMode ? "text-white" : "text-primaryPurple"}`}>{props.titel}</p>
      <p className={`text-xs md:text-md mt-5 md:text-center ${darkMode ? "text-white" : "text-primaryPurple"}`}>{props.text}</p>
    </div>
  );
}

export default CTABanner;
