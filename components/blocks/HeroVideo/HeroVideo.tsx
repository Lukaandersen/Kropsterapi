import LightBeigeButton from "@/components/buttons/LightBeigeButton";

export default function HeroVideo() {
    return (
        <div className="relative z-0">
            <div className="absolute top-1/2 left-10 md:left-20">
                <h1 className="text-primaryPurple font-playfair text-lg md:text-3xl">Kropsterapi v/ Charlotte Lundt</h1>
                <LightBeigeButton className="mt-4 md:mt-6"></LightBeigeButton>
            </div>
            <video className="w-full" autoPlay loop muted>
                <source src="./Hero-video-korrektloop.mp4" type="video/mp4" />
                Din browser understøtter ikke video-tags.
            </video>
        </div>
    );
}

//-top-36