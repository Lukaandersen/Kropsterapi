import React from "react";

export default function BurgerMenu({ isOpen }) {
  return (
    <div className={`md:hidden absolute right-0 bg-lightBeige/50 mt-[11.5px] p-4 font-semibold ${isOpen ? "block" : "hidden"}`}>
      <ul className="text-primaryPurple gap-4 grid">
        <li className="hover:text-darkBlue">
          <a href="/booking">Booking</a>
        </li>
        <li className="hover:text-darkBlue">
          <a href="/about-me">Om mig</a>
        </li>
        <li className="hover:text-darkBlue">
          <a href="/what-is-body-therapy">
            Hvad er <br></br> Kropsterapi?
          </a>
        </li>
      </ul>
    </div>
  );
}
