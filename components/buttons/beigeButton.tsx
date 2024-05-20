export default function BeigeButton(props) {
  return (
    <div className="bg-mediumBeige">
      <button className="text-primaryPurple bg-mediumBeige font-josefin font-bold text-md md:text-xl text-center py-3 px-11 rounded-xl shadow-md custom-shadow mt-5">{props.text}</button>
      <style jsx>{`
        .custom-shadow {
          box-shadow: -2px -2px 3px rgba(234, 233, 229, 1), 2px 2px 1px rgba(62, 60, 60, 1);
        }
      `}</style>
    </div>
  );
}
