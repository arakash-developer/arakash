import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import Toolcard from './Toolcard';
import Vs from '../../../public/icon/vs.png'
import Chat from '../../../public/icon/chat.png'
import Figma from '../../../public/icon/figma.png'
import Xd from '../../../public/icon/xd.png'
import Github from '../../../public/icon/github.png'

export const Toolstack = ({dark}) => {
    return (
        <div>
            <div className='mt-4 dark:bg-[#0c0c0c] bg-[#fff]'>
                <div className="content pb-32">
                    <p className='dark:text-[#fff] uppercase text-[#0c0c0c] border-2 dark:border-[#ffffff1f] rounded-full inline-flex py-2 px-5 items-center gap-2'>
                        <FontAwesomeIcon className='h-4 dark:text-[#fff] group-hover:text-[#78cc6d] text-[#0c0c0c]' icon={faGears} />
                        Tool Skills
                    </p>
                    <h2 className='mt-3 mb-[66px] dark:text-[#fff] text-[#0c0c0c] font-medium text-[2.38rem] leading-[130%]'>Tool Stack</h2>
                    <div className="flex gap-[30px] items-center flex-wrap">
                      <Toolcard title='VsCode' img={Vs} percen="90"/>
                      <Toolcard title='Github' img={Github} percen="90"/>
                      <Toolcard title='Figma' img={Figma} percen="95"/>
                      <Toolcard title='Xd' img={Xd} percen="95"/>
                      <Toolcard title='ChatGpt' img={Chat} percen="70"/>
                      <Toolcard title='ChatGpt' img={Chat} percen="50"/>
                      <Toolcard title='ChatGpt' img={Chat} percen="70"/>
                      <Toolcard title='ChatGpt' img={Chat} percen="40"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
