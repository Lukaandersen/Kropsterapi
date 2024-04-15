import styles from "./styles.module.css";

export default function Footer() {
return (
    <div className="bg-lightBeige font-josefin">
    <div className=" justify-center  text-center grid gap-12 py-10">
        <hr className="bg-greyPurple h-0.5 w-96 "/>
        <h3 className="text-darkPurple font-semibold">Hvad er Kropsterapi?</h3>
        <h3 className="text-darkPurple">Booking</h3>
        <h3 className="text-darkPurple">Gavekort</h3>
        <h3 className="text-darkPurple">Om mig</h3>
        <div className="flex justify-center">
          <img src="instagram-purple.png" alt="instagram-logo" />
        </div>        
        <hr className="bg-greyPurple h-0.5"/>

    </div>
    <div className="flex justify-between px-5 text-darkPurple ">
        <p>Marstalsgade 53, 2100 Kbh Ø</p>
        <p>Cookiepolitik</p>
        <p>Privatlivspolitik</p>
        <p>CVR:12345678</p>
    </div>
    </div>
)
}