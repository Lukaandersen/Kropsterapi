import { useState, useContext } from "react";
import Calendar from "./Calendar";
import { InCartProvider, ProductContext } from "@/app/ProductContext";
import { DarkContext } from "@/app/DarkContext";
import BeigeButton from "@/components/buttons/BeigeButton";
import BrownButton from "@/components/buttons/BrownButton";



export function CartCard(props) {
    const [showCalendar, setShowCalendar] = useState(false);
    const toggleCalendar = () => {
      setShowCalendar(!showCalendar);
      console.log("toggled");
    };
  
    const { darkMode } = useContext(DarkContext);
    const { inCart, setInCart } = useContext(ProductContext);
  
    const handleRemoveCard = () => {
      setInCart(inCart.filter((item) => item.id !== props.id));
    };
  
    return (
      <div className={`${darkMode ? "bg-mediumBeige" : "bg-darkBeige"} grid grid-cols-1 md:grid-cols-3 justify-center md:justify-start m-6 md:max-h-[270px] relative `}>
        <div className="absolute top-0 right-0 m-4 cursor-pointer" onClick={handleRemoveCard}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18M6 18L18 6" stroke="black" stroke-width="2" />
          </svg>
        </div>
        <div className="max-w-64 min-w-28 place-items-center flex justify-center">
          <img src="3_sessioner.png" alt="billede af noget spirituelt" className="hidden md:block md:w-full md:h-auto md:justify-self-center opacity-35 p-5" />
        </div>
        <div className="mx-10 md:mx-6 my-0 flex flex-col md:h-[300px] md:w-[250px] justify-center relative">
          <p className={`${darkMode ? "text-primaryPurple" : "md:text-primaryPurple text-primaryLight"} m-0 text-3xl text-center md:text-left mt-5 md:mt-0`}>{props.titel}</p>
          <div className="relative mx-auto text-center w-full max-w-72 min-w-44 -mt-5 md:-mt-0">
            <img src="3_sessioner.png" alt="Billede af noget spirituelt" className="w-auto h-auto opacity-35 md:mx-auto md:hidden" />
            <p
              className={`${
                darkMode ? "text-primaryPurple" : "text-primaryLight md:text-primaryPurple"
              } absolute top-0 left-0 right-0 bottom-0 md:relative flex items-center justify-center text-center md:text-start md:col-span-1 text-lg md:text-md md:mt-5`}
            >
              {props.text}
            </p>
          </div>
        </div>
        <div className="flex  justify-center md:col-span-1  md:items-center pb-5">
          <div className="">
            <h4 className={`${darkMode ? "text-primaryPurple" : "text-primaryLight md:text-primaryPurple"} text-[32px] font-bold text-center`}>{props.price}</h4>
            <div onClick={toggleCalendar}>{darkMode ? <BeigeButton text={"Vælg tid"} /> : <BrownButton text={"Vælg tid"} />}</div>
          </div>
        </div>
        {showCalendar && (
          <div className="bg-primaryLight m-6 absolute grid items-center z-50">
            <Calendar />
          </div>
        )}
      </div>
    );
  }
  
  