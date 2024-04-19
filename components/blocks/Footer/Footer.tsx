import styles from "./styles.module.css";

export default function Footer() {
return (
    <div className="bg-lightBeige flex flex-col items-center py-4">
    <div className="bg-darkBeige h-0.5 my-9 w-2/3 grid justify-center"></div>

    <div className=" text-primaryPurple grid grid-cols-1 gap-5 md:grid-cols-3 text-center md:h-56">
        <div className="grid gap-5 justify-between">
            <h3 className="">Find mig her</h3>
            <div className="grid grid-cols-2  justify-items-center gap-6 px-16">
            <img src="FacebookLight.png" alt="" />
            <img src="instagramLight.png" alt="" />
            </div>
            <h3>Marstalsgade 2100 Østerbro</h3>
        </div>
        <div className="grid gap-3">
            <h3>Hvad er Kropsterapi?</h3>
            <h3>Om Mig</h3>  
            <h3>Booking</h3>   
        </div>
        <div className="grid gap-3">
            <h3>Cookiepolitik</h3>
            <h3>Privatpolitik</h3>
            <h3>CVR: 12345678</h3>
        </div>
    
    </div>
</div>
)
}