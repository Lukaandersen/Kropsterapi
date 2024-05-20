export default function PurpleButton(props) {
  const click = () => {
    console.log("clicked");
  };
  return (
    <div className=" bg-primaryPurple">
      <button className="text-primaryLight bg-primaryPurple font-josefin font-bold text-md md:text-xl text-center py-3 px-11 rounded-xl shadow-md custom-shadow mt-5" onClick={click}>
        {props.text}
      </button>
      <style jsx>{`
        .custom-shadow {
          box-shadow: -2px -2px 3px rgba(245, 245, 245, 1), 2px 2px 1px rgba(11, 11, 11, 1);
        }
      `}</style>
    </div>
  );
}
