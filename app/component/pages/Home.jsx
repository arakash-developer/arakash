"use client"
import React,{ useContext } from 'react'
import { Contex } from '../../contex/DarkContext'
import Technology from '../layers/Technology'
import About from '../layers/About'
import Projects from '../layers/Projects'
import Contact from '../layers/Contact'

const Home = () => {
    let { dark } = useContext(Contex)
    return (
        <div className={`w-full ${dark ? "dark" : null} lg:h-[100vh] lg:overflow-scroll no-scrollbar cursor-pointer rounded-tr-3xl`}>
            <About />
            <Projects />
            <Technology />
            <Contact />
        </div>
    )
};

export default Home;