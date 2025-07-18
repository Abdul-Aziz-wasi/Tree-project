import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext('light');
export const ThemeProvider =({children})=>{

     const [dark, setDark]=useState(
        localStorage.getItem('theme')==="dark"
    )
    useEffect(()=>{
        if(dark){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')

        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light')
        }
        
    },[dark])
    return(
        <ThemeContext.Provider value={{dark,setDark}}>
            {children}

        </ThemeContext.Provider>
    )
}

 export const useDarkMode =()=> useContext(ThemeContext)