import LightBeigeButton from "@/components/buttons/LightBeigeButton";

export default function HeroVideo(props) {
  return (
    <div className="relative z-10">
      <div className="absolute top-44 md:top-1/2 text-center md:left-20 md:text-left md:transform-none left-1/2 md:translate-x-0 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-lightBeige md:text-primaryPurple font-playfair text-lg md:text-3xl">{props.title}</h1>
        <a href={props.link}>
          <LightBeigeButton text={props.buttonText} className="mt-4 md:mt-6 "></LightBeigeButton>
        </a>
      </div>
      <video className="w-full" autoPlay loop muted>
        <source src="./Hero-video-950.mp4" type="video/mp4" />
        Din browser understøtter ikke video-tags.
      </video>
    </div>
  );
}
