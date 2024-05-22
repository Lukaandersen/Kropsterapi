import LightBeigeButton from "@/components/buttons/LightBeigeButton";
import { useState } from "react";

export default function Kontaktformular(props) {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSendEmail = async (event) => {
    event.preventDefault(); // Forhindrer standardformularindsendelse
    console.log("handleSendEmail function called");

    // Hent værdierne fra inputfelterne
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Udfør Fetch-anmodningen til FormSubmit API
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
        }),
      });

      if (response.ok) {
        // Nulstil formularen og vis succesbesked
        document.getElementById("contactForm").reset();
        setSubmitSuccess(true);
        console.log("Formularen blev indsendt med succes!");
      } else {
        console.log("Der opstod en fejl under indsendelse af formularen.");
      }
    } catch (error) {
      console.error("Der opstod en fejl:", error);
    }
  };

  return (
    <div className="m-9">
      <h2 className="text-center md:text-left text-h2M md:text-h2D pb-6 md:pl-2 font-playfair text-primaryPurple">Kontakt</h2>
      <p className="pb-6 text-p md:pl-2 text-primaryPurple">Fortæl lidt om dig selv og din situation - så tager jeg kontakt til dig</p>
      <form id="contactForm" onSubmit={handleSendEmail} className="flex flex-col gap-4 bg-primaryLight rounded-lg p-5">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-primaryPurple">
            Navn
          </label>
          <input type="text" id="name" className=" p-2 bg-gray-300" required placeholder="Indtast dit navn" />
        </div>
        <div className="md:flex md:gap-6 ">
          <div className="flex flex-col w-full ">
            <label htmlFor="email" className="text-primaryPurple">
              E-mail
            </label>
            <input type="email" name="email" id="email" className="p-2 bg-gray-300 " required placeholder="Indtast din e-mailadresse" />
          </div>
          <div className="flex flex-col w-full ">
            <label htmlFor="phone" className="pt-4 md:pt-0 text-primaryPurple">
              Tlf nr
            </label>
            <input type="tel" id="phone" className=" p-2 bg-gray-300" required placeholder="Indtast dit telefonnummer" />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-auto">
          <label htmlFor="message" className="text-primaryPurple">
            Besked
          </label>
          <input type="text" id="message" className=" bg-gray-300 text-primaryPurple p-7" required placeholder="Indtast din besked" />
          <div className="text-primaryPurple bg-lightBeige font-josefin font-bold text-md md:text-xl text-center py-3 px-11 rounded-xl shadow-md custom-shadow w-40 my-5 grid self-center">
            <button type="submit">Send</button>
          </div>
          {submitSuccess && <p className="text-center text-darkBlue">Tak for din mail!</p>}
        </div>
      </form>
    </div>
  );
}
