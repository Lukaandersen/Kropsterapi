import PurpleButton from "@/components/buttons/PurpleButton";
import BrownButton from "@/components/buttons/BrownButton";

export default function BookingCard(props) {
  return (
    <div className="bg-darkBeige mx-6 my-2 flex flex-col items-center justify-center">
      <p className="m-5 text-primaryLight text-xl">{props.titel}</p>
      <img src="3_sessioner.png" alt="Billede af noget spirituelt" className="w-64" />
      <p className="text-center text-lg m-5 text-primaryLight">{props.text}</p>
      <p className="text-5xl font-bold  !important">{props.price}</p>
      <BrownButton></BrownButton>
    </div>
  );
}
