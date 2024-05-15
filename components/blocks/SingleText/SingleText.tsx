import LightBeigeButton from "@/components/buttons/LightBeigeButton";
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";
import BrownButton from "@/components/buttons/BrownButton";

export default function SingleText(props) {
  const { darkMode } = useContext(DarkContext);
  //const darkMode = useContext(DarkModeContext);
  console.log("Current darkMode value in BookingCard:", darkMode);
  return (
    <div className="grid py-5 md:px-28 px-5 place-items-center text-primaryPurple">
      <div>
        <h2 className="text-3xl font-playfair mb-5 text-center">{props.title}</h2>
        <p className="font-josefin">{props.paragraph}</p>
        <br />
        <p>{props.paragraph2} </p>
        <br />
        <p>{props.paragraph3}</p>
        <br />
        <p>{props.paragraph4} </p>
        <br />
        <p>{props.paragraph5} </p>
      </div>
      <div className="mt-4">
        <a href={props.link}>{darkMode ? <BrownButton text={props.buttonText} /> : <LightBeigeButton text={props.buttonText} />}</a>
      </div>
    </div>
  );
}
