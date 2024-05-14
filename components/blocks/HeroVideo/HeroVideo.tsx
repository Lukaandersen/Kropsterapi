import LightBeigeButton from "@/components/buttons/LightBeigeButton";

export default function HeroVideo(props) {
  return (
    <div className="relative z-1">
      <div className="absolute top-1/2 left-10 md:left-20">
        <h1 className="text-primaryPurple font-playfair text-lg md:text-3xl">Kropsterapi v/ Charlotte Lundt</h1>
        <a href={props.link}>
          <LightBeigeButton text={props.buttonText} className="mt-4 md:mt-6"></LightBeigeButton>
        </a>
      </div>
      <video className="w-full" autoPlay loop muted>
        <source src="./Hero-video-korrektloop.mp4" type="video/mp4" />
        Din browser understøtter ikke video-tags.
      </video>
    </div>
  );
}

//-top-36
