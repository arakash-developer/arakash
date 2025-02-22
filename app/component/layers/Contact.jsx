"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Phone from '../../../public/icon/phone.png'
import Mail from '../../../public/icon/mail.png'
import Address from '../../../public/icon/address.png'
import Link from 'next/link'
import Send2 from '../../../public/icon/send2.png'
import axios from 'axios'


const Contact = () => {
    let [name, setName] = useState("");
    let [nameerror, setNameerror] = useState("");
    let [email, setEmail] = useState("");
    let [emailerror, setEmailerror] = useState("");
    let [messege, setMessege] = useState("");
    let [messegeerror, setMessegeerror] = useState("");
    // let [loading, setisloading] = useState();

    let namehandler = (e) => {
        setName(e.target.value);
        setNameerror("");
    }
    let emailhandler = (e) => {
        setEmail(e.target.value);
        setEmailerror("")
    }
    let messegehandler = (e) => {
        setMessege(e.target.value)
        setMessegeerror("")
    }
    let formvalidation = (e) => {
        e.preventDefault()
        if (!name) {
            setNameerror("Please Enter Your Name...")
        }
        if (!email) {
            setEmailerror("Please Enter Your Email...")
        }
        else if(!(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email))){
            setEmailerror("Email Please...")
        }
        if (!messege) {
            setMessegeerror("Please Enter Your Messeges...")
        } else {
            saveData();
            setName("")
            setEmail("")
            setMessege("")
        }
    }

    let saveData = () => {
        setMessegeerror("Loading...")
        axios.post('https://akashapi.vercel.app/create', {
            name,
            email,
            messege
        })
        .then(function (response) {
                setMessegeerror("Loading...")
                setMessegeerror("Email Send SuccessFull!!")
                emailsendgeeting();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    let emailsendgeeting = () => {
        setTimeout(() => {
            setMessegeerror("")
        }, 2000);

    }
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
                        <div className="">
                            <Image src={Phone} alt="Phone" />
                        </div>
                        <div className="">
                            <h3 className='font-normal text-base leading-[170%] uppercase text-[#0c0c0c] dark:text-[#eaeaea]'>+880 19902463303</h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-between bg-[#ffffff11] border-2 dark:border-[#ffffff1f] rounded-2xl w-full md:w-96 xl:w-[420px] h-24 px-5">
                        <div>
                            <Image src={Mail} alt="mail" />
                        </div>
                        <div className="">
                            <h3 className='font-normal text-base leading-[170%] lowercase text-[#0c0c0c] dark:text-[#eaeaea]'>arakash.developer@gmail.com</h3>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex items-center justify-between px-5 bg-[#ffffff11] border-2 dark:border-[#ffffff1f] rounded-2xl w-full h-24">
                    <div className="">
                        <Image src={Address} alt="Address" />
                    </div>
                    <div className="">
                        <h3 className='font-normal tracking-[2px] text-base leading-[170%] uppercase text-[#0c0c0c] dark:text-[#eaeaea] font-poppins'>Farmgate, Dhaka, Bangladesh</h3>
                    </div>
                </div>
            </div>
            <div className="map mb-[90px] max-w-[780px] h-[450px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.8776111855225!2d90.38719611156844!3d23.756106697395374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a426199b0d%3A0x6a2c655d06c88ec9!2sFarmgate%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1728291119158!5m2!1sen!2sbd" className='w-full h-full dark:mix-blend-luminosity' style={{ border: "0", allowfullscreen: "", loading: "lazy" }} referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div id='sendme' className="contactform">
                <h2 className='mb-[46px] font-medium text-[2.38rem] leading-[130%] dark:text-[#fff] text-[#0c0c0c]'>Let's make your project brilliant!</h2>
                <form>
                    <div className="flex items-center gap-8 flex-col lg:flex-row py-3">
                        <div className="relative w-full">
                            <input onChange={namehandler} className='px-4 font-normal outline-none bg-transparent border dark:border-[#ffffff1f] text-base dark:text-[#999] text-[#0c0c0c] rounded-xl w-full xl:w-[374px] h-[50px]' type="text" name="" id="" value={name} placeholder='Full Name' />
                            <p className={`absolute top-full left-0 font-normal text-sm capitalize text-center text-[red] dark:text-[#78CC6D] my-1`} href='#'>{nameerror}</p>
                        </div>
                        <div className="relative w-full">
                            <input onChange={emailhandler} type='email' className='px-4 font-normal outline-none bg-transparent border dark:border-[#ffffff1f] text-base dark:text-[#999] text-[#0c0c0c] rounded-xl w-full xl:w-[374px] h-[50px]' value={email} placeholder='Email' />
                            <p className={`absolute top-full left-0 font-normal text-sm capitalize text-center text-[red] dark:text-[#78CC6D] my-1`} href='#'>{emailerror}</p>
                        </div>
                    </div>
                    <div className="relative">
                        <textarea onChange={messegehandler} className='mt-8 rounded-xl w-full lg:w-[48.69rem] h-[120px] py-2 px-4 outline-none bg-transparent border dark:border-[#ffffff1f] dark:text-[#999] text-[#0c0c0c]' name="" id="" value={messege}></textarea>
                        <p className={`absolute top-full left-0 font-normal text-sm capitalize text-center text-[red] dark:text-[#78CC6D] my-1`} href='#'>{messegeerror}</p>
                    </div>
                    <button type='button' onClick={formvalidation} className='pb-10 flex gap-2 items-baseline justify-start font-semibold text-sm uppercase text-center text-[#0c0c0c] dark:text-white/[0.9] mt-8' href='#'>Send Message <Image src={Send2} alt='send2' /></button>
                </form>
            </div>
            {/* <p>console.log("esaedfvdavcdsa535235");</p> */}
        </div>
    )
}

export default Contact

// mix-blend-mode: luminosity;