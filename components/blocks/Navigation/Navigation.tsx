import { useState } from 'react';
import styles from "./styles.module.css";
import BurgerMenu from './BurgerMenu';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log("åben")
    };

    return (
        <div className='bg-lightBeige/50 flex place-items-center justify-between z-40 sticky top-0'>
            <div>
                <a href="/forside">
                    <img src="Logo.png" alt="" />
                </a>
            </div>
            <div className='flex place-content-center gap-7'>
            <div className="md:hidden justify-center  " onClick={toggleMenu}>
                <div className={`${styles.burgermenu} ${isOpen ? styles.open : ''}`}>
                    <div className={`${styles.line} ${styles.line1}`}></div>
                    <div className={`${styles.line} ${styles.line2}`}></div>
                    <div className={`${styles.line} ${styles.line3}`}></div>
                </div>
                <BurgerMenu isOpen={isOpen} />
            </div>
            <ul className={`md:flex gap-6 text-primaryPurple mr-4 ${isOpen ? 'hidden ' : 'hidden'}`}>
                <li><a href="/booking">Booking</a></li>
                <li><a href="/about-me">Om mig</a></li>
                <li><a href="/hvad-er-kropsterapi">Hvad er Kropsterapi?</a></li>
            </ul>
            <div>
                <a href="/cart">
                    <img src="Cart.png" alt="" />
                </a>
            </div>
            </div>
        </div>
    );
}
