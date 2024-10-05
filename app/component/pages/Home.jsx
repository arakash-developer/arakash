"use client"
import { useContext } from 'react'
import { Contex } from '../../contex/DarkContext'
import { Technology } from '../layers/layers/Technology'
import { Toolstack } from '../layers/layers/Toolstack'
import { NewTechnology } from '../layers/layers/NewTechnology '
import Link from 'next/link'
import About from '../layers/layers/About'

const Home = () => {
    let { dark } = useContext(Contex)
    return (
        <div className={`w-full ${dark ? "dark" : null} lg:h-[100vh] lg:overflow-scroll no-scrollbar cursor-pointer rounded-tr-3xl`}>
            <About />
            <Technology />
        </div>
    )
}

export default Home;