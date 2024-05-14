export default function Ordrerbekræftelse() {
  return (
    <div className="bg-mediumBeige mx-10 mb-2 mt-32 flex flex-col items-center text-base justify-center gap-4 p-5 md:p-10 md:mx-56">
      <h2 className="text-2xl">Ordrerbekræftelse</h2>
      <p className="text-center">Din booking er nu bekræftet og vi har sendt dig en email på: email@gmail.com</p>
      <p className="text-center">Din booking reference er: XXX-XXX-XXXX</p>
      <p className="text-center">
        Din valgte tid er reserveret og jeg vil sende dig en endellig mail med bekræftelse på at din tid er booket og aftalen er i hus.
      </p>
      <p className="text-center">Jeg glæder os til at møde dig og bidrage til dit velbefindende.</p>
    </div>
  );
}
