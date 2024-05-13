import LightBeigeButton from "@/components/buttons/LightBeigeButton";
import BrownButton from "@/components/buttons/BrownButton";
export default function Card() {
  return (
    <div className="mt-24 block md:grid md:grid-cols-[2fr,1fr]">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:justify-start bg-darkBeige m-6 md:max-h-[300px]">
          <img src="3_sessioner.png" alt="billede af noget spirituelt" className="hidden md:block w-full h-full md:w-full md:h-auto md:justify-self-start opacity-35" />
          <div className="mx-10 md:mx-6 my-2 flex flex-col h-[430px] md:h-[300px] md:w-[250px] justify-center md:justify-center md:items-center relative">
            <p className="m-0 text-[32px] md:text-primaryPurple text-primaryLight">Enkelt Session</p>
            <div className="relative mx-auto text-center w-64">
              <img src="3_sessioner.png" alt="Billede af noget spirituelt" className="w-full h-auto opacity-35 md:mx-auto md:hidden" />
              <p className="absolute top-0 left-0 right-0 bottom-0 md:relative flex items-center justify-center text-center md:text-start text-md md:m-5 md:mt-0 text-primaryLight md:text-primaryPurple">
                En enkelt session indebærer en indledende samtale, samt 45 minutters Kropsterapi inklusiv vand og The efter behov.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center md:col-span-1 md:items-center">
            <div className="items-center">
              <p className="text-[32px] font-bold text-primaryLight md:text-primaryPurple">400 DKK</p>
              <BrownButton></BrownButton>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primaryLight m-6">
        <h1 className="text-center text-2xl py-4">Dine Betalingsoplysninger</h1>
        <form className="flex flex-col gap-5" action="">
          <div className="mb-2 flex flex-col">
            <label className="pl-4" htmlFor="name">
              Navn
            </label>
            <input name="name" type="text" className="bg-gray-300 p-2 ml-4 w-full max-w-[calc(100%-2rem)]" required />
          </div>
          <div className="mb-2 flex flex-col">
            <label className="pl-4" htmlFor="email">
              Email
            </label>
            <input name="email" type="email" className="bg-gray-300 p-2 ml-4 w-full max-w-[calc(100%-2rem)]" required />
          </div>
          <div className="mb-2 flex flex-col">
            <label className="pl-4" htmlFor="phone">
              Tlf nr.
            </label>
            <input name="phone" type="tel" className="bg-gray-300 p-2 ml-4 w-full max-w-[calc(100%-2rem)]" required />
          </div>
          <div className="mb-2 flex flex-col">
            <label htmlFor="message" className="pl-4">
              Besked
            </label>
            <textarea id="message" className="bg-gray-300 p-2 ml-4 w-full max-w-[calc(100%-2rem)]" />
          </div>
        </form>
        <div className="flex flex-col items-center">
          <h2 className="text-xl pt-6 pb-3">Betalingsmetode</h2>
          <img src="betalingsdut.png" alt="betalingsmetoder" />
          <LightBeigeButton></LightBeigeButton>
        </div>
      </div>
    </div>
  );
}
