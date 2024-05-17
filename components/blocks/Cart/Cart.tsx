import LightBeigeButton from "@/components/buttons/LightBeigeButton";
import BrownButton from "@/components/buttons/BrownButton";
import BeigeButton from "@/components/buttons/BeigeButton";
import Timeslot from "./Timeslot";
import Calendar from "./Calendar";
import { useCallback, useContext, useState } from "react";
import { InCartProvider, ProductContext } from "@/app/ProductContext";
import BookingCard from "@/components/cards/BookingCard/BookingCard";
import Link from "next/link";

import { DarkContext } from "@/app/DarkContext";

export default function Card(props) {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
    console.log("toggled");
  };

  return (
    <div className="mt-24 text-primaryPurple ml-5">
      <Link href="/booking" className="flex gap-3">
        <ArrowIcon />
        <p>Gå tilbage til booking</p>
      </Link>
      <div className="mt-8 block md:grid md:grid-cols-[2fr,1fr]">
        <CartCardWrapper></CartCardWrapper>

        <div className="bg-primaryLight m-6 pb-6 text-primaryPurple">
          <h1 className="text-center text-2xl py-4 px-4">Dine Betalingsoplysninger</h1>
          <form className="flex flex-col gap-5" action="">
            <div className="mb-2 flex flex-col">
              <label className="pl-4" htmlFor="name">
                Navn
              </label>
              <input name="name" type="text" className="bg-gray-300 p-2 ml-4 w-full max-w-[calc(100%-2rem)]" required />
            </div>
            <div className="mb-2 flex flex-col">
              <label className="pl-4" htmlFor="email">
                Email
              </label>
              <input name="email" type="email" className="bg-gray-300 p-2 ml-4 w-full max-w-[calc(100%-2rem)]" required />
            </div>
            <div className="mb-2 flex flex-col">
              <label className="pl-4" htmlFor="phone">
                Tlf nr.
              </label>
              <input name="phone" type="tel" className="bg-gray-300 p-2 ml-4 w-full max-w-[calc(100%-2rem)]" required />
            </div>
            <div className="mb-2 flex flex-col">
              <label htmlFor="message" className="pl-4">
                Besked
              </label>
              <textarea id="message" className="bg-gray-300 p-2 ml-4 w-full max-w-[calc(100%-2rem)]" />
            </div>
          </form>
          <div className="flex flex-col items-center">
            <h2 className="text-xl pt-6 pb-3">Betalingsmetode</h2>
            <img src="betalingsdut.png" alt="betalingsmetoder" className="pb-4" />
            <Link href={props.link2}>
              <LightBeigeButton text={props.button2Text}></LightBeigeButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const ArrowIcon: React.FC<{ scaleX?: number }> = ({ scaleX = 1 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" style={{ transform: `scaleX(${scaleX})` }}>
    <path strokeWidth="2" d="M11 19l-7-7 7-7" />
    <line x1="5" y1="12" x2="22" y2="12" strokeWidth="2" />
  </svg>
);

export function CartCard(props) {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
    console.log("toggled");
  };

  const { darkMode } = useContext(DarkContext);

  return (
    <div>
      <div className={`${darkMode ? "bg-mediumBeige" : "bg-darkBeige"} grid grid-cols-1 md:grid-cols-3 justify-center md:justify-start m-6 md:max-h-[270px]`}>
        <div className="max-w-64 min-w-28 items-center flex justify-center">
          <img src="3_sessioner.png" alt="billede af noget spirituelt" className="hidden md:block  md:w-full md:h-auto md:justify-self-center opacity-35 p-5" />
        </div>
        <div className="mx-10 md:mx-6 my-0 flex flex-col md:h-[300px] md:w-[250px] justify-center md:justify-center md:items-center relative">
          <p className={`${darkMode ? " text-primaryPurple" : "md:text-primaryPurple text-primaryLight"} m-0 text-[32px] text-center mt-5`}>{props.titel}</p>
          <div className={`${darkMode ? "text-primaryPurple" : "text-primaryLight md:text-primaryPurple"} absolute top-0 left-0 right-0 bottom-0 md:relative flex items-center justify-center text-center md:text-start text-md md:m-5 md:mt-0`}></div>
          <div className="relative mx-auto text-center w-full max-w-72 min-w-44 -mt-5 md:-mt-0">
            <img src="3_sessioner.png" alt="Billede af noget spirituelt" className="w-auto h-auto opacity-35 md:mx-auto md:hidden" />
            <p className={`${darkMode ? "text-primaryPurple" : "text-primaryLight md:text-primaryPurple"} absolute top-0 left-0 right-0 bottom-0 md:relative flex items-center justify-center text-center md:text-start text-md md:m-5 md:mt-0`}>
              {props.text}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center md:col-span-1 md:items-center pb-5">
          <div className="items-center justify-center">
            <h4 className={`${darkMode ? "text-primaryPurple" : "text-primaryLight md:text-primaryPurple"} text-[32px] font-bold text-center -mt-6`}>{props.price}</h4>
            <div onClick={toggleCalendar}>{darkMode ? <BeigeButton text={props.buttonText} /> : <BrownButton text={props.buttonText} />}</div>
          </div>
        </div>

        {showCalendar && (
          <div className="bg-primaryLight m-6 absolute grid items-center">
            <Calendar></Calendar>
          </div>
        )}
      </div>
    </div>
  );
}

export function CartCardWrapper() {
  const { inCart, setInCart } = useContext(ProductContext);
  console.log(inCart);
  return (
    <section>
      {inCart.map((prod) => (
        <CartCard titel={prod.titel} text={prod.text} price={prod.price} key={prod.id} />
      ))}
    </section>
  );
}

{
  /* <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:justify-start bg-darkBeige m-6 md:max-h-[300px]">
          <img src="3_sessioner.png" alt="billede af noget spirituelt" className="hidden md:block w-full h-full md:w-full md:h-auto md:justify-self-start opacity-35" />
          <div className="mx-10 md:mx-6 my-2 flex flex-col h-[430px] md:h-[300px] md:w-[250px] justify-center md:justify-center md:items-center relative">
            <p className="m-0 text-[32px] md:text-primaryPurple text-primaryLight">Enkelt Session</p>
            <div className="relative mx-auto text-center w-64">
              <img src="3_sessioner.png" alt="Billede af noget spirituelt" className="w-full h-auto opacity-35 md:mx-auto md:hidden" />
              <p className="absolute top-0 left-0 right-0 bottom-0 md:relative flex items-center justify-center text-center md:text-start text-md md:m-5 md:mt-0 text-primaryLight md:text-primaryPurple">
                En enkelt session indebærer en indledende samtale, samt 45 minutters Kropsterapi inklusiv vand og The efter behov.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center md:col-span-1 md:items-center">
            <div className="items-center">
              <p className="text-[32px] font-bold text-center text-primaryLight md:text-primaryPurple">400 DKK</p>
              <div onClick={toggleCalendar}>
              <BrownButton text={props.buttonText}></BrownButton>
              </div>
            </div>
          </div>
        </div>
      </div> */
}

{
  /* {showCalendar && (
        <div className="bg-primaryLight m-6 absolute grid items-center">
          <Calendar></Calendar>
        </div>
      )} */
}
