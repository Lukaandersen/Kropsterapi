import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { useRef, useState, useContext } from 'react';
import { DarkContext } from '@/app/DarkContext';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const ArrowIcon: React.FC<{ scaleX?: number }> = ({ scaleX = 1 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-5 w-5"
        style={{ transform: `scaleX(${scaleX})`, color: 'currentColor' }} 
    >
        <path strokeWidth="2" d="M11 19l-7-7 7-7" />
        <line x1="5" y1="12" x2="22" y2="12" strokeWidth="2" />
    </svg>
);

export default function Gallery() {
    const { darkMode } = useContext(DarkContext);

    const navigationNextRef = useRef<HTMLButtonElement>(null);
    const navigationPrevRef = useRef<HTMLButtonElement>(null);

    const images = [
        "/Clinic-pictures/_DSF1706.jpg",
        "/Clinic-pictures/_DSF1710.jpg",
        "/Clinic-pictures/_DSF1719.jpg",
        "/Clinic-pictures/_DSF1726.jpg",
        "/Clinic-pictures/_DSF1736.jpg",
        "/Clinic-pictures/_DSF1746.jpg",
        "/Clinic-pictures/_DSF1747.jpg",
        "/Clinic-pictures/_DSF1752.jpg",
        "/Clinic-pictures/_DSF1754.jpg",
        "/Clinic-pictures/_DSF1763.jpg",
        "/Clinic-pictures/_DSF1768.jpg",
        "/Clinic-pictures/_DSF1779.jpg",
        "/Clinic-pictures/_DSF1789.jpg",
        "/Clinic-pictures/_DSF1812.jpg",
        "/Clinic-pictures/_DSF1820.jpg",
        "/Clinic-pictures/_DSF1824.jpg",
        "/Clinic-pictures/_DSF1825.jpg",
        "/Clinic-pictures/_DSF1845.jpg",
        "/Clinic-pictures/_DSF1847.jpg",
        "/Clinic-pictures/_DSF1848.jpg",
        "/Clinic-pictures/_DSF1849.jpg",
        "/Clinic-pictures/_DSF1855.jpg",
        "/Clinic-pictures/_DSF1856.jpg",
        "/Clinic-pictures/_DSF1857.jpg",
        "/Clinic-pictures/_DSF1859.jpg",
        "/Clinic-pictures/_DSF1860.jpg",
        "/Clinic-pictures/_DSF1864.jpg",
        "/Clinic-pictures/_DSF1865.jpg",
        "/Clinic-pictures/_DSF1868.jpg",
        "/Clinic-pictures/_DSF1869.jpg",
        "/Clinic-pictures/_DSF1873.jpg",
    ];


    return (
<div  className='p-10'>
    <div>
        <h2 className={`${darkMode ? "text-lightBeige" : "text-darkBeige"} font-playfair text-center text-3xl  mb-5`}>Galleri</h2>
        <Swiper
        modules={[Navigation, Pagination]} 
        loop={true}
        navigation={{
            prevEl: '.previous',
            nextEl: '.next',
        }}
        breakpoints={{
                   640: {
                         slidesPerView: 1,
                         spaceBetween: 20,
                   },
                        768: {
                           slidesPerView: 2,
                        spaceBetween: 25,
                      },
                        1024: {
                           slidesPerView: 3,
                            spaceBetween: 30,
                       },
                    }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
       {images.map((image, index) => (
              <SwiperSlide key={index} className="swiper-slide" style={{ width: "300px", height: "500px" }}>
                    <Image width={600} height={600} src={image} alt={`Billede ${index}`} className="w-full h-full object-cover" />
               </SwiperSlide >
               ))}
    
      </Swiper>
      </div>
       <div className="flex justify-center gap-4 mt-8">
         <button ref={navigationPrevRef} className={`${darkMode ? "border-lightBeige text-lightBeige" : " border-primaryPurple text-primaryPurple"} previous rounded border-2 p-2`} >
            <ArrowIcon />
          </button>
            <button ref={navigationNextRef} className={`${darkMode ? "border-lightBeige text-lightBeige" : " border-primaryPurple text-primaryPurple"} next rounded border-2 p-2`}>
            <ArrowIcon scaleX={-1} />
          </button>
          </div>
</div>
 );
}

