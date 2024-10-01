import React from 'react'

function RevenueCard({
    title,
    amount,
    orderCount
}) {
  return (
    <div className='bg-[#146EB4] m-4 pl-4 rounded-lg text-white space-y-1 font-mono'>

        <div className='flex items-center gap-1 font-normal'>
            <p>{title}</p>

            <img 
                src="src/assets/question.svg" 
                alt="" 
                className='w-4'
            />
        </div>

        <div>
            <h1 className='text-2xl font-semibold'>{amount}</h1>

            <span>
                <p>{orderCount} Orders</p>
            </span>
        </div>

        <div></div>

    </div>
  )
}

export default RevenueCard