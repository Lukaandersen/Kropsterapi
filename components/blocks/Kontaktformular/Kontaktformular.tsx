import LightBeigeButton from "@/components/buttons/LightBeigeButton";

export default function Kontaktformular(props) {

  const handleSendEmail = (event) => {
    event.preventDefault(); // Forhindrer standardformularindsendelse
    console.log('handleSendEmail function called');

    console.log('Form submitted!'); // Tilføjet for at bekræfte, at funktionen kaldes

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);

    const mailtoLink = `mailto:luka_andersen@hotmail.com?subject=Besked fra ${name}&body=${message}%0D%0A%0D%0A---%0D%0A%0D%0AEmail: ${email}%0D%0ATelefon: ${phone}`;

    console.log('Mailto Link:', mailtoLink);

    // window.location.href = mailtoLink; // Kommenter denne linje ud for at teste linkgenereringen
};


  return (
    <div className="m-9">
      <h2 className="text-center md:text-left text-[40px] pb-6 md:pl-2 font-playfair text-primaryPurple">Kontakt</h2>
      <p className="pb-6 md:pl-2 text-primaryPurple">Fortæl lidt om dig selv og din situation - så tager jeg kontakt til dig</p>
      <form className="flex flex-col gap-4 bg-primaryLight rounded-lg p-5">
        <div className="flex flex-col md:px-[70px]">
          <label htmlFor="name" className="text-primaryPurple">
            Navn
          </label>
          <input type="text" id="name" className=" p-2 bg-gray-300 " placeholder="Indtast dit navn" />
        </div>
        <div className=" md:flex md:justify-between md:px-[70px]">
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-primaryPurple">
              E-mail
            </label>
            <input type="email" id="email" className="p-2 bg-gray-300 md:w-[250px]" placeholder="Indtast din e-mailadresse" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="pt-4 md:pt-0 text-primaryPurple">
              Tlf nr
            </label>
            <input type="tel" id="phone" className=" p-2 bg-gray-300 md:w-[250px]" placeholder="Indtast dit telefonnummer" />
          </div>
        </div>
        <div className="flex flex-col md:px-[70px]">
          <label htmlFor="message" className="text-primaryPurple">
            Besked
          </label>
          <textarea id="message" className=" p-2 bg-gray-300" placeholder="Indtast din besked"></textarea>
          <div className="text-center">
          <LightBeigeButton text={props.btnText} onClick={handleSendEmail}/>
          </div>
        </div>
        
      </form>
    </div>
  );
}

// const handleSendEmail = async (event) => {
//   event.preventDefault(); // Forhindrer standardformularindsendelse
//   console.log('handleSendEmail function called');

//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const phone = document.getElementById('phone').value;
//   const message = document.getElementById('message').value;

//   console.log('Name:', name);
//   console.log('Email:', email);
//   console.log('Phone:', phone);
//   console.log('Message:', message);

//   // Send formulardataene til serveren
//   const response = await fetch('/send-email', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ name, email, phone, message })
//   });

//   if (response.ok) {
//     console.log('E-mail sendt!');
//     // Implementer eventuel logik for at vise en bekræftelsesbesked til brugeren
//   } else {
//     console.error('Fejl ved afsendelse af e-mail');
//     // Implementer eventuel logik for at håndtere fejl
//   }
// };