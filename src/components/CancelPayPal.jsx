import React from 'react'
import FailNow1 from './img/FailNow1.svg'


const CancelPayPal = () => {
  return (
    <div className='w-screen h-screen'>
			<div className='flex justify-center items-center'>
				<div className='mt-32'>
          <img src={FailNow1} alt='success_Illustration' />
          <div className='text-center' >
            <h3 className='text-red-400 text-4xl mt-12 font-semibold'>Oops, Transaction failed!</h3>
            <p className='text-black font-normal text-sm mt-4'>Your transaction was not successful.</p>
          </div>
          <div className='mt-8'>
            <button className='w-full bg-orange-200 rounded p-4 mr-16'>Go Home </button>
          </div>
				</div>
			</div>
		</div>
  )
}

export default CancelPayPal