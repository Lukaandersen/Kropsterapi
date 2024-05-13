export default function BrownButton(props) {
  return (

    <div className=" bg-darkBeige">
      <button className="text-primaryLight bg-darkBeige font-josefin font-bold text-xl text-center m-5 py-5 px-11 rounded-xl shadow-md custom-shadow">{props.text}</button>
      <style jsx>{`
        .custom-shadow {
          box-shadow: -2px -2px 3px rgba(209, 202, 186, 1), 2px 2px 1px rgba(35, 35, 35, 1);
        }
      `}</style>
    </div>
  );
}
