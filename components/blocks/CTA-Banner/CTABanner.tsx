export default function CTABanner(props) {
  return (
    <div className="bg-mediumBeige p-10 flex  text-primaryPurple flex-col items-center justify-center">
      <p className="text-[32px]">{props.titel}</p>
    </div>
  );
}
