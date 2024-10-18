"use client"
import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from './ProjectCard'
import ProjectData from '../../helper/ProjectData'

const Projects = () => {
  let [currentData, setCurrentData] = useState(ProjectData)
  let categoryItem = ["all", ...new Set(ProjectData.map((item) => (item.subtitle)))];
  let projectClick = (subtitle) => {
    if (subtitle === "all") {
      setCurrentData(ProjectData)
    }else{
      let filterData = ProjectData.filter((item) => (item.subtitle === subtitle));
      setCurrentData(filterData)
    }
  }
  return (
    <div id='projects' className='projects'>
      <div className='mt-4 py-[75px] dark:bg-[#0c0c0c] bg-[#fff] side'>
        <p className='dark:text-[#fff] uppercase text-[#0c0c0c] border-2 dark:border-[#ffffff1f] rounded-full inline-flex py-2 px-5 items-center gap-2'>
          <FontAwesomeIcon className='h-4 dark:text-[#fff] group-hover:text-[#78cc6d] text-[#0c0c0c]' icon={faBriefcase} />
          Projects
        </p>
        <h2 className='mt-3 mb-[45px] dark:text-[#fff] text-[#0c0c0c] font-medium text-[2.38rem] leading-[130%]'>Explore Portfolio By Technology</h2>
        <div className="heading flex items-center gap-3 mb-8">
          {
            categoryItem.map((item, index) => {
              return (
                <h3 key={index} onClick={() => { projectClick(item) }} className={`uppercase font-normal text-sm leading-[233%] dark:text-[#ffffffe6] py-1 px-4 bg-[#00000010] dark:bg-[#ffffff1f] dark:hover:bg-[#78cc6d] dark:hover:text-[#323232] hover:bg-[#78cc6d] hover:text-[#323232] transition-all duration-300 ease-linear  rounded-3xl inline-block `}>{item}</h3>
              )
            })
          }
        </div>
        <div className="gallery grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          {
            currentData.map((item) => (
              <ProjectCard key={item.id} img={item.image} title={item.title} subtitle={item.subtitle} go={item.go} />
            ))

          }
        </div>
      </div>
    </div>
  )
}

export default Projects