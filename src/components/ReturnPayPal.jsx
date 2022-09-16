import React from 'react';
import SuccessIllustration from './img/11_Success-1 [Converted] 1.svg';


const ReturnPayPal = () => {
	return (
		<div className='w-screen h-screen'>
			<div className='flex justify-center items-center'>
				<div className='mt-32'>
          <img src={SuccessIllustration} alt='success_Illustration' />
          <div className='text-center' >
            <h3 className='text-lime-500 text-4xl mt-12 font-semibold'>Transaction Success!</h3>
            <p className='text-black font-normal text-sm mt-4'>Your transaction was successful.</p>
          </div>
          <div className='flex justify-between mt-8'>
            <button className='bg-orange-200 rounded p-4 ml-16'>Print Recipt </button>
            <button className='bg-orange-200 rounded p-4 mr-16'>Continue </button>
          </div>
				</div>
			</div>
		</div>
	);
};

export default ReturnPayPal;
