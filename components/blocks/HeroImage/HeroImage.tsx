export default function HeroImage(props) {
    return (
      <div className="relative w-full h-64 md:h-96">
        <h1 className="absolute text-primaryPurple font-playfair text-4xl md:text-6xl lg:text-7xl xl:text-9xl top-1/2 left-1/3 transform -translate-y-1/2">
          {props.title}
        </h1>
        <img
          src="Clinic-pictures/_DSF1726.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  