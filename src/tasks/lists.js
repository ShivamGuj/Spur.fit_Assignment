import React from 'react'
import Topbar from './topbar'
import Tasks from './tasks'

const Lists = () => {
    return (
        <div className='w-screen '>
            <div className=' w-[90%] absolute right-5'>
                <Topbar />
                <Tasks />
            </div>
        </div>
    )
}

export default Lists
