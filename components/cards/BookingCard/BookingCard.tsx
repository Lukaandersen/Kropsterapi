
import BrownButton from "@/components/buttons/BrownButton";
import React from "react";
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";

// type Props = {
//   text: string;
//   btnText: string;
//   price: string;
//   titel: string;
// }

function BookingCard(props) {
  const { darkMode } = useContext(DarkContext);
  //const darkMode = useContext(DarkModeContext);
  console.log("Current darkMode value in BookingCard:", darkMode);

  return (
    <div className="flex justify-center">
      <div className={`mx-10 md:mx-6 my-2 flex flex-col h-[430px] md:h-[500px] lg:w-[250px] items-center justify-center relative ${darkMode ? "bg-mediumBeige" : "bg-darkBeige"}`}>
        <p className={`m-0 text-[26px] ${darkMode ? " text-primaryPurple" : "text-primaryPurple md:text-primaryLight"} `}>{props.titel}</p>
        <div className="relative mx-auto text-center w-64">
          <img src="3_sessioner.png" alt="Billede af noget spirituelt" className="w-full h-auto opacity-35 md:mx-auto md:w-[200px] " />
          <p className={`absolute top-0 left-0 right-0 bottom-0 md:relative flex items-center justify-center text-center text-md md:m-5 md:mt-0 ${darkMode ? "md:text-primaryPurple text-primaryLight" : "text-primaryLight"}`}>{props.text}</p>
        </div>
        <p className="text-[32px] font-bold">{props.price}</p>
        <BrownButton text={props.buttonText} />
        {props.children}
      </div>
    </div>
  );
}

export default BookingCard;
