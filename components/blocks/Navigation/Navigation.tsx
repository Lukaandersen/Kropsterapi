import { useState } from "react";
import styles from "./styles.module.css";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("åben");
  };

  return (
    <div className="bg-lightBeige/50 flex items-center justify-between z-40 sticky top-0 px-4">
      <div className="flex items-center">
        <Link href="/forside">
          <img src="Logo.png" alt="hjerte med peacetegn" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="hidden md:flex gap-6 text-primaryPurple">
          <li className="hover:text-darkBlue font-semibold">
            <Link href="/booking">Booking</Link>
          </li>
          <li className="hover:text-darkBlue font-semibold">
            <Link href="/about-me">Om mig</Link>
          </li>
          <li className="hover:text-darkBlue font-semibold">
            <Link href="/hvad-er-kropsterapi">Hvad er Kropsterapi?</Link>
          </li>
        </ul>
        <div>
          <Link href="/cart" prefetch={true}>
            <img src="Cart.png" alt="" className="w-10/12 pl-2"/>
          </Link>
        </div>
        <div className="md:hidden justify-center flex-grow ml-3">
          <div className={`${styles.burgermenu} ${isOpen ? styles.open : ""}`} onClick={toggleMenu}>
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
