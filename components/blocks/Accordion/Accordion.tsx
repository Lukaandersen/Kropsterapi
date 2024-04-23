import { useState } from "react";

export default function Accordion() {
    const faqItems = [
        { question: "Hvad er kropsterapi?", answer: "Kropsterapi er en holistisk tilgang til at behandle fysiske og mentale udfordringer gennem kropslige teknikker." },
        { question: "Hvordan virker kropsterapi?", answer: "Kropsterapien arbejder med kroppens muskler, led og åndedræt for at frigøre spændinger og genoprette balance." },
        { question: "Hvem kan få gavn af kropsterapi?", answer: "Alle kan potentielt have gavn af kropsterapi, især dem der oplever kroniske smerter, stress eller angst." },
        { question: "Hvem kan få gavn af kropsterapi?", answer: "Alle kan potentielt have gavn af kropsterapi, især dem der oplever kroniske smerter, stress eller angst." },
        { question: "Hvem kan få gavn af kropsterapi?", answer: "Alle kan potentielt have gavn af kropsterapi, især dem der oplever kroniske smerter, stress eller angst." }

    ];

    return (
        <div className="text-primaryPurple bg-mediumBeige ">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 my-5 content-center">
                <div className="pl-5 grid md:place-content-center md:col-span-2">
                <h2 className="text-3xl font-bold mb-6">FAQ</h2>
                <p className="font-bold max-w-56 mb-12">Der er mange der har lignende spørgsmål til Kropsterapi, så her vil jeg prøve at besvare nogle</p>
                </div>
                <div className="col-span-3 px-6 mb-8 lg:mb-0">
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index} question={item.question} answer={item.answer} />
                    ))}

                </div>
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
        <div className="mb-4 ">
            <div></div>
        <button className="font-bold flex justify-between w-full underline" onClick={toggleAccordion}>
            <span>{question}</span>
            
            <div>{isOpen ? <MinusIcon /> : <PlusIcon />}</div>
        </button>
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