import React from 'react';
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext"
import LightBeigeButton from "@/components/buttons/LightBeigeButton";

export default function (props) {
    const {darkMode} = useContext(DarkContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className={`${darkMode ? 'text-lightBeige':'text-primaryPurple'}  p-12 md:col-span-2 grid justify-items-center place-content-center`}>
            <h2 className="text-3xl font-playfair  mb-8">{props.title}</h2>
            <div>
            <p className="font-josefin max-w-96">For at nå ned til roden af hvad det er der gør ondt og hvorfor det bliver ved med at vende tilbage selvom at man har været en tur til massagekliniken. 
            Så er det formegentligt noget psykisk der presser dig. Og hvis ikke det bliver løst ved roden, så kommer det tilbage.
</p> 
<br />
<p className="font-josefin max-w-96">Kropetrapi er ideologien om at krop og sind hænger sammen. Som kendt fra fx zoneterapi, så er der flere områder og punkter i vores kroppe som hænger sammen med vores mentale velvære. 
Grunden til at vælge kropsterapi, er for at komme hele vejen rundt, og komme problemerne til livs.
</p></div>
<LightBeigeButton />
            </div>
            <div className="h-2/4">
            <img src="Clinic-pictures/_DSF1754.jpg" alt="" className="cover "/>

            </div>
        </div>
    )
}