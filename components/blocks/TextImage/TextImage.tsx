export default function (props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-primaryPurple p-16 ">
            <h2 className="text-3xl mb-12 font-playfair ">{props.title}</h2>
            <p className="font-josefin">Kropsterapi er en behandlingsform som består af forskellige teknikker, for eksempel pulsering, tryk, stræk osv.
        Der er et stort fokus på åndedrættet og der behandles på muskler, meridianbaner, udvalgte zonepunkter mm.
        Sammenhæng er kropsterapiens tilgang, krop, sind og sjæl om du vil. Det er vigtigt at der er en let tilgængelig forbindelse mellem krop og psyke, fysik og tanke. Alle tilstande har påvirkning på andre dele af dig. Har du ondet et sted i din krop så mærkes det efterhånden også på psyken, tumler du med noget i dit hovede så vise det sig på et tidspunkt også i din krop.</p>
            </div>
            <div className="h-2/3">
            <img src="Clinic-pictures/_DSF1754.jpg" alt="" className="cover "/>

            </div>
        </div>
    )
}