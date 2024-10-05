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
import Js from '../../../../public/icon/js.svg'
import Reacti from '../../../../public/icon/react.svg'
import Next from '../../../../public/icon/next.svg'
import Redux from '../../../../public/icon/redux.svg'
import Image from 'next/image'
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";


export const Technology = ({ dark }) => {
    return (
        <div id='skills' className={`${dark ? "dark" : null}`}>
            <div className='mt-4 py-75px dark:bg-[#0c0c0c] bg-[#fff]'>
                <div className="content pl-[25px] py-[90px]">
                    <p className='dark:text-[#fff] text-[#0c0c0c] border-2 dark:border-[#ffffff1f] rounded-full inline-flex py-2 px-5 items-center gap-2'>
                        <FontAwesomeIcon className='h-3 dark:text-[#fff] group-hover:text-[#78cc6d] text-[#0c0c0c]' icon={faCode} />
                        Technical Skills
                    </p>
                    <h2 className='mt-3 mb-[45px] dark:text-[#fff] text-[#0c0c0c] font-medium text-[2.38rem] leading-[130%]'>Technologies</h2>
                    <div className="flex gap-5">
                        <div className="skill rounded-2xl w-96 h-28 border-2 dark:text-[#fff] text-[#0c0c0c] dark:border-[#ffffff1f] pl-8 flex items-center relative">
                            <SiNextdotjs className='w-10 h-10' />
                            <h3 className='pl-8 font-medium text-[25px] leading-[170%] text-[#0c0c0c] dark:text-[#eaeaea]'>NextJs</h3>
                            <div className="absolute right-3 top-3 border-2 dark:border-[#ffffff1f] rounded-3xl w-12 h-7 center">
                                <p className='font-normal text-xs leading-[170%] text-[#0c0c0c] dark:text-[#eaeaea]'>90%</p>
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 dark:bg-[#ffffff1f] w-[335px] h-1 rounded">
                            <div className="progress h-full w-[90%] bg-[#78cc6d] rounded"></div>
                            </div>
                        </div>

                        <div className="skill rounded-2xl w-96 h-28 border-2 dark:text-[#fff] text-[#0c0c0c] dark:border-[#ffffff1f] pl-8 flex items-center relative">
                            <RiReactjsLine className='w-10 h-10' />
                            <h3 className='pl-8 font-medium text-[25px] leading-[170%] text-[#0c0c0c] dark:text-[#eaeaea]'>React</h3>
                            <div className="absolute right-3 top-3 border-2 dark:border-[#ffffff1f] rounded-3xl w-12 h-7 center">
                                <p className='font-normal text-xs leading-[170%] text-[#0c0c0c] dark:text-[#eaeaea]'>90%</p>
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 dark:bg-[#ffffff1f] w-[335px] h-1 rounded">
                                <div className="progress h-full w-[90%] bg-[#78cc6d] rounded"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-7">
                        <div className="skill rounded-2xl w-96 h-28 border-2 dark:text-[#fff] text-[#0c0c0c] dark:border-[#ffffff1f] pl-8 flex items-center relative">
                            <TbBrandRedux className='w-10 h-10' />
                            <h3 className='pl-8 font-medium text-[25px] leading-[170%] text-[#0c0c0c] dark:text-[#eaeaea]'>Redux</h3>
                            <div className="absolute right-3 top-3 border-2 dark:border-[#ffffff1f] rounded-3xl w-12 h-7 center">
                                <p className='font-normal text-xs leading-[170%] text-[#0c0c0c] dark:text-[#eaeaea]'>90%</p>
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 dark:bg-[#ffffff1f] w-[335px] h-1 rounded">
                                <div className="progress h-full w-[90%] bg-[#78cc6d] rounded"></div>
                            </div>
                        </div>

                        <div className="skill rounded-2xl w-96 h-28 border-2 dark:text-[#fff] text-[#0c0c0c] dark:border-[#ffffff1f] pl-8 flex items-center relative">
                            <IoLogoNodejs className='w-10 h-10' />
                            <h3 className='pl-8 font-medium text-[25px] leading-[170%] text-[#0c0c0c] dark:text-[#eaeaea]'>Js</h3>
                            <div className="absolute right-3 top-3 border-2 dark:border-[#ffffff1f] rounded-3xl w-12 h-7 center">
                                <p className='font-normal text-xs leading-[170%] text-[#0c0c0c] dark:text-[#eaeaea]'>90%</p>
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 dark:bg-[#ffffff1f] w-[335px] h-1 rounded">
                                <div className="progress h-full w-[90%] bg-[#78cc6d] rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
