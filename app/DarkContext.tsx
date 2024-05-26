import { createContext, useState, ReactNode } from 'react'; 


type Props = {
    children: ReactNode;
};

export const DarkContext = createContext<Record<string, any>>({});
export const DarkModeProvider = ({children}: Props) =>{
    const [darkMode, setDarkMode ] = useState(false)
    function toggleDarkMode(){
        setDarkMode(old=>!old)
    }
    const value = {
        darkMode,toggleDarkMode
    }
    return <DarkContext.Provider value={value}>{children}</DarkContext.Provider>
}