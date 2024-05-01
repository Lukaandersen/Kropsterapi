// export default function Timeline(props) {
//   return (
//     <div className="bg-primaryLight w-auto min-h-14">
//       <div>
//         <p className="text-xl text-darkBeige">Tidslinje</p>
//       </div>
//       <img className="md:hidden position:absolut top--100px" src="lightmode_mobile_timeline.png" alt="Tidslinje mobile" />
//       <img className="hidden sm:block " src="lightmode_desk_timeline.png" alt="Tidslinje desktop" />
//     </div>
//   );
// }

// export default function Timeline(props) {
//   return (
//     <div className="bg-primaryLight w-auto min-h-14 relative">
//       <div>
//         <p className="text-xl text-darkBeige">Tidslinje</p>
//       </div>
//       <img className="md:hidden ml-3" src="lightmode_mobile_timeline.png" alt="Tidslinje mobile" />
//       <img className="hidden sm:block mt-[-250px] ml-6" src="lightmode_desk_timeline.png" alt="Tidslinje desktop" />
//     </div>
//   );
// }

import React, { useContext } from "react";
import { DarkContext } from "@/app/DarkContext";

export default function Timeline(props) {
  const { darkMode } = useContext(DarkContext);

  return (
    <div className={`bg-primaryLight w-auto min-h-14 relative ${darkMode ? "bg-mediumBeige" : "bg-darkBeige"}`}>
      <div>
        <p className={`text-xl ${darkMode ? "text-primaryPurple" : "text-darkBeige"}`}>Tidslinje</p>
      </div>
      <img className="md:hidden ml-3" src={darkMode ? "darkmode_mobile_timeline.png" : "lightmode_mobile_timeline.png"} alt="Tidslinje mobile" />
      <img className="hidden sm:block mt-[-250px] ml-6" src={darkMode ? "darkmode_desk_timeline.png" : "lightmode_desk_timeline.png"} alt="Tidslinje desktop" />
    </div>
  );
}
