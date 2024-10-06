import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { SiNextdotjs } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import Toolcard from './Toolcard';
import Vs from '../../../public/icon/vs.png'
import Chat from '../../../public/icon/chat.png'

export const Toolstack = ({dark}) => {
    return (
        <div>
            <div className='mt-4 dark:bg-[#0c0c0c] bg-[#fff]'>
                <div className="content pb-32">
                    <p className='dark:text-[#fff] uppercase text-[#0c0c0c] border-2 dark:border-[#ffffff1f] rounded-full inline-flex py-2 px-5 items-center gap-2'>
                        <FontAwesomeIcon className='h-3 dark:text-[#fff] group-hover:text-[#78cc6d] text-[#0c0c0c]' icon={faCode} />
                        Tool Skills
                    </p>
                    <h2 className='mt-3 mb-[66px] dark:text-[#fff] text-[#0c0c0c] font-medium text-[2.38rem] leading-[130%]'>Tool Stack</h2>
                    <div className="flex gap-[30px] items-center flex-wrap">
                      <Toolcard title='VsCode' img={Vs} percen="90"/>
                      <Toolcard title='ChatGpt' img={Chat} percen="60"/>
                      <Toolcard title='ChatGpt' img={Chat} percen="90"/>
                      <Toolcard title='ChatGpt' img={Chat} percen="70"/>
                      <Toolcard title='ChatGpt' img={Chat} percen="50"/>
                      <Toolcard title='ChatGpt' img={Chat} percen="60"/>
                      <Toolcard title='ChatGpt' img={Chat} percen="70"/>
                      <Toolcard title='ChatGpt' img={Chat} percen="40"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
