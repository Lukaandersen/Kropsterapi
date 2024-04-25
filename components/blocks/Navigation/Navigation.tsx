import {useState} from 'react';
import styles from "./Navigation.module.css";

export default function Navigation () {
    

    return (

<div className='bg-lightBeige/50 flex place-items-center justify-between' >
    <div>
        <a href="/forside">
    <img src="Logo.png" alt=""/>
    </a>
</div>
<div className={`flex gap-6 text-primaryPurple mr-4 place-items-center ${styles.navMenu}`}>
   
<a href="/booking">Booking</a>
<a href="/about-me">Om mig</a>
<a href="/hvad-er-kropsterapi">Hvad er Kropsterapi?</a>
<a href="/cart">
    <img src="Cart.png" alt="" />  
</a>
</div>
</div>
    )

};

