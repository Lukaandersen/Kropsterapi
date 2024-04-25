// import BrownButton from "@/components/buttons/BrownButton";

// export default function BookingCard(props) {
//   return (
//     <div className="bg-darkBeige mx-10 md:mx-6 my-2 flex flex-col items-center justify-center">
//       <p className="m-5 text-[32px] text-primaryPurple md:text-primaryLight md:text-xl">{props.titel}</p>
//       <img src="3_sessioner.png" alt="Billede af noget spirituelt" className="w-64 opacity-35" />
//       <p className="p-4 text-center text-lg m-5 max-w-64 text-primaryLight">{props.text}</p>
//       <p className="text-[36px] font-bold max-w-64 !important">{props.price}</p>
//       <BrownButton></BrownButton>
//     </div>
//   );
// }

import BrownButton from "@/components/buttons/BrownButton";

export default function BookingCard(props) {
  return (
    <div className="bg-darkBeige mx-10 md:mx-6 my-2 flex flex-col h-[480px] md:h-[700px] items-center justify-center relative">
      <p className="m-5 text-[32px] text-primaryPurple md:text-primaryLight ">{props.titel}</p>
      <div className="relative w-64">
        <img src="3_sessioner.png" alt="Billede af noget spirituelt" className="w-full h-auto opacity-35" />
        <p className="absolute top-0 left-0 right-0 bottom-0 md:relative flex items-center justify-center text-center text-lg m-5 text-primaryLight">{props.text}</p>
      </div>
      <p className="text-[36px] font-bold">{props.price}</p>
      <BrownButton></BrownButton>
    </div>
  );
}
