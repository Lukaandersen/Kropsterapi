import React, { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";
import Image from "next/image";

export default function Timeline(props) {
  const { darkMode } = useContext(DarkContext);

  return (
    <div className={`bg-primaryLight w-auto min-h-14 relative ${darkMode ? "bg-mediumBeige" : "bg-darkBeige"}`}>
      <Image width={600} height={600} className="md:hidden ml-3" src={darkMode ? "/darkmode_mobile_timeline.png" : "/lightmode_mobile_timeline.png"} alt="Tidslinje mobile" />
      <Image width={600} height={600} className=" hidden md:block my-[50px] md:w-[90%] md:m-auto md:py-[50px] ml-0" src={darkMode ? "/darkmode_desk_timeline_new.png" : "/lightmode_desk_timeline_new.png"} alt="Tidslinje desktop" />
    </div>
  );
}
