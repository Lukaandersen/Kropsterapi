import { CartCard } from "./CartCard";
import { useContext } from "react";
import { InCartProvider, ProductContext } from "@/app/ProductContext";


export function CartCardWrapper(props) {
    const { inCart, setInCart } = useContext(ProductContext);
    return (
      <section>
        {inCart.map((prod) => (
          <CartCard key={prod.id} id={prod.id} titel={prod.titel} text={prod.text} price={prod.price} buttonText={prod.buttonText} setChosenTime={props.setChosenTime} />
        ))}
      </section>
    );
  }
  