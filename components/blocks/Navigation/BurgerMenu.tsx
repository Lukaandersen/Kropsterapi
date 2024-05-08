import React from 'react';

export default function BurgerMenu({ isOpen }) {
    return (
        <div className={`md:hidden absolute bg-lightBeige/50 mt-8 font-semibold ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="text-primaryPurple gap-4 grid py-4">
                <li className='hover:text-darkBlue'><a href="/booking">Booking</a></li>
                <li className='hover:text-darkBlue'><a href="/about-me">Om mig</a></li>
                <li className='hover:text-darkBlue'><a href="/hvad-er-kropsterapi">Hvad er Kropsterapi?</a></li>
            </ul>
        </div>
    );
}