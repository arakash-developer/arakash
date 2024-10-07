import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Phone from '../../../public/icon/phone.png'
import Mail from '../../../public/icon/mail.png'
import Address from '../../../public/icon/address.png'


const Contact = () => {
    return (
        <div id='contact' className='mt-4 py-[90px] dark:bg-[#0c0c0c] bg-[#fff] side'>
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
                        <h3 className='font-normal tracking-[2px] text-base leading-[170%] uppercase text-[#0c0c0c] dark:text-[#eaeaea] font-poppins'>Farmgate, Dhaka, Bangladesh</h3>
                    </div>
                </div>
            </div>
            <div className="map mb-[90px] w-[780px] h-[450px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.8776111855225!2d90.38719611156844!3d23.756106697395374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a426199b0d%3A0x6a2c655d06c88ec9!2sFarmgate%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1728291119158!5m2!1sen!2sbd" className='w-full h-full' style={{ border: "0", allowfullscreen: "", loading: "lazy" }} referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contactform"></div>
        </div>
    )
}

export default Contact

