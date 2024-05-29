import React from "react";
import Image from "next/image";

type HeroImageProps = {
  title: string;
  image: string;
};

export default function HeroImage(props: HeroImageProps) {
  return (
    <div className="relative w-full h-[550px] md:h-[600px]">
      <h1 className="absolute z-10 text-primaryPurple font-playfair text-h1M md:text-h1D grid items-center text-left w-full h-full ml-5 md:ml-48">
        {props.title}
      </h1>
      <Image
        src={props.image}
        alt={props.title}
        layout="fill"
        objectFit="cover"
        priority
        className="w-full h-full"
      />
    </div>
  );
}
