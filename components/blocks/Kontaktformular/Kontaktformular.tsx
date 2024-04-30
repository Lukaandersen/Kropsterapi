import BrownButton from "@/components/buttons/BrownButton";

export default function Kontaktformular(props) {
  return (
    <div className="flex flex-col items-center justify-center md:m-10 gap-8">
      <h2 className="text-[24px] text-center font-bold md:text-3xl">Fik du ikke svar på dit spørgsmål?</h2>
      <p className="text-left mx-10 md:mx-[322px]">Du kan sende mig en mail med dit spørgsmål, så vil jeg svare på det så godt som jeg kan. Du skal blot skrive dit spørgsmål i feltet nedenfor og tryk på "send", så svarer jeg hurtigst muligt</p>
      <form>
        <textarea className=" w-[300px] h-[130px] md:w-[700px] md:h-[150px]" id="userInput" placeholder="Skriv din tekst her.." />
      </form>
      <BrownButton></BrownButton>
    </div>
  );
}
