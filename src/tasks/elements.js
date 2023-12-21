import React from 'react'
import User2 from '../assets/User2.png'
import Sparkle2 from '../assets/Sparkle2.svg'
import dots from '../assets/3dots.png'

const elements = () => {
    return (
        <div className='flex justify-center  h-[50px] border'>
            <div className='w-[4%] flex items-center justify-center'>
                <div className="w-3.5 h-3.5 bg-white rounded-[10.50px] border border-stone-300" />
            </div>
            <div className='w-[18%] flex items-center'>
                <img src={User2} alt='' className='w-6 h-6 rounded-full' />
                <h className="text-zinc-800 text-sm font-normal font-['DM Sans'] leading-tight ml-3">Rahul Last name</h>
            </div>
            <div className='w-[9%] flex items-center'>
                <h className="text-center text-zinc-600 text-sm font-normal font-['DM Sans'] leading-none ml-[15%]">44.5%</h>
            </div>
            <div className='w-[9%] flex items-center'>
                <h className="text-center text-zinc-600 text-sm font-normal font-['DM Sans'] leading-none ml-[4%]">Jun 10th’ 23</h>
            </div>
            <div className='w-[14%] flex items-center'>
                <h className=" text-center text-indigo-600 text-sm font-normal font-['DM Sans'] border px-3 bg-indigo-200 rounded">Plan 2 - Beginner</h>
            </div>
            <div className='w-[9%] flex items-center'>
                <h className="text-center text-zinc-600 text-sm font-normal font-['DM Sans'] leading-none ml-[4%]">Jun 10th’ 23</h>
            </div>
            <div className='w-[14%] flex items-center'>
                <h className=" text-center text-green-600 text-sm font-normal font-['DM Sans'] border px-3 bg-green-200 rounded ml-[3%]">Plan 2 - Beginner</h>
            </div>
            <div className='w-[9%] flex items-center'>
                <h className="text-center text-zinc-600 text-sm font-normal font-['DM Sans'] leading-none ml-[4%]">Jun 10th’ 23</h>
            </div>
            <div className='w-[9%] flex items-center'>
                <h className="text-center text-zinc-600 text-sm font-normal font-['DM Sans'] leading-none ">Tim Deboar</h>
            </div>
            <div className='w-[5%] flex items-center'>
                <img src={Sparkle2} alt='' className='' />
                <img src={dots} alt='' className='ml-2' />
            </div>
        </div>
    )
}

export default elements
