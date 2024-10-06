import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


const ProjectCard = ({img,title,subtitle,go}) => {
    return (
        <div className="rounded-2xl w-96 bg-[#ffffff1f] border-2 dark:border-[#ffffff1f]">
            <div className="m-3 rounded-xl w-[352px] h-72 overflow-hidden">
                <Image className='w-full h-full object-cover' src={img} alt='project1' />
            </div>
            <div className="mt-[18px] mb-[30px] mx-5 flex justify-between items-end">
                <div>
                    <h3 className='font-medium text-[1.06rem] leading-[130%] text-[#0c0c0c] dark:text-[#fff]'>{title}</h3>
                    <Link href='#' className='font-normal text-xs leading-[170%] uppercase dark:text-[#999] py-1 px-4 bg-[#00000010] text-[#000] dark:bg-[#ffffff1f]  dark:hover:bg-[#78cc6d] dark:hover:text-[#fff] hover:bg-[#78cc6d] transition-all duration-300 ease-linear mt-2 rounded-3xl inline-block'>
                        {subtitle}
                    </Link>
                </div>
                <Link href={`${go}`} className="rounded-3xl w-11 h-11 dark:bg-[#ffffff1f] bg-[#00000010]  hover:bg-[#78cc6d] dark:hover:bg-[#78cc6d] transition-all duration-300 ease-linear center -rotate-45 inline-block">
                    <FaArrowRightLong className='dark:text-[#fff]' />
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard