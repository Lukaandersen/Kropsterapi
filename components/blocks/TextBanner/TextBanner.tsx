import React from "react";
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";

function TextBanner(props) {
  const { darkMode } = useContext(DarkContext);

  return (
    <div className={`p-10 md:px-48 flex flex-col items-center justify-center ${darkMode ? "bg-primaryPurple" : "bg-darkBeige"}`}>
      <h3 className={`text-h3M md:text-h3D ${darkMode ? "lightBeige" : ""}`}>{props.titel}</h3>
      <p className={`text-p mt-5 text-center md:block hidden${darkMode ? "lightBeige" : ""}`}>{props.text}</p>
    </div>
  );
}

export default TextBanner;
