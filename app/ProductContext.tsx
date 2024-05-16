import { createContext, useState } from 'react';

export const ProductContext = createContext({inCart:[],setInCart:()=>{}});

export const InCartProvider = ({children}) =>{
    const [inCart, setInCart ] = useState([])
   console.log(inCart)
    return <ProductContext.Provider value={{inCart:inCart,setInCart:setInCart}}>{children}</ProductContext.Provider>
}