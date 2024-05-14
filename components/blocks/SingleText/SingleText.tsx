import LightBeigeButton from "@/components/buttons/LightBeigeButton";

export default function SingleText(props) {
  return (
    <div className="grid py-5 md:px-28 place-items-center px-5 text-primaryPurple">
      <h2 className="text-3xl font-playfair mb-5">{props.title}</h2>
      <p className="font-josefin">
        Ankomst : Jeg gør alt jeg kan for at være klar til dig, være 100% nærværende og tilstede, 1 time dedikeret til dig. Du skal ankomme ca 5 min før behandlingstid så en eventuel tidligere behandling ikke forstyres men så du kan nå at være klar
        til din tid.{" "}
      </p>
      <br />
      <p>Medbring: Du skal medbringe et lagen, gerne stræklagen da de ligger bedst på briksen og et tæppe af ikke alt for tyk kvalitet som skal bruges til at dække de dele af kroppen som ikke behandles. </p>
      <br />
      <p>
        Gensidigt hensyn: Du ønsker naturligvis god hygiejne hos mig som behandler og det vil jeg altid efterleve. Jeg ønsker så klart det samme af dig som klient, det gælder også dit medbragte lagen og tæppe, undgå tekstiler der lugter af røg eller
        kraftig parfume.
      </p>
      <br />
      <p>Sygdom: Hvis du er syg så aftaler vi en ny tid, kontakt mig i så hurtigt som muligt så jeg har mulighed for at planlægge min tid. </p>
      <a href={props.link}>
        <LightBeigeButton text={props.buttonText}></LightBeigeButton>{" "}
      </a>
    </div>
  );
}
