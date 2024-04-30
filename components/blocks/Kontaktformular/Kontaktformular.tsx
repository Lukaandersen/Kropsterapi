import LightBeigeButton from "@/components/buttons/LightBeigeButton";

export default function QAformular() {
  return (
    <div className="m-9">
      <h2 className="text-center md:text-left text-[40px] pb-6 md:pl-2 font-playfair">Kontakt</h2>
      <p className="pb-6 md:pl-2">Fortæl lidt om dig selv og din situation - så tager jeg kontakt til dig</p>
      <form className="flex flex-col gap-4 bg-primaryLight rounded-lg p-5">
        <div className="flex flex-col md:px-[70px]">
          <label htmlFor="name" className="">
            Navn
          </label>
          <input type="text" id="name" className=" p-2 bg-gray-300 " placeholder="Indtast dit navn" />
        </div>
        <div className=" md:flex md:justify-between md:px-[70px]">
          <div className="flex flex-col ">
            <label htmlFor="email" className="">
              E-mail
            </label>
            <input type="email" id="email" className="p-2 bg-gray-300 md:w-[250px]" placeholder="Indtast din e-mailadresse" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="pt-4 md:pt-0">
              Tlf nr
            </label>
            <input type="tel" id="phone" className=" p-2 bg-gray-300 md:w-[250px]" placeholder="Indtast dit telefonnummer" />
          </div>
        </div>
        <div className="flex flex-col md:px-[70px]">
          <label htmlFor="message" className="">
            Besked
          </label>
          <textarea id="message" className=" p-2 bg-gray-300" placeholder="Indtast din besked"></textarea>
        </div>
        <LightBeigeButton></LightBeigeButton>
      </form>
    </div>
  );
}
