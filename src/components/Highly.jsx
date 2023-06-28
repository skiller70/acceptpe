import React from 'react'

function Highly() {
  return (
    <div className=' px-4 md:px-16'>
        <h1 className='text-center font-semibold text-3xl'>Highly reliable at scale!</h1>
    <br />
        <div className='py-20 grid grid-cols-1 md:grid-cols-3 gap-6 '>

            <div className=' py-16 shadow-lg rounded-lg  border-2 p-4  border-[#ECBD00] '>
                <h1 className=' text-xl  font-semibold'>Industry-best success rate at 99.98%</h1>
                    <br />
                <p className=' font-medium' >Payouts employs multiple functionalities to ensure all your transfers are successful round the clock.</p>
            </div>

            <div className=' py-16 shadow-lg rounded-lg  border-2 p-4  border-[#ECBD00]'>
                <h1  className=' text-xl  font-semibold'>Powerful risk engine</h1>
                    <br />
                <p className=' font-medium'>Daily transaction limits, fraud detection, along with multiple security checks in place at API and dashboard levels to help reduce risky transactions.</p>
            </div>


            <div className=' py-16 shadow-lg rounded-lg  border-2 p-4  border-[#ECBD00]'>
                <h1  className=' text-xl  font-semibold'>Trusted relationship</h1>
                    <br />
                <p className=' font-medium'>Support for all bankside relationships - failed transfers, reversal, and reconciliation.</p>
            </div>

        </div>

    </div>



  )
}

export default Highly