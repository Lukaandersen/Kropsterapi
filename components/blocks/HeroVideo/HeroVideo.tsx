export default function HeroVideo() {
    return (
        <div className="relative  z-0">
            <h1 className="absolute text-primaryPurple font-playfair text-sm md:text-3xl top-1/2 left-5 md:left-20">Kropsterapi v/ Charlotte Lundt</h1>
            <video className="w-full" autoPlay loop muted>
                <source src="./Hero-video-korrektloop.mp4" type="video/mp4" />
                Din browser understøtter ikke video-tags.
            </video>
        </div>
    );
}

//-top-36