import React from 'react';
import { useContext } from "react";
import { DarkContext } from "@/app/DarkContext"
import { useRef } from 'react';

const ArrowIcon: React.FC<{ scaleX?: number }> = ({ scaleX = 1 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-5 w-5"
        style={{ transform: `scaleX(${scaleX})` }}
    >
        <path strokeWidth="2" d="M11 19l-7-7 7-7" />
        <line x1="5" y1="12" x2="22" y2="12" strokeWidth="2" />
    </svg>
);



export default function Testamonial (props) {
    console.log (props)
    const {darkMode} = useContext(DarkContext);


    const navigationNextRef1 = useRef<HTMLButtonElement>(null);
    const navigationPrevRef1 = useRef<HTMLButtonElement>(null);

    const handlePrevClick = () => {
        console.log('Forrige knap blev klikket');
        // Tilføj yderligere logik eller manipulation af data her
    }

    const handleNextClick = () => {
        console.log('Næste knap blev klikket');
        // Tilføj yderligere logik eller manipulation af data her
    }
    return(
        <div className={`${darkMode ? 'text-primaryPurple bg-lightBeige' : 'text-lightBeige bg-darkBeige'} py-6`}>
        <div className='flex flex-col items-center gap-6 '>
        <h3 className='text-sm'>{props.name}</h3>
        <h2 className='text-xl font-playfair italic'>{props.title}</h2>
        <p className='text-center max-w-[820px]'>{props.testamonialText}</p>
</div>
<div className="flex justify-center gap-4 mt-8">
                <div>
                <button ref={navigationPrevRef1} className={`previous rounded border-primary border-2 p-2 ${darkMode ?'border-primaryPurple':'border-lightBeige'}`} onClick={handlePrevClick}>
                    <ArrowIcon />
                </button>
                </div>
                <div className="flex justify-center items-center">
                <button ref={navigationNextRef1} className={`next rounded border-primary border-2 p-2 ${darkMode ?'border-primaryPurple':'border-lightBeige'}`} onClick={handleNextClick}>
                    <ArrowIcon scaleX={-1} />
                </button>
                </div>
            </div>
        </div>
    )
}
