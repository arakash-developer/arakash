import React from 'react'


const Toolcard = ({percen,title}) => {
    return (
        <div className='dark:bg-[#ffffff05] box-border rounded-2xl w-full h-52 md:w-44 md:h-44 border-2 dark:border-[#ffffff1f] center flex-col gap-4'>
            <div className="rounded-full w-28 h-28 border-4 dark:border-[#ffffff1f] relative after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:border-4 box-border after:rounded-full after:border-[#78cc6d] center text-[#fff]">
                <div className="center">
                    <h3 className='font-medium text-[1.06rem] leading-[529%] text-center text-[#0c0c0c] dark:text-white/[0.9]'>{percen}%</h3>
                </div>
            </div>
            <h3 className='font-normal text-sm leading-[114%] text-center text-[#0c0c0c] dark:text-white/[0.9]'>{title}</h3>
        </div>
    )
}

export default Toolcard