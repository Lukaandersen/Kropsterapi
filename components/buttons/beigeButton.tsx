export default function BeigeButton(props) {
  return (
    // <div className="flex justify-center items-center bg-red-800">
    //   <button className="text-primaryPurple bg-red-800 font-josefin font-bold text-xl text-center m-5 py-5 px-11 rounded-xl drop-shadow-[3px_4px_1px_rgba(164,151,133,1)]">Booking</button>
    // </div>
    <div className="bg-mediumBeige">
      <button className="text-primaryPurple bg-mediumBeige font-josefin font-bold text-xl text-center m-5 py-3 px-11 rounded-xl shadow-md custom-shadow">{props.text}</button>
      <style jsx>{`
        .custom-shadow {
          box-shadow: -2px -2px 3px rgba(234, 233, 229, 1), 2px 2px 1px rgba(62, 60, 60, 1);
        }
      `}</style>
    </div>
  );
}
