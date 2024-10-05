"use client"
import { useContext } from 'react'
import { Contex } from '../../../contex/DarkContext'

export const NewTechnology = () => {
    let { dark } = useContext(Contex)
    return (
        <div className={`${dark ? "dark" : null}`} id='my'>
            <div className='mt-4 py-75px dark:bg-[#0c0c0c] bg-[#fff]'>
                <div className="content pl-[45px] py-[90px]">
                    <p className='dark:text-[#fff] text-[#0c0c0c]'>Technical Skills My</p>
                    <h2 className='mt-3 mv-[45px] dark:text-[#fff] text-[#0c0c0c]'>Technologies</h2>
                    <h1 className='text-[#fff] py-96'>Hellow</h1>
                    <h1 className='text-[#fff] py-96'>Hellow</h1>
                    <h1 className='text-[#fff] py-96'>Hellow</h1>
                    <h1 className='text-[#fff] py-96'>Hellow</h1>
                    <h1 className='text-[#fff] py-96'>Hellow</h1>
                    <h1 className='text-[#fff] py-96'>Hellow</h1>
                    <h1 className='text-[#fff] py-96'>Hellow</h1>
                </div>
            </div>
        </div>
    )
}
