import React from "react";
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";
import LightBeigeButton from "@/components/buttons/LightBeigeButton";
import BrownButton from "@/components/buttons/BrownButton";

export default function (props) {
  const { darkMode } = useContext(DarkContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className={`${darkMode ? "text-lightBeige" : "text-primaryPurple"}  p-12 md:col-span-2 grid justify-items-center place-content-center`}>
        <h2 className="text-3xl font-playfair text-center  mb-8">{props.title}</h2>
        <div>
          <p className="max-w-96"> {props.text}</p>
          <br />
          <p className="max-w-96">{props.text2}</p>
          <br />
          <p className="max-w-96">{props.text3}</p>
        </div>
        <a href={props.link}>{darkMode ? <BrownButton text={props.buttonText} /> : <LightBeigeButton text={props.buttonText} />}</a>
      </div>
      <div className="h-full">
        <img src="Clinic-pictures/_DSF1763.jpg" alt="" className="cover" />
      </div>
    </div>
  );
}
