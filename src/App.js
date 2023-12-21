import React from 'react'
import Sidebar from './components/sidebar'
import Headbar from './components/headbar'
import Lists from './tasks/lists'

const App = () => {
  return (
    <div>
      <Sidebar/>
      <Headbar/>
      <div className='absolute w-screen top-[12%]'>
        <Lists/>
      </div>
    </div>
  )
}

export default App
