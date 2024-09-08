import { createContext, useState } from "react";

export const ThemeContext = createContext('hi')

export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState(localStorage.getItem('isDark'));

    return (<ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>)
}


