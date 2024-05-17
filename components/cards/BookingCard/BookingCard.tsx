import BrownButton from "@/components/buttons/BrownButton";
import React from "react";
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";
import BeigeButton from "@/components/buttons/BeigeButton";
import { ProductContext } from "@/app/ProductContext";

function BookingCard(props) {
  const product = {
    id: props.id,
    titel: props.titel,
    text: props.text,
    price: props.price,
  };
  const { inCart, setInCart } = useContext(ProductContext);
  const { darkMode } = useContext(DarkContext);
  console.log("Current darkMode value in BookingCard:", darkMode);

  return (
    <div className="flex justify-center">
      <div className={` md:mx-6 my-2 flex flex-col h-[430px] md:h-[500px] lg:w-[250px] items-center justify-center relative ${darkMode ? "bg-mediumBeige" : "bg-darkBeige"}`}>
        <p className={`mt-10 text-[26px] ${darkMode ? " text-primaryPurple" : "text-primaryPurple md:text-primaryLight"} `}>{props.titel}</p>
        <div className="relative mx-auto text-center w-64">
          <img src="3_sessioner.png" alt="Billede af noget spirituelt" className="w-full h-auto opacity-35 md:mx-auto md:w-[150px] " />
          <p className={`absolute top-0 left-0 right-0 bottom-0 md:relative flex items-center justify-center text-center text-md md:m-5 md:mt-0 ${darkMode ? "text-primaryPurple" : "text-primaryLight"}`}>{props.text}</p>
        </div>
        <p className="text-[32px] mt-0 font-bold">{props.price}</p>
        <button
          onClick={() => {
            setInCart(inCart.concat(product));
          }}
        >
          {darkMode ? <BeigeButton text={props.buttonText} /> : <BrownButton text={props.buttonText} />}
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default BookingCard;
