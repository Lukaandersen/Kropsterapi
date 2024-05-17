export default function LightBeigeButton(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(); 
  };

  return (
    <div className="">
      <button onClick={props.onClick} className="text-primaryPurple bg-lightBeige font-josefin font-bold text-md md:text-xl text-center py-3 px-11 rounded-xl shadow-md custom-shadow mt-5">
        {props.text}
      </button>
      <style jsx>{`
        .custom-shadow {
          box-shadow: -2px -2px 3px rgba(245, 245, 245, 1), 2px 2px 1px rgba(164, 151, 133, 1);
        }
      `}</style>
    </div>
  );
}
};
