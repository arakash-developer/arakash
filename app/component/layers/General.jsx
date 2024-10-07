import React from 'react'
import GenCard from './GenCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'


const General = () => {
    return (
        <div className='pb-20'>
            <h2 className='mb-[30px] dark:text-[#fff] text-[#0c0c0c] font-medium text-[2.38rem] leading-[130%]'>General Skills</h2>
            <p className='dark:text-[#fff] uppercase mb-10 text-[#0c0c0c] border-2 dark:border-[#ffffff1f] rounded-full inline-flex py-2 px-5 items-center gap-2'>
                <FontAwesomeIcon className='h-3 dark:text-[#fff] group-hover:text-[#78cc6d] text-[#0c0c0c]' icon={faCode} />
                Tool Skills
            </p>
            <div className="flex gap-[30px] flex-wrap">
            <GenCard percen='100' title='Html'/>
            <GenCard percen='100' title='Css'/>
            <GenCard percen='100' title='Bootstrap'/>
            <GenCard percen='90' title='Js'/>
            <GenCard percen='70' title='Jquery'/>
            <GenCard percen='90' title='Gsap'/>
            <GenCard percen='90' title='Tailwind'/>
            <GenCard percen='90' title='ChatGpt'/>
            </div>
        </div>
    )
}

export default General