import React from "react";
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";

function CTABanner(props) {
  const { darkMode } = useContext(DarkContext);
  console.log("Current darkMode value in CTABanner:", darkMode);

  return (
    <div>
      <a href="/booking">
        <div className={`p-7 md:p-10 flex flex-col items-center justify-center josefin ${darkMode ? "bg-primaryPurple" : "bg-mediumBeige"}`}>
          <h2 className={`text-h2M md:text-h2D ${darkMode ? "text-white" : "text-primaryPurple"}`}>{props.titel}</h2>
        </div>
      </a>
    </div>
  );
}

export default CTABanner;
