"use client"
import React from 'react'
import { IoClose } from "react-icons/io5";
import { useContext } from "react"
import { Contex } from '../../contex/DarkContext'
import { Poppins } from 'next/font/google'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { FaSearch } from "react-icons/fa";


const poppins = Poppins({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ['latin']
})

const jakarta = Plus_Jakarta_Sans({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ['latin']
})

const LeftSide = () => {

    let { dark, leftOpen, setLeftOpen } = useContext(Contex)
    let LeftHandeler = () => {
        setLeftOpen(!leftOpen)
    }
    return (
        <div className={`${dark ? "dark" : null} cursor-pointer`}>
            <div className={`leftSide text-[#FFF] absolute -left-full top-0 bg-[#fff] dark:bg-[#0c0c0c] h-full sm:w-[338px] w-[280px] transition-all duration-300 ease-linear box-shadow ${leftOpen ? "visible opacity-1 left-0" : "invisible opacity-0"}`}>
                <div onClick={LeftHandeler} className="absolute left-full top-0 bg-[#fff] dark:bg-[#0c0c0c] w-[68px] h-[68px] rounded-r-[32px] flex justify-center items-center cursor-pointer hover:bg-[#78CC6D] dark:hover:bg-[#78CC6D]">
                    <IoClose className='dark:text-[#FFFFFF] text-[#0c0c0c] text-[30px]' />
                </div>

                <div className="px-[25px] py-[25px] overflow-y-scroll h-[100vh] no-scrollbar">
                    <div className="max-w-72 h-12 border border-[#666] relative">
                        <input type="text" className={`w-full h-full pl-3 pr-10 bg-transparent dark:text-[#fff] text-[#0c0c0c] ${jakarta.className}`} />
                        <div className="searchIcon absolute right-0 top-1/2 -translate-y-1/2 h-9 w-9 hover:bg-[#78CC6D] flex justify-center items-center mr-2">
                            <FaSearch className=' dark:text-[#fff] text-[#0c0c0c] text-[20px]' />
                        </div>
                    </div>
                    <div className="mt-[50px]">
                        <h2 className={`font-semibold text-lg leading-[117%] text-[#0c0c0c] dark:text-white/[0.9] pb-5 border-b dark:border-[#ffffff26] ${jakarta.className}`}>Recent Posts</h2>
                        <h3 className={`mt-3 pb-3 border-b dark:border-[#ffffff26] font-normal text-sm text-[#0c0c0c] dark:text-white/[0.9] ${poppins.className}`}>Brand Identity with Code</h3>
                        <h3 className={`mt-3 pb-3 border-b dark:border-[#ffffff26] font-normal text-sm text-[#0c0c0c] dark:text-white/[0.9] ${poppins.className}`}>Data Center Infrastructure</h3>
                        <h3 className={`mt-3 pb-3 border-b dark:border-[#ffffff26] font-normal text-sm text-[#0c0c0c] dark:text-white/[0.9] ${poppins.className}`}>Music Player Design</h3>
                        <h3 className={`mt-3 pb-3 border-b dark:border-[#ffffff26] font-normal text-sm text-[#0c0c0c] dark:text-white/[0.9] ${poppins.className}`}>Data Analytics Dashboard</h3>
                        <h3 className={`mt-3 pb-3 border-b dark:border-[#ffffff26] font-normal text-sm text-[#0c0c0c] dark:text-white/[0.9] ${poppins.className}`}>Creativity Is More Than</h3>
                    </div>
                    <div className="mt-[50px]">
                        <h2 className={`font-semibold text-lg leading-[117%] text-[#0c0c0c] dark:text-white/[0.9] pb-5 border-b dark:border-[#ffffff26] ${jakarta.className}`}>Recent Comments</h2>
                        <h3 className={`mt-3 pb-3 border-b dark:border-[#ffffff26] font-normal text-sm text-[#0c0c0c] dark:text-white/[0.9] ${poppins.className}`}>Brand Identity with Code</h3>
                        <h3 className={`mt-3 pb-3 border-b dark:border-[#ffffff26] font-normal text-sm text-[#0c0c0c] dark:text-white/[0.9] ${poppins.className}`}>Data Center Infrastructure</h3>
                        <h3 className={`mt-3 pb-3 border-b dark:border-[#ffffff26] font-normal text-sm text-[#0c0c0c] dark:text-white/[0.9] ${poppins.className}`}>Music Player Design</h3>
                        <h3 className={`mt-3 pb-3 border-b dark:border-[#ffffff26] font-normal text-sm text-[#0c0c0c] dark:text-white/[0.9] ${poppins.className}`}>Data Analytics Dashboard</h3>
                        <h3 className={`mt-3 pb-3 border-b dark:border-[#ffffff26] font-normal text-sm text-[#0c0c0c] dark:text-white/[0.9] ${poppins.className}`}>Creativity Is More Than</h3>
                    </div>
                    <div className="mt-[50px]">
                        <h2 className={`font-semibold text-lg leading-[117%] text-[#0c0c0c] dark:text-white/[0.9] pb-5 border-b dark:border-[#ffffff26] ${jakarta.className}`}>Archives</h2>
                        <h3 className={`mt-3 pb-3 border-b dark:border-[#ffffff26] font-normal text-sm text-[#0c0c0c] dark:text-white/[0.9] ${poppins.className}`}>October 2024</h3>
                    </div>
                    <div className="mt-[50px]">
                        <h2 className={`font-semibold text-lg leading-[117%] text-[#0c0c0c] dark:text-white/[0.9] pb-5 border-b dark:border-[#ffffff26] ${jakarta.className}`}>Categories</h2>
                        <h3 className={`mt-3 pb-3 border-b dark:border-[#ffffff26] font-normal text-sm text-[#0c0c0c] dark:text-white/[0.9] ${poppins.className}`}>Code</h3>
                        <h3 className={`mt-3 pb-3 border-b dark:border-[#ffffff26] font-normal text-sm text-[#0c0c0c] dark:text-white/[0.9] ${poppins.className}`}>Design</h3>
                        <h3 className={`mt-3 pb-3 border-b dark:border-[#ffffff26] font-normal text-sm text-[#0c0c0c] dark:text-white/[0.9] ${poppins.className}`}>Development</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSide