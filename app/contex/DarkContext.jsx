"use client"
import {createContext} from 'react'
import { useState } from 'react';

export let Contex = createContext();
const DarkContext = ({children}) =>{
    let [dark,setDark] = useState(true)
    let [leftOpen,setLeftOpen] = useState(false)
    return(
        <Contex.Provider value={{dark,setDark,leftOpen,setLeftOpen}}>
            {children}
        </Contex.Provider>
    );
};
export default DarkContext;