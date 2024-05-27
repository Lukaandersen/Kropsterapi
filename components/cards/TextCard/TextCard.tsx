import React from "react";
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";
import styles from "./styles.module.css";
import Image from "next/image";

export default function TextCard(props) {
  const { darkMode } = useContext(DarkContext);

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      <div className="mx-6 my-2 flex flex-col items-center justify-center relative ">
        <Image width={250} height={250} src="/Clinic-pictures/_DSF1752.jpg" alt="" className="mb-6" style={{ objectFit: "cover", objectPosition: "center", width: "390px", height: "490px" }} />
        <h3 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-playfair text-h3M md:text-h3D shadow-sm">{props.title1}</h3>
        <p className={` ${darkMode ? "text-primaryLight" : "text-primaryPurple"} max-w-[390px] text-p text-center`}>{props.text1}</p>
      </div>
      <div className="mx-6 my-2 flex flex-col items-center justify-center relative ">
        <Image width={250} height={250} src="/Clinic-pictures/_DSF1789.jpg" alt="" className="mb-6" style={{ objectFit: "cover", objectPosition: "center", width: "390px", height: "490px" }} />
        <h3 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-playfair text-h3M md:text-h3D shadow-custom">{props.title2}</h3>
        <p className={`  ${darkMode ? "text-primaryLight" : "text-primaryPurple"} max-w-[390px] text-p text-center`}>{props.text2}</p>
      </div>
      <div className="mx-6 my-2 flex flex-col items-center justify-center relative ">
        <Image width={250} height={250} src="/Clinic-pictures/_DSF1710.jpg" alt="" className="mb-6" style={{ objectFit: "cover", objectPosition: "center", width: "390px", height: "490px" }} />
        <h3 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-playfair text-h3M md:text-h3D shadow-custom">{props.title3}</h3>
        <p className={`${darkMode ? "text-primaryLight" : "text-primaryPurple"} max-w-[390px] text-p text-center`}>{props.text3}.</p>
      </div>
    </div>
  );
}
