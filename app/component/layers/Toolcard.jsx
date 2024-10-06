import React from 'react'
import Vs from '../../../public/icon/vs.png'
import Image from 'next/image'

const Toolcard = ({img,percen,title}) => {
    return (
        <div className='bg-[#ffffff05] box-border rounded-2xl w-44 h-44 border-2 dark:border-[#ffffff1f] center flex-col gap-4'>
            <div className="rounded-full w-28 h-28 border-4 dark:border-[#ffffff1f] relative after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:border-4 box-border after:rounded-full after:border-[#78cc6d] center text-[#fff]">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="w-9 h-9">
                        <Image className='w-full h-full object-cover' src={img} alt='vs' />
                    </div>
                    <h3 className='font-medium text-sm text-[#0c0c0c] dark:text-white/[0.9]'>{percen}%</h3>
                </div>
            </div>
            <h3 className='font-normal text-sm leading-[114%] text-center text-[#0c0c0c] dark:text-white/[0.9]'>{title}</h3>
        </div>
    )
}

export default Toolcard