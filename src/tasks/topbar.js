import { React, useState } from 'react'
import Plus from '../assets/Plus.svg'
import Search2 from '../assets/Search2.svg'
import Funnel from '../assets/Funnel.svg'
import Dropdown from '../assets/Dropdown.png'

const Topbar = () => {


    const [active, setActive] = useState(true)
    const [pending, setPending] = useState(false)
    const [archieve, setArchieve] = useState(false)

    const HandleActive = () => {
        if (active) {
            setActive(false)
            setArchieve(false)
            setPending(false)
        }
        else {
            setActive(true)
            setArchieve(false)
            setPending(false)
        }
    }

    const handlePending = () => {
        if (pending) {
            setActive(false)
            setArchieve(false)
            setPending(false)
        }
        else {
            setActive(false)
            setArchieve(false)
            setPending(true)
        }
    }

    const handleArchieve = () => {
        if (archieve) {
            setActive(false)
            setArchieve(false)
            setPending(false)
        }
        else {
            setActive(false)
            setArchieve(true)
            setPending(false)
        }
    }

    return (
        <div className='flex justify-center h-[70px] rounded-t-2xl border'>
            <div className='flex items-center w-[50%]'>
                <button className='ml-5' onClick={HandleActive}>
                    <h className={`${!active ? 'relative bottom-[8px]' : ''}`}>Active</h>
                    <h className={`border px-[3px] rounded-md ml-2 bg-opacity-20 ${!active ? 'bg-gray-500 relative bottom-[8px]' : 'bg-violet-600 '}`}>{16}</h>
                    {active && <div className="w-[74px] h-[3px] mt-3 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-[999px]" />}
                </button>
                <button className='ml-5' onClick={handlePending}>
                    <h className={`${!pending ? 'relative bottom-[8px]' : ''}`}>Pending</h>
                    <h className={`border px-[3px] rounded-md ml-2 bg-opacity-20 ${!pending ? 'bg-gray-500 relative bottom-[8px]' : 'bg-violet-600 '}`}>{16}</h>
                    {pending && <div className="w-[88px] h-[3px] mt-3 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-[999px]" />}
                </button>
                <button className='ml-5' onClick={handleArchieve}>
                    <h className={`${!archieve ? 'relative bottom-[8px]' : ''}`}>Archieve</h>
                    <h className={`border px-[3px] rounded-md ml-2 bg-opacity-20 ${!archieve ? 'bg-gray-500 relative bottom-[8px]' : 'bg-violet-600 '}`}>{8}</h>
                    {archieve && <div className="w-[93px] h-[3px] mt-3 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-[999px]" />}
                </button>
            </div>
            <div className='relative flex items-center w-[50%] px-10'>
                <button className='border bg-gradient-to-r mr-5 from-indigo-600 to-violet-600 flex items-center px-3 py-2 rounded-full'>
                    <img src={Plus} alt='' className='mr-1' />
                    <h className="text-center text-white w-[5.7vw] xl:text-[13.5px] text-[11.5px] font-normal font-['DM Sans'] leading-snug">Add New</h>
                </button>
                <div className='w-[65%] relative flex items-center mr-5'>
                    <img src={Search2} alt='' className=' absolute left-2 w-6' />
                    <input type="text" placeholder='Search Anything' className='rounded-full w-[100%] h-[2.8vw] pl-10 bg-[#f8f4f4]' />
                </div>
                <div className='mr-5 flex items-center justify-center border-2 border-violet-600 px-3 py-2 rounded-full cursor-pointer'>
                    <img src={Funnel} alt='' className='' />
                    <div className=" text-indigo-600 xl:text-[13.5px] text-[11.5px] w-[6vw] font-normal font-['DM Sans'] text-center">Filter by</div>
                    <img src={Dropdown} alt='' className='ml-1' />
                </div>
            </div>
        </div>
    )
}

export default Topbar
