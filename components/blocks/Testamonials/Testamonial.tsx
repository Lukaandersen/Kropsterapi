import React from 'react';
import { useContext, useEffect, useState } from "react";
import { DarkContext } from "@/app/DarkContext"
import { useRef } from 'react';
import supabase from '@/app/config/supabaseClient'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';



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
        const [monials, setMonials] = useState([])
        useEffect(()=>{
            async function get(){

                let { data: testamonials, error } = await supabase
                    .from('Testamonials')
                    .select('*')
                console.log(testamonials)
                setMonials(testamonials)
            }
            get();
        },[])
    console.log (props)
    const {darkMode} = useContext(DarkContext);


    const navigationNextRef1 = useRef<HTMLButtonElement>(null);
    const navigationPrevRef1 = useRef<HTMLButtonElement>(null);

    // const handlePrevClick = () => {
    //     console.log('Forrige knap blev klikket');
    //     // Tilføj yderligere logik eller manipulation af data her
    // }

    // const handleNextClick = () => {
    //     console.log('Næste knap blev klikket');
    //     // Tilføj yderligere logik eller manipulation af data her
    // }
    return(
        <div className={`${darkMode ? 'text-primaryPurple bg-lightBeige' : 'text-lightBeige bg-darkBeige'} py-12 px-6`}>
        <Swiper
        modules={[Navigation, Pagination]} 
        loop={true}
        navigation={{
            prevEl: '.previous',
            nextEl: '.next',
        }}
        
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {monials.map(testi=>(
            <SwiperSlide className="swiper-slide">
            <div className='flex flex-col items-center gap-6 '>
                <h3 className='text-sm'>{testi.name}</h3>
                <h2 className='text-xl font-playfair italic'>{testi.title}</h2>
                <p className='text-center max-w-[720px]'>{testi.testamonial}</p>
            </div>
            </SwiperSlide>
        ))}
       
        </Swiper>
        <div className="flex justify-center gap-4 mt-8">
         <button ref={navigationPrevRef1} className={`${darkMode ? "border-primaryPurple" : " border-lightBeige"} previous rounded border-2 p-2`} >
            <ArrowIcon />
          </button>
            <button ref={navigationNextRef1} className={`${darkMode ? "border-primaryPurple" : " border-lightBeige"} next rounded border-2 p-2`}>
            <ArrowIcon scaleX={-1} />
          </button>
          </div>
 </div>
);
}
