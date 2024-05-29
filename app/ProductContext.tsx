"use client"
import { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext <Record<string, any>>({
    inCart: [],
    setInCart: (newCart) => {},
    clearCart: () => {},
});
export const InCartProvider = ({ children }) => {
    const [inCart, setInCartState] = useState([]);
    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");

       
    const setInCart = (newCart) => {
        setInCartState(newCart);
        localStorage.setItem('inCart', JSON.stringify(newCart));
    };

    const clearCart = () => {
        setInCart([]);
        localStorage.removeItem('inCart');
    };

useEffect(() => {
        const itemsInStorage = localStorage?.getItem('inCart');
        if (itemsInStorage) {
            setInCartState(JSON.parse(itemsInStorage));
        }
    }, []);

    return (
        <ProductContext.Provider value={{ inCart: inCart, setInCart: setInCart, clearCart: clearCart, name: name, email: email, setName: setName, setEmail: setEmail }}>
            {children}
        </ProductContext.Provider>
    );
};
