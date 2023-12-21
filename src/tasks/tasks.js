import React from 'react'
import Elements from './elements'

const Tasks = () => {
    return (
        <div className=''>
            <div className='flex justify-center h-[50px] border bg-[#f3f3f3] ml-auto'>
                <div className='w-[4%] flex items-center justify-center'>
                    <div className="w-3.5 h-3.5 bg-white rounded-[10.50px] border border-stone-300" />
                </div>
                <div className='w-[18%] flex items-center'>
                    <h className="text-center text-zinc-800 text-sm font-medium font-['DM Sans'] leading-tight ml-3">Trainee</h>
                </div>
                <div className='w-[9%] flex items-center'>
                    <h className="text-center text-zinc-800 text-sm font-medium font-['DM Sans'] leading-tight">Compliance</h>
                </div>
                <div className='w-[9%] flex items-center'>
                    <h className="text-center text-zinc-800 text-sm font-medium font-['DM Sans'] leading-tight">Last Workout</h>
                </div>
                <div className='w-[14%] flex items-center'>
                    <h className="text-center text-zinc-800 text-sm font-medium font-['DM Sans'] leading-tight ml-[7%]">Workout Plan</h>
                </div>
                <div className='w-[9%] flex items-center'>
                    <h className="text-center text-zinc-800 text-sm font-medium font-['DM Sans'] leading-tight">Last Modified</h>
                </div>
                <div className='w-[14%] flex items-center'>
                    <h className="text-center text-zinc-800 text-sm font-medium font-['DM Sans'] leading-tight ml-[14%]">Diet Plan</h>
                </div>
                <div className='w-[9%] flex items-center'>
                    <h className="text-center text-zinc-800 text-sm font-medium font-['DM Sans'] leading-tight">Last Modified</h>
                </div>
                <div className='w-[9%] flex items-center'>
                    <h className="text-center text-zinc-800 text-sm font-medium font-['DM Sans'] leading-tight">Trainer</h>
                </div>
                <div className='w-[5%] flex items-center'>
                    <h className="text-center text-zinc-800 text-sm font-medium font-['DM Sans'] leading-tight">Actions</h>
                </div>
            </div>
            <div className='border h-[400px] rounded-b-2xl ml-auto'>
                <Elements />
            </div>
        </div>
    )
}

export default Tasks
