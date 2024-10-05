"use client"
import { useState,useContext} from "react"
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faUserPen } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { Contex } from '../../../contex/DarkContext'


const Navbar = () => {
    let {dark,setDark} = useContext(Contex)
    let clickmanager = () => {
        setDark(!dark)
    }
    return (
        <div className={`w-[95px] flex flex-col gap-2 ${dark ? "dark" : null}`}>
            <div className="bg-[#fff] dark:bg-[#0C0C0C] dark:text-[#fff] center rounded-3xl w-full h-16 cursor-pointer group">
                <FontAwesomeIcon className='h-[26px] w-[26px] dark:text-[#fff] text-[#0c0c0c] group-hover:text-[#78cc6d] px-2 md:px-0' icon={faBarsStaggered} />
            </div>
            <Link href='#' onClick={clickmanager} className="dark:bg-[#0c0c0c] bg-[#fff] center rounded-3xl w-full h-16 cursor-pointer group relative">
                <FontAwesomeIcon className='h-[26px] w-[26px] dark:text-[#fff] text-[#0c0c0c] group-hover:text-[#78cc6d]' icon={faSun} />
                <div className="absolute left-[75%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full">
                    {dark ? "Dark" : "Light"}
                </div>
            </Link>
            <div className="dark:bg-[#0c0c0c] bg-[#fff] rounded-3xl w-full cursor-pointer ">
                <Link className='w-full py-5 inline-flex justify-center relative group' href='#about'>
                    <FontAwesomeIcon className='h-4 dark:text-[#fff] group-hover:text-[#78cc6d] text-[#0c0c0c]' icon={faUserPen} />
                    <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-[75%]">
                        about
                    </div>
                </Link>
                <Link className='w-full py-5 inline-flex justify-center relative group' href="#skills">
                    <FontAwesomeIcon className='h-4 dark:text-[#fff] text-[#0c0c0c] group-hover:text-[#78cc6d]' icon={faCode} />
                    <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-[75%]">
                        skills
                    </div>
                </Link>
                <Link className='w-full py-5 inline-flex justify-center relative group' href="#services">
                    <FontAwesomeIcon className='h-4 dark:text-[#fff] text-[#0c0c0c] group-hover:text-[#78cc6d]' icon={faScrewdriverWrench} />
                    <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-[75%]">
                        services
                    </div>
                </Link>
                <Link className='w-full py-5 inline-flex justify-center relative group' href="projects">
                    <FontAwesomeIcon className='h-4 dark:text-[#fff] text-[#0c0c0c] group-hover:text-[#78cc6d]' icon={faBriefcase} />
                    <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-[75%]">
                        projects
                    </div>
                </Link>
                <Link className='w-full py-5 inline-flex justify-center relative group' href="resume">
                    <FontAwesomeIcon className='h-4 dark:text-[#fff] text-[#0c0c0c] group-hover:text-[#78cc6d]' icon={faFilePdf} />
                    <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-[75%]">
                        resume
                    </div>
                </Link>
                <Link className='w-full py-5 inline-flex justify-center relative group' href="articles">
                    <FontAwesomeIcon className='h-4 dark:text-[#fff] text-[#0c0c0c] group-hover:text-[#78cc6d]' icon={faNewspaper} />
                    <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-[75%]">
                        articles
                    </div>
                </Link>
                <Link className='w-full py-5 inline-flex justify-center relative group' href="contact">
                    <FontAwesomeIcon className='h-4 dark:text-[#fff] text-[#0c0c0c] group-hover:text-[#78cc6d]' icon={faPaperPlane} />
                    <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-[75%]">
                        contact
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar