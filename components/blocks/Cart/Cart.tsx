export default function Card() {
  return (
    <div className="mt-24">
      <div>
        <h1>Her er produkterne</h1>
        <div className="flex justify-center bg-darkBeige m-6">
          <div className="mx-10 md:mx-6 my-2 flex flex-col h-[430px] md:h-[500px] md:w-[250px] items-center justify-center relative">
            <p className="m-0 text-[26px] text-primaryPurple md:text-primaryLight">hahahaha</p>
            <div className="relative mx-auto text-center w-64">
              <img src="3_sessioner.png" alt="Billede af noget spirituelt" className="w-full h-auto opacity-35 md:mx-auto md:w-[200px] " />
              <p className="absolute top-0 left-0 right-0 bottom-0 md:relative flex items-center justify-center text-center text-md md:m-5 md:mt-0 text-primaryLight">hej </p>
            </div>
            <p className="text-[32px] font-bold text-primaryLight">400 DKK</p>
          </div>
        </div>
      </div>

      <div className="bg-primaryLight m-6">
        <h1>Dine Betalingsoplysninger</h1>
        <form className="flex flex-col gap-5" action="">
          <label>
            Navn
            <input name="name" type="text" className="border border-gray-300 rounded-md p-2 ml-2 w-[200px]" />
          </label>
          <label>
            Email
            <input name="email" type="email" className="border border-gray-300 rounded-md p-2 ml-2 w-[200px]" />
          </label>
          <label>
            Tlf nr.
            <input name="name" type="number" className="border border-gray-300 rounded-md p-2 ml-2 w-[200px]" />
          </label>
        </form>
      </div>
    </div>
  );
}
