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
    <div className="bg-lightBeige/50 flex place-items-center justify-between z-40 sticky top-0">
      <div>
        <Link href="/forside">
          <img src="Logo.png" alt="hjerte med peacetegn" />
        </Link>
      </div>
      <div className="flex gap-7 mr-5 md:mr-[50px]">
        <ul className={`md:flex gap-6 mr-4 text-primaryPurple ${isOpen ? "hidden " : "hidden"}`}>
          <li className="hover:text-darkBlue font-semibold ">
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
            <img src="Cart.png" alt="" />
          </Link>
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
