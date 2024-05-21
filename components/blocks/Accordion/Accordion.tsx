import { useState } from "react";

export default function Accordion() {
  const faqItems = [
    { question: "Hvad er kropsterapi?", answer: "Kropsterapi er en holistisk tilgang til at behandle fysiske og mentale udfordringer gennem kropslige teknikker." },
    { question: "Hvordan virker kropsterapi?", answer: "Kropsterapien arbejder med kroppens muskler, led og åndedræt for at frigøre spændinger og genoprette balance." },
    { question: "Hvem kan få gavn af kropsterapi?", answer: "Alle kan potentielt have gavn af kropsterapi, især dem der oplever kroniske smerter, stress eller angst." },
    { question: "Hvad kan man forvente under en kropsterapi-session?", answer: "Under en kropsterapi-session kan man forvente en kombination af massage, åndedrætsøvelser og samtale for at afdække og behandle underliggende spændinger." },
    { question: "Hvor ofte skal man modtage kropsterapi for at opnå resultater?", answer: "Hyppigheden af kropsterapi-sessioner afhænger af individuelle behov, men mange oplever forbedringer efter 3-5 sessioner." },
    { question: "Er kropsterapi smertefuldt?", answer: "Kropsterapi kan indebære nogle ubehagelige øjeblikke, når spændinger løsnes, men det skal ikke være smertefuldt. Terapeuten vil altid arbejde inden for din komfortzone." },
    { question: "Hvilke problemer kan kropsterapi hjælpe med?", answer: "Kropsterapi kan hjælpe med en række problemer, herunder stress, angst, kroniske smerter, spændingshovedpine, søvnproblemer og generel ubalance i kroppen." },
  ];

  return (
    <div className="text-primaryPurple bg-mediumBeige p-10 md:flex gap-4 text-left">
      <div className="md:ml-36 grid place-content-center  text-center md:text-left">
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <p className="font-bold max-w-56 mb-12 text-center md:text-left">Der er mange der har lignende spørgsmål til Kropsterapi, så her vil jeg prøve at besvare nogle</p>
      </div>
      <div className="w-full md:w-1/2 md:ml-auto text-left">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 relative">
      <button className="font-bold flex justify-between w-full" onClick={toggleAccordion}>
        <span className="text-left">{question}</span>
        <div>{isOpen ? <MinusIcon /> : <PlusIcon />}</div>
      </button>
      <div className="absolute top-full left-0 w-full h-px bg-primaryPurple"></div>
      {isOpen && <p className="mt-2">{answer}</p>}
    </div>
  );
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
    </svg>
  );
}
