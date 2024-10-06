"use client"
import { useContext } from 'react'
import { Contex } from '../../contex/DarkContext'
import { Technology } from '../layers/Technology'
import { Toolstack } from '../layers/Toolstack'
import { NewTechnology } from '../layers/NewTechnology '
import Link from 'next/link'
import About from '../layers/About'
import Video from '../layers/Video'
import Projects from '../layers/Projects'

const Home = () => {
    let { dark } = useContext(Contex)
    return (
        <div className={`w-full ${dark ? "dark" : null} lg:h-[100vh] lg:overflow-scroll no-scrollbar cursor-pointer rounded-tr-3xl`}>
            <About />
            <Projects />
            <Technology />
        </div>
    )
}

export default Home;