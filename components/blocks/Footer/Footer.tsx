import React from "react";
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";

export default function Footer() {
  const { darkMode } = useContext(DarkContext);

  return (
    <div className={`${darkMode ? "bg-darkBeige" : "bg-lightBeige"} flex flex-col items-center py-4`}>
      <div className={`${darkMode ? "bg-lightBeige" : "bg-darkBeige"} h-0.5 my-9 w-5/6 grid justify-center`}></div>

      <div className={`${darkMode ? "text-lightBeige" : "text-darkBeige"} grid grid-cols-1 gap-5 md:grid-cols-3 text-center md:h-56 w-full justify-between`}>
        <div className="grid gap-1 justify-center">
          <h3 className="">Find mig her</h3>
          <div className="grid grid-cols-2 justify-items-center gap-6 px-16">
            <img
              src={darkMode ? "FacebookDark.png" : "FacebookLight.png"}
              alt=""
              width={45}
              className="transition duration-300 ease-in-out transform hover:scale-110"
              onMouseOver={(e) => (e.currentTarget.src = "FacebookPurple.png")}
              onMouseOut={(e) => (e.currentTarget.src = darkMode ? "FacebookDark.png" : "FacebookLight.png")}
            />
            <img
              src={darkMode ? "InstagramDark.png" : "InstagramLight.png"}
              alt=""
              width={45}
              className="transition duration-300 ease-in-out transform hover:scale-110"
              onMouseOver={(e) => (e.currentTarget.src = "InstagramPurple.png")}
              onMouseOut={(e) => (e.currentTarget.src = darkMode ? "InstagramDark.png" : "InstagramLight.png")}
            />
          </div>
          <h3>Marstalsgade 2100 Østerbro</h3>
        </div>
        <div className={`${darkMode ? "border-lightBeige" : "border-darkBeige"} grid gap-3 md:border-l-2`}>
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
          <h3>Cookiepolitik</h3>
          <h3>Privatpolitik</h3>
          <h3>CVR: 12345678</h3>
        </div>
      </div>
    </div>
  );
}
