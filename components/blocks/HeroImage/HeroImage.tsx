import React from "react";

type HeroImageProps = {
  title: string;
  image: string;
};

export default function HeroImage(props: HeroImageProps) {
  return (
    <div className="relative w-full h-[550px] md:h-[600px]">
      <h1 className="absolute text-primaryPurple font-playfair text-3xl md:text-5xl lg:text-5xl grid items-center text-left w-full h-full ml-5">{props.title}</h1>
      <img src={props.image} alt={props.title} className="w-full h-full object-cover" />
    </div>
  );
}
{
  /* <img
          src="Clinic-pictures/_DSF1789.jpg"
          alt=""
          className="w-full h-full object-cover"
        /> */
}
