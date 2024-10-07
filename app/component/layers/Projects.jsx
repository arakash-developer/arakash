import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from './ProjectCard'
import Project1 from '../../../public/project1.png'
import Orebi from '../../../public/orebi.jpg'
import Somru from '../../../public/somru.jpg'

const Projects = () => {
  return (
    <div id='projects' className=''>
      <div className='mt-4 py-[75px] dark:bg-[#0c0c0c] bg-[#fff] side'>
        <p className='dark:text-[#fff] uppercase text-[#0c0c0c] border-2 dark:border-[#ffffff1f] rounded-full inline-flex py-2 px-5 items-center gap-2'>
          <FontAwesomeIcon className='h-4 dark:text-[#fff] group-hover:text-[#78cc6d] text-[#0c0c0c]' icon={faBriefcase} />
          Projects
        </p>
        <h2 className='mt-3 mb-[45px] dark:text-[#fff] text-[#0c0c0c] font-medium text-[2.38rem] leading-[130%]'>Explore Portfolio By Technology</h2>
      <div className="heading flex items-center gap-3 mb-8">
          <h4 className='uppercase font-normal text-sm leading-[233%] text-[#323232] py-1 px-4 bg-[#78cc6d] rounded-3xl inline-block'>all</h4>
          <h4 className='uppercase font-normal text-sm leading-[233%] dark:text-[#ffffffe6] py-1 px-4 bg-[#00000010] dark:bg-[#ffffff1f] dark:hover:bg-[#78cc6d] dark:hover:text-[#323232] hover:bg-[#78cc6d] hover:text-[#323232] transition-all duration-300 ease-linear  rounded-3xl inline-block'>Basic</h4>
          <h4 className='uppercase font-normal text-sm leading-[233%] dark:text-[#ffffffe6] py-1 px-4 bg-[#00000010] dark:bg-[#ffffff1f] dark:hover:bg-[#78cc6d] dark:hover:text-[#323232] hover:bg-[#78cc6d] hover:text-[#323232] transition-all duration-300 ease-linear  rounded-3xl inline-block'>React</h4>
          <h4 className='uppercase font-normal text-sm leading-[233%] dark:text-[#ffffffe6] py-1 px-4 bg-[#00000010] dark:bg-[#ffffff1f] dark:hover:bg-[#78cc6d] dark:hover:text-[#323232] hover:bg-[#78cc6d] hover:text-[#323232] transition-all duration-300 ease-linear  rounded-3xl inline-block'>Next</h4>
          <h4 className='uppercase font-normal text-sm leading-[233%] dark:text-[#ffffffe6] py-1 px-4 bg-[#00000010] dark:bg-[#ffffff1f] dark:hover:bg-[#78cc6d] dark:hover:text-[#323232] hover:bg-[#78cc6d] hover:text-[#323232] transition-all duration-300 ease-linear  rounded-3xl inline-block'>Mern</h4>
      </div>
      <div className="gallery grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
        <ProjectCard img={Orebi} title='Orebi | Ecomarce Web Templete' subtitle='Next' go='https://orebi4.vercel.app/'/>
        <ProjectCard img={Somru} title='Somru is an BioScience Company' subtitle='Basic' go='https://akash100a.github.io/somru/'/>
        <ProjectCard img={Project1} title='The App Market on Google Play' subtitle='React' go=''/>
        <ProjectCard img={Project1} title='The App Market on Google Play' subtitle='React' go=''/>
        <ProjectCard img={Project1} title='The App Market on Google Play' subtitle='React' go=''/>
        <ProjectCard img={Project1} title='The App Market on Google Play' subtitle='React' go=''/>
        <ProjectCard img={Project1} title='The App Market on Google Play' subtitle='React' go=''/>
        <ProjectCard img={Project1} title='The App Market on Google Play' subtitle='React' go=''/>
      </div>
      </div>
    </div>
  )
}

export default Projects