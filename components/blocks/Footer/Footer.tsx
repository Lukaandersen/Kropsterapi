import React from "react";
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";
import Image from "next/image";

export default function Footer() {
  const { darkMode } = useContext(DarkContext);

  return (
    <div className={`${darkMode ? "bg-darkBeige" : "bg-lightBeige"} flex flex-col items-center py-4`}>
      <div className={`${darkMode ? "bg-lightBeige" : "bg-darkBeige"} h-0.5 my-5 w-5/6 grid justify-center`}></div>

      <div className={`${darkMode ? "text-lightBeige" : "text-darkBeige"} grid grid-cols-1 gap-5 md:grid-cols-3 text-center md:h-56 w-full justify-between`}>
        <div className="grid gap-1 justify-center">
          <p className="">Find mig her:</p>
          <div className="grid grid-cols-2 justify-items-center gap-6 px-16 py-5">
            <Image
              src={darkMode ? "/FacebookDark.png" : "/FacebookLight.png"}
              alt=""
              height={45}
              width={45}
              className="transition duration-300 ease-in-out transform hover:scale-110"
              onMouseOver={(e) => (e.currentTarget.src = "/FacebookPurple.png")}
              onMouseOut={(e) => (e.currentTarget.src = darkMode ? "/FacebookDark.png" : "/FacebookLight.png")}
            />
            <Image
              src={darkMode ? "/InstagramDark.png" : "/InstagramLight.png"}
              alt=""
              height={45}
              width={45}
              className="transition duration-300 ease-in-out transform hover:scale-110"
              onMouseOver={(e) => (e.currentTarget.src = "/InstagramPurple.png")}
              onMouseOut={(e) => (e.currentTarget.src = darkMode ? "/InstagramDark.png" : "/InstagramLight.png")}
            />
          </div>
          <p>Marstalsgade 2100 Østerbro</p>
        </div>
        <div className={`${darkMode ? "border-lightBeige" : "border-darkBeige"} grid gap-3 md:border-l-2`}>
          <div className={`${darkMode ? "border-lightBeige" : "border-darkBeige"} flex items-center justify-center border-t-2 md:hidden mx-28`}></div>
          <a href="/hvad-er-kropsterapi" className="hover:text-primaryPurple transition duration-300 ease-in-out transform hover:scale-110">
            Hvad er Kropsterapi?
          </a>
          <a href="/about-me" className="hover:text-primaryPurple transition duration-300 ease-in-out transform hover:scale-110">
            Om Mig
          </a>
          <a href="/booking" className="hover:text-primaryPurple transition duration-300 ease-in-out transform hover:scale-110">
            Booking
          </a>
        </div>
        <div className={`${darkMode ? "border-lightBeige" : "border-darkBeige"} grid gap-3 md:border-l-2`}>
          <div className={`${darkMode ? "border-lightBeige" : "border-darkBeige"} flex items-center justify-center border-t-2 md:hidden mx-28`}></div>
          <h3>Cookiepolitik</h3>
          <h3>Privatpolitik</h3>
          <h3>CVR: 12345678</h3>
        </div>
      </div>
    </div>
  );
}
