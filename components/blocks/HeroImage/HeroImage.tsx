export default function HeroImage(props) {
    return (
      <div className="relative w-full h-[550px] md:h-[600px]">
      <h1 className="absolute text-primaryPurple font-playfair text-4xl md:text-5xl lg:text-6xl grid place-items-center text-center w-full h-full">          {props.title}
        </h1>
        <img
          src="Clinic-pictures/_DSF1726.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  