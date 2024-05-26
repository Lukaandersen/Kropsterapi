"use client"
import { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext <Record<string, any>>({
    inCart: [],
    setInCart: (newCart) => {},
    clearCart: () => {},
});
export const InCartProvider = ({ children }) => {
    const [inCart, setInCartState] = useState([]);
       
    const setInCart = (newCart) => {
        // Opdater inCart og localStorage
        setInCartState(newCart);
        localStorage.setItem('inCart', JSON.stringify(newCart));
    };

    const clearCart = () => {
        // Fjern produkterne fra kurven og fra localStorage
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
        <ProductContext.Provider value={{ inCart: inCart, setInCart: setInCart, clearCart: clearCart }}>
            {children}
        </ProductContext.Provider>
    );
};
