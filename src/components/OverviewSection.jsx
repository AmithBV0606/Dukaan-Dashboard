import React from 'react'

function OverviewSection() {
  return (
    <div className='ml-4 mr-4 flex justify-between items-center mt-4 font-mono'>

      <div className='text-2xl font-normal'>
        <h1>Overview</h1>
      </div>

      <div>
        <div className='bg-gray-50 border-2 border-gray-200 flex items-center gap-2 rounded-md p-1 cursor-pointer'>
          <h1>This Month</h1>
          <img src="src/assets/DownArrow.svg" alt="" className='w-4'/>
        </div>
      </div>

    </div>
  )
}

export default OverviewSection