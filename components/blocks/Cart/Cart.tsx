import { useState, useContext } from "react";
import Link from "next/link";
import { CartCardWrapper } from "./CartcardWrapper";
import supabase from "@/app/config/supabaseClient";
import { ProductContext } from "@/app/ProductContext";
import { useRouter } from "next/navigation";

export default function Cart(props) {
  const router = useRouter();
  const [chosenTime, setChosenTime] = useState<Record<string, any>>({});  const [availableSlots, setAvailableSlots] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { clearCart, setName, setEmail } = useContext(ProductContext);

  const handleSendEmail = async (name, email, phone, message, time, date) => {
    try {
      const response = await fetch("https://formsubmit.co/ajax/luka_andersen@hotmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message,
          time: time, 
          date: date, 
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        console.log("Formularen blev indsendt med succes!");
      } else {
        console.log("Der opstod en fejl under indsendelse af formularen.");
      }
    } catch (error) {
      console.error("Der opstod en fejl:", error);
    }
  };
  

  async function bookSlot(evt) {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const time = chosenTime.time;
    const date = chosenTime.date; 


    const bookedData = {
      name,
      email,
      phone,
      message,
      time,
    date,
    };

    setName(name);
    setEmail(email);
    const { data, error } = await supabase.from("Appointments").update({ booked: bookedData }).eq("id", chosenTime.id).select();
    console.log(data, error);
    
    if (!error) {
      await handleSendEmail(name, email, phone, message, time, date );
      router.push('/tak-for-din-ordre');
      clearCart();
    }
  }
  

  return (
    <div className="mt-24 text-primaryPurple ml-5">
      <Link href="/booking" className="flex gap-3">
        <ArrowIcon />
        <p className="text-p">Gå tilbage til booking</p>
      </Link>
      <div className="mt-8 block md:grid md:grid-cols-[2fr,1fr]">
        <CartCardWrapper setChosenTime={setChosenTime} />
        <div className="bg-primaryLight m-6 pb-6 text-primaryPurple max-h-[680px]">
          <h3 className="text-center text-h3M md:text-h3D py-4 px-4">Dine Betalingsoplysninger</h3>
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
            <div className="mb-2 flex flex-col">
              <p className="pl-4"><strong>Valgt tid:</strong> {chosenTime.time}</p>
              <p className="pl-4"><strong>Valgt dato:</strong> {chosenTime.date}</p>
            </div>
            <button className="text-primaryPurple bg-primaryLight josefin font-bold text-md md:text-xl text-center py-3 px-1 mx-16 rounded-xl shadow-md custom-shadow my-2" type="submit" >
    {props.button2Text}
  </button> 
            <style jsx>{`
              .custom-shadow {
                box-shadow: -2px -2px 3px rgba(245, 245, 245, 1), 2px 2px 1px rgba(164, 151, 133, 1);
              }
            `}</style>
          </form>
          <div className="flex flex-col items-center">
            <h2 className="text-xl pt-6 pb-3">Betalingsmetode</h2>
            <img src="betalingsdut.png" alt="betalingsmetoder" className="pb-0" />
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
