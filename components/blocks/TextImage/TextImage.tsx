import React from "react";
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";
import LightBeigeButton from "@/components/buttons/LightBeigeButton";
import BrownButton from "@/components/buttons/BrownButton";

export default function TextImage(props) {
  const { darkMode } = useContext(DarkContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className={`${darkMode ? "text-lightBeige" : "text-primaryPurple"} p-12 md:col-span-2 grid place-content-center`}>
        <h2 className="text-h2M md:text-h2D font-playfair text-left mb-8">{props.title}</h2>
        <div>
          <p className="max-w-96 text-p"> {props.text}</p>
          <br />
          <p className="max-w-96 text-p">{props.text2}</p>
          <br />
          <p className="max-w-96 text-p">{props.text3}</p>
        </div>
        <div className="flex justify-center mt-4">
          <a href={props.link}>{darkMode ? <BrownButton text={props.buttonText} /> : <LightBeigeButton text={props.buttonText} />}</a>
        </div>
      </div>
      <div className="h-full justify-center items-center hidden md:block">
        <img src="Clinic-pictures/_DSF1763.jpg" alt="" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}
