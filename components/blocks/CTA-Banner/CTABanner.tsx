import React from 'react';
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext"

function CTABanner(props) {
  const {darkMode, toggleDarkMode} = useContext(DarkContext);
  //const darkMode = useContext(DarkModeContext);
   console.log("Current darkMode value in CTABanner:", darkMode); // Tilføj denne linje

  return (
    <div className={`p-10 flex flex-col items-center justify-center ${darkMode ? 'bg-primaryPurple' : 'bg-mediumBeige'}`}>
      <p className={`text-3xl ${darkMode ? 'text-white' : 'text-primaryPurple'}`}>{props.titel}</p>
    </div>
  );
}

export default CTABanner;
