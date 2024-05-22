import LightBeigeButton from "@/components/buttons/LightBeigeButton";
import {useState } from "react";
import Link from "next/link";
import { CartCardWrapper } from "./CartcardWrapper";
import supabase from "@/app/config/supabaseClient";

export default function Cart(props) {
  const [showCalendar, setShowCalendar] = useState(false);

 async function bookSlot (evt) {
evt.preventDefault()
const { data, error } = await supabase
.from('Appointments')
.update({ booked: 'otherValue' })
.eq('id', '3')
.select()
console.log(data, error)
  }
 

  return (
    <div className="mt-24 text-primaryPurple ml-5">
      <Link href="/booking" className="flex gap-3">
        <ArrowIcon />
        <p>Gå tilbage til booking</p>
      </Link>
      <div className="mt-8 block md:grid md:grid-cols-[2fr,1fr]">
        <CartCardWrapper />
        <div className="bg-primaryLight m-6 pb-6 text-primaryPurple max-h-[660px]">
          <h1 className="text-center text-2xl py-4 px-4">Dine Betalingsoplysninger</h1>
          <form className="flex flex-col gap-5" onSubmit={bookSlot}>
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
            <button>knappelap</button>
          </form>
          <div className="flex flex-col items-center">
            <h2 className="text-xl pt-6 pb-3">Betalingsmetode</h2>
            <img src="betalingsdut.png" alt="betalingsmetoder" className="pb-0" />
            <Link href={props.link2}>
              <LightBeigeButton text={props.button2Text}></LightBeigeButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const ArrowIcon = ({ scaleX = 1 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="h-5 w-5" style={{ transform: `scaleX(${scaleX})` }}>
    <path strokeWidth="2" d="M11 19l-7-7 7-7" />
    <line x1="5" y1="12" x2="22" y2="12" strokeWidth="2" />
  </svg>
  
);

