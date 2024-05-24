"use client"
import { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext({ inCart: [], setInCart: () => {} });

export const InCartProvider = ({ children }) => {
    const [inCart, setInCartState] = useState(() => {
        // Initialiser inCart ved at hente det fra localStorage
        const itemsInStorage = localStorage.getItem('inCart');
        return itemsInStorage ? JSON.parse(itemsInStorage) : [];
    });

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

    return (
        <ProductContext.Provider value={{ inCart: inCart, setInCart: setInCart, clearCart: clearCart }}>
            {children}
        </ProductContext.Provider>
    );
};
