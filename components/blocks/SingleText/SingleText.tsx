import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";
import ButtonLightBeige from "@/components/buttons/ButtonLightBeige";
import ButtonBrown from "@/components/buttons/ButtonBrown";

export default function SingleText(props) {
  const { darkMode } = useContext(DarkContext);
  console.log("Current darkMode value in BookingCard:", darkMode);
  return (
    <div className="grid py-5 md:px-28 px-5 place-items-center text-primaryPurple">
      <div>
        <h2 className="text-h2M md:text-h2D font-playfair mb-5 text-center">{props.title}</h2>
        <p className=" text-p">{props.paragraph}</p>
        <br />
        <p className="text-p">{props.paragraph2} </p>
        <br />
        <p className="text-p">{props.paragraph3}</p>
        <br />
        <p className="text-p">{props.paragraph4} </p>
        <br />
        <p className="text-p">{props.paragraph5} </p>
      </div>
      <div className="mt-4">
        <a href={props.link}>{darkMode ? <ButtonBrown text={props.buttonText} /> : <ButtonLightBeige text={props.buttonText} />}</a>
      </div>
    </div>
  );
}
