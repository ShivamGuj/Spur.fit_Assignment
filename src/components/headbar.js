import React from 'react'
import Search from '../assets/Search.svg'
import Frame from '../assets/Frame.png'
import Sparkle from '../assets/Sparkle.svg'
import User from '../assets/User.png'

const Headbar = () => {
    return (
        <div className='flex absolute top-0 right-5 rounded-b-3xl w-[90%] h-[70px] justify-center shadow-lg'>
            <div className='w-[25%] relative flex items-center'>
                <p className='font-semibold text-lg'>Home</p>
            </div>

            <div className='w-[33%] relative flex items-center'>
                <img src={Search} alt='' className=' absolute left-2' />
                <input type="text" placeholder='Search Anything' className='rounded-full w-[100%] h-[2.8vw] pl-10 bg-[#f8ecfc]' />
            </div>

            <div className='w-[20%] relative flex items-center justify-center ml-52'>
                <div className=''>
                    <img src={Frame} alt='' className='' />
                </div>
                <div className=' flex items-center ml-5'>
                    <div className=' rounded-full w-[11vw] h-[3vw] bg-gradient-to-r from-[#5448eb] to-[#9462eb] pl-4 shadow-xl flex items-center'>
                        <img className='mr-2' src={Sparkle} alt='' />
                        <h className="text-center text-white xl:text-base text-sm font-medium font-['DM Sans'] leading-snug">Ask Copilot</h>
                    </div>
                </div>
                <div className='flex items-center ml-5'>
                    <img src={User} alt='' className='shadow-2xl' />
                </div>
            </div>
        </div>

    )
}

export default Headbar
