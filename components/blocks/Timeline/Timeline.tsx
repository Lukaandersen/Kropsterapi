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

export default function Timeline(props) {
  return (
    <div className="bg-primaryLight w-auto min-h-14 relative">
      <div>
        <p className="text-xl text-darkBeige">Tidslinje</p>
      </div>
      <img className="md:hidden ml-3" src="lightmode_mobile_timeline.png" alt="Tidslinje mobile" />
      <img className="hidden sm:block mt-[-250px] ml-6" src="lightmode_desk_timeline.png" alt="Tidslinje desktop" />
    </div>
  );
}
