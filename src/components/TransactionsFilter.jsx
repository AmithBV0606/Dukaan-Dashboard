import React from 'react'

function TransactionsFilter() {
  return (
    <div className='pl-4 mt-4'>

      <div>
        <p className='text-2xl font-mono'>Transactions | This Month</p>
      </div>

      <div className='flex gap-4 mt-4'>
        <button className='bg-slate-300 p-2 rounded-2xl text-gray-600'>Payouts (22)</button>

        <button className='bg-sky-600 p-2 rounded-2xl text-white'>Refunds (6)</button>
      </div>

    </div>
  )
}

export default TransactionsFilter