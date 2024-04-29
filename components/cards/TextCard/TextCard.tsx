export default function TextCard (props) {

    return (
        <div className="mx-6 my-2 flex flex-col items-center justify-center relative ">  
        <img src="Clinic-pictures/_DSF1706.jpg" alt="" className="mb-6 w-64 "/>
        <p className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-playfair text-2xl">{props.title}</p>
        <p className="text-primaryPurple max-w-64">For at nå ned til roden af hvad det er der gør ondt og hvorfor det bliver ved med at vende tilbage selvom at man har været en tur til massagekliniken. Så er det formegentligt noget psykisk der presser dig. Og hvis ikke det bliver løst ved roden, så kommer det tilbage.</p>
        </div>
    )
}