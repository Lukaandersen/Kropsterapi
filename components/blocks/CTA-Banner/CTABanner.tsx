import React from "react";
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";

function CTABanner(props) {
  const { darkMode } = useContext(DarkContext);
  //const darkMode = useContext(DarkModeContext);
  console.log("Current darkMode value in CTABanner:", darkMode); // Tilføj denne linje

  return (
    <div>
      <a href="/booking">
        <div className={`p-10 flex flex-col items-center justify-center font-josefin ${darkMode ? "bg-primaryPurple" : "bg-mediumBeige"}`}>
          <p className={`text-md md:text-2xl ${darkMode ? "text-white" : "text-primaryPurple"}`}>{props.titel}</p>
        </div>
      </a>
    </div>
  );
}

export default CTABanner;
