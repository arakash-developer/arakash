import React from 'react'

const About = () => {
    return (
        <div id='about' className='dark:bg-[#0c0c0c] bg-[#fff] side'>
            <div className="content pt-[80px] pb-[95px]">
                <p className='font-normal sm:text-xl md:text-2xl leading-[130%] dark:text-[#fff] text-[#0c0c0c]'>Hello, I’m <span className='text-[#78cc6d]'>Full Stack Developer</span></p>
                <h1 className='mt-[18px] max-w-[672px] font-medium text-[35px] sm:text-[45px] md:text-[50px] lg:text-[3.25rem] leading-[130%] dark:text-[#fff] text-[#0c0c0c]'>Web Developer and <span className='text-[#0c0c0c] bg-[#78cc6d] rounded-full px-2 rotate-2 inline-block'>Web Scientist</span>  Based in Dhaka, Bangladesh.</h1>
                <p className='py-8 font-normal text-sm leading-[170%] dark:text-[#eaeaea] text-[#0c0c0cd3]'>Have worked in a variety of positions, including key developer, solution designer, and data architect.
                    Strong engineering background combined with closely working with business customers.
                </p>
                <div className="flex flex-wrap items-start sm:flex-row justify-start md:items-center gap-2 md:gap-14 lg:gap-2 xl:gap-[100px]">
                    <div className="flex gap-[20px] items-center">
                        <h2 className='font-normal text-6xl leading-[140%] dark:text-[#fff] text-[#0c0c0c]'>10+</h2>
                        <p className='font-normal text-sm leading-[170%] dark:text-[#eaeaea] max-w-[80px]'>Completed Projects</p>
                    </div>
                    <div className="flex gap-[20px] items-center">
                        <h2 className='font-normal text-6xl leading-[140%] dark:text-[#fff] text-[#0c0c0c]'>02+</h2>
                        <p className='font-normal text-sm leading-[170%] dark:text-[#eaeaea] max-w-[80px]'>Years of Experience</p>
                    </div>
                    <div className="flex gap-[20px] items-center">
                        <h2 className='font-normal text-6xl leading-[140%] dark:text-[#fff] text-[#0c0c0c]'>20+</h2>
                        <p className='font-normal text-sm leading-[170%] dark:text-[#eaeaea] max-w-[80px]'>Problem Solved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
