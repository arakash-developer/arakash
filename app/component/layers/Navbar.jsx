"use client"
import { useContext } from "react"
import { Contex } from '../../contex/DarkContext'
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

const Navbar = () => {
    let IconData = [
        {
            title: "about",
            icon: faUserPen,
            go: "#about",
        },
        {
            title: "projects",
            icon: faBriefcase,
            go: "#projects",
        },
        {
            title: "skills",
            icon: faCode,
            go: "#skills",
        },
        {
            title: "services",
            icon: faScrewdriverWrench,
            go: "#services",
        },
        {
            title: "resume",
            icon: faFilePdf,
            go: "#resume",
        },
        {
            title: "articles",
            icon: faNewspaper,
            go: "#articles",
        },
        {
            title: "contact",
            icon: faPaperPlane,
            go: "#sendme",
        },
    ]

    let { dark, setDark,leftOpen,setLeftOpen} = useContext(Contex)
    let clickmanager = () => {
        setDark(!dark)
    }
    let LeftHandeler = () => {
        setLeftOpen(true)
    }
    return (
        <div className={`w-[95px] flex flex-col gap-2 ${dark ? "dark" : null}`}>
            <div onClick={LeftHandeler} className="bg-[#fff] dark:bg-[#0C0C0C] dark:text-[#fff] center rounded-3xl w-full h-10 sm:h-16 cursor-pointer group">
                <FontAwesomeIcon className='sm:h-[26px] sm:w-[26px] dark:text-[#fff] text-[#0c0c0c] group-hover:text-[#78cc6d] px-2 md:px-0' icon={faBarsStaggered} />
            </div>
            <Link href='#' onClick={clickmanager} className="dark:bg-[#0c0c0c] bg-[#fff] center rounded-3xl w-full sm:h-16 h-10 cursor-pointer group relative">
                <FontAwesomeIcon className='sm:h-[26px] sm:w-[26px] dark:text-[#fff] text-[#0c0c0c] group-hover:text-[#78cc6d]' icon={faSun} />
                <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full group-hover:left-[100%] opacity-0 invisible group-hover:visible group-hover:opacity-100">
                    {dark ? "Light" : "Dark"}
                </div>
            </Link>
            <div className="dark:bg-[#0c0c0c] bg-[#fff] rounded-3xl w-full cursor-pointer ">
                {
                    IconData.map((item, index) => {
                        return (
                            <Link key={index} className='w-full py-5 inline-flex justify-center relative group' href={item.go}>
                                <FontAwesomeIcon className={`h-4 dark:text-[#fff] group-hover:text-[#78cc6d] text-[#0c0c0c]`} icon={item.icon} />
                                <div className="absolute left-[65%] transition-all duration-300 ease-linear top-1/2 -translate-y-1/2 text-xs text-[#0C0C0C] uppercase py-1 px-3 font-medium bg-[#78cc6d] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-[100%] sm:group-hover:left-[75%] z-50">
                                    {item.title}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navbar