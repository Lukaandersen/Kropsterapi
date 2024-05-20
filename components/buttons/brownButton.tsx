export default function BrownButton(props) {
  return (
    <div className=" bg-darkBeige">
      <button className="text-lightBeige bg-darkBeige font-josefin font-bold text-md md:text-xl text-center py-3 px-11 rounded-xl shadow-md custom-shadow mt-5">{props.text}</button>
      <style jsx>{`
        .custom-shadow {
          box-shadow: -2px -2px 3px rgba(209, 202, 186, 1), 2px 2px 1px rgba(35, 35, 35, 1);
        }
      `}</style>
    </div>
  );
}
