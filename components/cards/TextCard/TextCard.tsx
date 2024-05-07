import React from 'react';
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext"
import styles from "./styles.module.css";

export default function TextCard (props) {
    const {darkMode} = useContext(DarkContext);

    return (
        <div className='grid grid-cols-3'>
        <div className="mx-6 my-2 flex flex-col items-center justify-center relative ">  
        <img src="Clinic-pictures/_DSF1752.jpg" alt="" className="mb-6" style={{ width: "390px", height: "490px" }}/>
        <p className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-playfair text-3xl shadow-sm">{props.title1}</p>
        <p className={` ${darkMode ? 'text-white' : 'text-primaryPurple'}`}>For at nå ned til roden af hvad det er der gør ondt og hvorfor det bliver ved med at vende tilbage selvom at man har været en tur til massagekliniken. Så er det formegentligt noget psykisk der presser dig. Og hvis ikke det bliver løst ved roden, så kommer det tilbage.</p>
        </div>
        <div className="mx-6 my-2 flex flex-col items-center justify-center relative ">  
        <img src="Clinic-pictures/_DSF1789.jpg" alt="" className="mb-6" style={{ width: "390px", height: "490px" }}/>
        <p className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-playfair text-3xl shadow-custom">{props.title2}</p>
        <p className={`  ${darkMode ? 'text-white' : 'text-primaryPurple'}`}>For at nå ned til roden af hvad det er der gør ondt og hvorfor det bliver ved med at vende tilbage selvom at man har været en tur til massagekliniken. Så er det formegentligt noget psykisk der presser dig. Og hvis ikke det bliver løst ved roden, så kommer det tilbage.</p>
        </div>
        <div className="mx-6 my-2 flex flex-col items-center justify-center relative ">  
        <img src="Clinic-pictures/_DSF1710.jpg" alt="" className="mb-6" style={{ width: "390px", height: "490px" }}/>
        <p className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-playfair text-3xl">{props.title3}</p>
        <p className={`${darkMode ? 'text-white' : 'text-primaryPurple'}`}>For at nå ned til roden af hvad det er der gør ondt og hvorfor det bliver ved med at vende tilbage selvom at man har været en tur til massagekliniken. Så er det formegentligt noget psykisk der presser dig. Og hvis ikke det bliver løst ved roden, så kommer det tilbage.</p>
        </div>
        </div>
    )
}