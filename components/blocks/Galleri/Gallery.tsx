import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { useRef, useState, useContext } from 'react';
import { DarkContext } from '@/app/DarkContext';
import 'swiper/css';
import 'swiper/css/navigation';



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
        "Clinic-pictures/_DSF1706.jpg",
        "Clinic-pictures/_DSF1710.jpg",
        "Clinic-pictures/_DSF1719.jpg",
        "Clinic-pictures/_DSF1726.jpg",
        "Clinic-pictures/_DSF1736.jpg",
        "Clinic-pictures/_DSF1746.jpg",
        "Clinic-pictures/_DSF1747.jpg",
        "Clinic-pictures/_DSF1752.jpg",
        "Clinic-pictures/_DSF1754.jpg",
        "Clinic-pictures/_DSF1763.jpg",
        "Clinic-pictures/_DSF1768.jpg",
        "Clinic-pictures/_DSF1779.jpg",
        "Clinic-pictures/_DSF1789.jpg",
        "Clinic-pictures/_DSF1812.jpg",
        "Clinic-pictures/_DSF1820.jpg",
        "Clinic-pictures/_DSF1824.jpg",
        "Clinic-pictures/_DSF1825.jpg",
        "Clinic-pictures/_DSF1845.jpg",
        "Clinic-pictures/_DSF1847.jpg",
        "Clinic-pictures/_DSF1848.jpg",
        "Clinic-pictures/_DSF1849.jpg",
        "Clinic-pictures/_DSF1855.jpg",
        "Clinic-pictures/_DSF1856.jpg",
        "Clinic-pictures/_DSF1857.jpg",
        "Clinic-pictures/_DSF1859.jpg",
        "Clinic-pictures/_DSF1860.jpg",
        "Clinic-pictures/_DSF1864.jpg",
        "Clinic-pictures/_DSF1865.jpg",
        "Clinic-pictures/_DSF1868.jpg",
        "Clinic-pictures/_DSF1869.jpg",
        "Clinic-pictures/_DSF1873.jpg",
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
                    <img src={image} alt={`Billede ${index}`} className="w-full h-full object-cover" />
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


// import { FC, useRef } from 'react';
// import BaseBlock from '@Organisms/Blocks/Base';
// import { BlockProps, IBlocksClientSlider } from '@lib/interfaces';
// import { quoteSliderPopulateFields } from './';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css/navigation';

// const ArrowIcon: FC<{ scaleX?: number }> = ({ scaleX = 1 }) => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         className="h-5 w-5"
//         style={{ transform: `scaleX(${scaleX})` }}
//     >
//         <path strokeWidth="2" d="M11 19l-7-7 7-7" />
//         <line x1="5" y1="12" x2="22" y2="12" strokeWidth="2" />
//     </svg>
// );

// const QuoteSlider: FC<BlockProps<IBlocksClientSlider<(typeof quoteSliderPopulateFields)[number]>>> = ({ block }) => {
//     const { quotes } = block;
//     const navigationNextRef = useRef<HTMLButtonElement>(null);
//     const navigationPrevRef = useRef<HTMLButtonElement>(null);

//     console.log(quotes);

//     return (
//         <BaseBlock component={block}>
//             <Swiper
//                 autoplay={{ delay: 6000 }}
//                 loop={true}
//                 navigation={{
//                     prevEl: '.previous',
//                     nextEl: '.next',
//                 }}
//                 breakpoints={{
//                     640: {
//                         allowTouchMove: true,
//                     },
//                     641: {
//                         allowTouchMove: false,
//                     },
//                 }}
//                 modules={[Navigation, Autoplay]}
//             >
//                 {quotes?.data.map((quote, index) => (
//                     <SwiperSlide key={index} className="swiper-slide">
//                         <div className="flex flex-col items-center justify-center text-primary font-lora">
//                             <div className="grid mb-4 items-center justify-center">
//                                 <div className="grid mb-2 w-96 <sm:w-80 text-lg items-end text-center">
//                                     <p className="mb-2 grid text-sm items-end">{quote.attributes.name}</p>
//                                     <h2 className="mb-4 grid items-end header-2 ">{quote.attributes.title}</h2>
//                                     <blockquote className="text-xl">{quote.attributes.quote}</blockquote>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//             <div className="flex justify-center gap-5 text-primary">
//                 <button ref={navigationPrevRef} className="previous rounded border-primary border-2 p-2">
//                     <ArrowIcon />
//                 </button>
//                 <button ref={navigationNextRef} className="next rounded border-primary border-2 p-2 ">
//                     <ArrowIcon scaleX={-1} />
//                 </button>
//             </div>
//         </BaseBlock>
//     );
// };

// export default QuoteSlider;

   // <div className=''>
        //     <div className="grid grid-cols-3">
        //     <Swiper
        //         spaceBetween={10}
        //         slidesPerView={3}
        //         loop={true}
        //         navigation={{
        //           prevEl: '.previous',
        //           nextEl: '.next',
        //         }}
        //         breakpoints={{
        //             640: {
        //                 slidesPerView: 1,
        //                 spaceBetween: 20,
        //             },
        //             768: {
        //                 slidesPerView: 2,
        //                 spaceBetween: 40,
        //             },
        //             1024: {
        //                 slidesPerView: 3,
        //                 spaceBetween: 50,
        //             },
        //         }}
        //         modules={[Navigation, Autoplay]}
        //     >
        //         {images.map((image, index) => (
        //         <SwiperSlide key={index} className="swiper-slide">
        //             <img src={image} alt={`Billede ${index}`} className="w-64 flex flex-col items-center justify-center" />
        //         </SwiperSlide >
        //         ))}
               
        //     </Swiper>
        //     </div>
        //     <div className="flex justify-center gap-4 mt-8">
        //         <button ref={navigationPrevRef} className="previous rounded border-primaryPurple border-2 p-2" >
        //             <ArrowIcon />
        //         </button>
        //         <button ref={navigationNextRef} className="next rounded border-2 p-2 border-primaryPurple">
        //             <ArrowIcon scaleX={-1} />
        //         </button>
        //     </div>
        // </div>