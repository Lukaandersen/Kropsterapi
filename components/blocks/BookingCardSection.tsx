import BookingCard from "../cards/BookingCard/BookingCard";
import { InCartProvider } from "@/app/ProductContext";

export default function BookingCardSection(props) {
    return (
<div className="md:flex justify-around px-5">
<BookingCard buttonText={props.buttonText} price={props.price1} titel={props.titel1} text={props.text1} id={1}></BookingCard>
<BookingCard buttonText={props.buttonText} price={props.price2} titel={props.titel2} text={props.text2} id={2}></BookingCard>
<BookingCard buttonText={props.buttonText} price={props.price3} titel={props.titel3} text={props.text3} id={3}></BookingCard>
</div>

    )
}