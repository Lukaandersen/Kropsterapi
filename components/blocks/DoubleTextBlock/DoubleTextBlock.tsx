import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext"

export default function DoubleTextBlock(props) {
    const {darkMode} = useContext(DarkContext);

    return(
        <div className="grid grid-cols1 md:grid-cols-2  ">
        <div className="p-10 text-primaryPurple">
        <h2 className="text-xl mb-3 text-center">{props.title1}</h2>
        <p>Kropsterapi er en behandlingsform som består af forskellige teknikker, for eksempel pulsering, tryk, stræk osv.
        Der er et stort fokus på åndedrættet og der behandles på muskler, meridianbaner, udvalgte zonepunkter mm.
        Sammenhæng er kropsterapiens tilgang, krop, sind og sjæl om du vil. Det er vigtigt at der er en let tilgængelig forbindelse mellem krop og psyke, fysik og tanke. Alle tilstande har påvirkning på andre dele af dig. Har du ondet et sted i din krop så mærkes det efterhånden også på psyken, tumler du med noget i dit hovede så vise det sig på et tidspunkt også i din krop.
        
       </p>
        </div>
        <div className={`${darkMode ? 'bg-primaryPurple' : 'bg-darkBeige'} p-10 text-primaryLight`}>
        <h2 className="text-xl mb-3 text-center">{props.title2}</h2>
        <p>Kropsterapi er en behandlingsform som består af forskellige teknikker, for eksempel pulsering, tryk, stræk osv.
        Der er et stort fokus på åndedrættet og der behandles på muskler, meridianbaner, udvalgte zonepunkter mm.
        Sammenhæng er kropsterapiens tilgang, krop, sind og sjæl om du vil. Det er vigtigt at der er en let tilgængelig forbindelse mellem krop og psyke, fysik og tanke. Alle tilstande har påvirkning på andre dele af dig. Har du ondet et sted i din krop så mærkes det efterhånden også på psyken, tumler du med noget i dit hovede så vise det sig på et tidspunkt også i din krop.
        </p>   
        </div>
        </div>
    )
}