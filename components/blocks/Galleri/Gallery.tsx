import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import { useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';



const ArrowIcon: React.FC<{ scaleX?: number }> = ({ scaleX = 1 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
        className="h-5 w-5"
        style={{ transform: `scaleX(${scaleX})` }}
    >
        <path strokeWidth="2" d="M11 19l-7-7 7-7" />
        <line x1="5" y1="12" x2="22" y2="12" strokeWidth="2" />
    </svg>
);

export default function Gallery() {
    const navigationNextRef = useRef<HTMLButtonElement>(null);
    const navigationPrevRef = useRef<HTMLButtonElement>(null);

    const images = [
        "Clinic-pictures/_DSF1706.jpg",
        "Clinic-pictures/_DSF1710.jpg",
        "Clinic-pictures/_DSF1719.jpg",
        "Clinic-pictures/_DSF1726.jpg"
    ];

    

    return (

        <div>
            <div className="grid">
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                loop={true}
                navigation={{
                  prevEl: '.previous',
                  nextEl: '.next',
                }}
                breakpoints={{
                640: {
                allowTouchMove: true,
                },
                641: {
                allowTouchMove: false,
                },
                }}
                modules={[Navigation, Autoplay]}
            >
                {images.map((image, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                    <img src={image} alt={`Billede ${index}`} className="w-64" />
                </SwiperSlide >
                ))}
               
            </Swiper>
            </div>
            <div className="flex justify-center gap-4 mt-8">
                <button ref={navigationPrevRef} className="previous rounded border-primary border-2 p-2 border-black" >
                    <ArrowIcon />
                </button>
                <button ref={navigationNextRef} className="next rounded border-2 p-2 border-black">
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

