import { createContext, useState } from "react";

export const ThemeContext = createContext({ handleTheme : function(){}, theme : ''});

function Theme({children}){

    const [theme, setTheme] = useState('dark');

    return <>
        <ThemeContext.Provider value={{ handleTheme : function handleConsole(){
            setTheme(theme === 'dark' ? 'light' : 'dark');
        }, theme: theme}}>{children}</ThemeContext.Provider>
    </>
}

export default Theme;