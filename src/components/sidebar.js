import React from 'react'
import Home from '../assets/Home.svg'
import Logo from '../assets/Logo.svg'
import Frame1 from '../assets/Frame1.svg'
import Frame2 from '../assets/Frame2.svg'
import Frame3 from '../assets/Frame3.svg'
import Circle from '../assets/Circle.svg'
import Briefcase from '../assets/Briefcase.svg'
import Texti from '../assets/Text.svg'
import Setting from '../assets/Setting.svg'

const Sidebar = () => {
    //wanted to make a sidebar component
    return (
        <div className='flex items-center h-screen'>
            <div className='h-full justify-center w-[80px] flex rounded shadow-xl'>
                <div className='absolute top-[2%]'>
                    <img src={Logo} alt='' className='z-0' />
                    <img src={Frame1} alt='' className=' absolute top-[21%] left-[30%] z-10' />
                    <img src={Frame2} alt='' className=' absolute top-[30%] left-[28%] z-10' />
                    <img src={Frame3} alt='' className=' absolute top-[55%] left-[28.5%] z-10' />
                </div>

                <div className="w-[70px] h-px absolute border top-[11%]" />

                <div className='absolute top-[15%]'>
                    <img src={Home} alt='' className='' />
                </div>
                <div className='absolute top-[23%]'>
                    <img src={Circle} alt='' className='' />
                </div>
                <div className='absolute top-[30%]'>
                    <img src={Briefcase} alt='' className='' />
                </div>
                <div className='absolute top-[38%]'>
                    <img src={Texti} alt='' className='' />
                </div>
                <div className='absolute bottom-[6%]'>
                    <img src={Setting} alt='' className='' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
