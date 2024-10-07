import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Phone from '../../../public/icon/phone.png'
import Mail from '../../../public/icon/mail.png'
import Address from '../../../public/icon/address.png'


const Contact = () => {
    return (
        <div className='mt-4 py-[90px] dark:bg-[#0c0c0c] bg-[#fff] side'>
            <p className='mb-2 dark:text-[#fff] text-[#0c0c0c] uppercase border-2 dark:border-[#ffffff1f] rounded-full inline-flex py-2 px-5 items-center gap-2'>
                <FontAwesomeIcon className='h-3 dark:text-[#fff] group-hover:text-[#78cc6d] text-[#0c0c0c]' icon={faPaperPlane} />
                CONTACT
            </p>
            <h2 className='mt-3 mb-[45px] dark:text-[#fff] text-[#0c0c0c] font-medium text-[2.38rem] leading-[130%]'>Let's Get in Touch!</h2>
            <div className="mt-[45px] mb-[90px]">
                <div className="flex justify-between items-center flex-col md:flex-row gap-8">
                    <div className="flex items-center justify-between bg-[#ffffff11] border-2 dark:border-[#ffffff1f] rounded-2xl w-full md:w-96 xl:w-[420px] h-24 px-5">
                        <div className="flex items-center">
                            <Image src={Phone} alt="" />
                            <h4 className='pl-5 font-normal text-[1.06rem] leading-[170%] text-[#0c0c0c] dark:text-[#eaeaea] opacity-70'>Phone</h4>
                        </div>
                        <div className="">
                            <h3 className='font-normal text-base leading-[170%] uppercase text-[#0c0c0c] dark:text-[#eaeaea]'>+880 19902463303</h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-between bg-[#ffffff11] border-2 dark:border-[#ffffff1f] rounded-2xl w-full md:w-96 xl:w-[420px] h-24 px-5">
                        <div>
                            <Image src={Mail} alt="" />
                        </div>
                        <div className="">
                            <h3 className='font-normal text-base leading-[170%] lowercase text-[#0c0c0c] dark:text-[#eaeaea]'>arakash.developer@gmail.com</h3>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex items-center justify-between px-5 bg-[#ffffff11] border-2 dark:border-[#ffffff1f] rounded-2xl w-full h-24">
                    <div className="flex items-center justify-between">
                        <Image src={Address} alt="" />
                        <h4 className='pl-5 font-normal text-[1.06rem] leading-[170%] text-[#0c0c0c] dark:text-[#eaeaea] opacity-70'>Address</h4>
                    </div>
                    <div className="">
                        <h3 className='font-normal text-base leading-[170%] uppercase text-[#0c0c0c] dark:text-[#eaeaea] font-poppins'>Kurigram Sadar, Dhaka, Bangladesh</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact