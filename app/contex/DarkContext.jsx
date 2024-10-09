"use client"
import {createContext} from 'react'
import { useState } from 'react';

export let Contex = createContext();
const DarkContext = ({children}) =>{
    let [dark,setDark] = useState(true)
    return(
        <Contex.Provider value={{dark,setDark}}>
            {children}
        </Contex.Provider>
    );
};
export default DarkContext;