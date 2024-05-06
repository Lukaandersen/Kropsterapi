import { createContext, useState } from 'react';

export const DarkContext = createContext({});

export const DarkModeProvider = ({children}) =>{
    const [darkMode, setDarkMode ] = useState(false)
    function toggleDarkMode(){
        setDarkMode(old=>!old)
    }
    const value = {
        darkMode,toggleDarkMode
    }
    return <DarkContext.Provider value={value}>{children}</DarkContext.Provider>
}