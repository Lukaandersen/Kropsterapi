import { useState } from "react";
import styles from "./styles.module.css";
import BurgerMenu from "./BurgerMenu";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("åben");
  };

  return (
    <div className="bg-lightBeige/50 flex place-items-center justify-between z-40 sticky top-0">
      <div>
        <a href="/forside">
          <img src="Logo.png" alt="hjerte med peacetegn" />
        </a>
      </div>
      <div className="flex gap-7 mr-5 md:mr-[50px]">
        <ul className={`md:flex gap-6 text-primaryPurple mr-4 ${isOpen ? "hidden " : "hidden"}`}>
          <li className="hover:text-darkBlue font-semibold">
            <a href="/booking">Booking</a>
          </li>
          <li className="hover:text-darkBlue font-semibold">
            <a href="/about-me">Om mig</a>
          </li>
          <li className="hover:text-darkBlue font-semibold">
            <a href="/hvad-er-kropsterapi">Hvad er Kropsterapi?</a>
          </li>
        </ul>
        <div>
          <a href="/cart">
            <img src="Cart.png" alt="" />
          </a>
        </div>
        <div className="md:hidden justify-center  " onClick={toggleMenu}>
          <div className={`${styles.burgermenu} ${isOpen ? styles.open : ""}`}>
            <div className={`${styles.line} ${styles.line1}`}></div>
            <div className={`${styles.line} ${styles.line2}`}></div>
            <div className={`${styles.line} ${styles.line3}`}></div>
          </div>
          <BurgerMenu isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}
