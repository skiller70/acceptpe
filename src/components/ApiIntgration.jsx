import React from 'react'
import APIGIF from "/apiIntegration.png"
function ApiIntgration() {
    return (
        <>

            {/* Payment gateway integration */}
            {/* Payment gateway integration is simple and easy */}

            <div className='flex flex-col md:flex-row md:mx-10 my-20 gap-y-8 md:gap-y-0'>

                <div className='flex-1 order-last'>
                    <img src={APIGIF} alt="" />
                </div>

                <div className=' flex-1 md:px-16 order-1 mx-10'>
                    <h1 className='text-4xl font-semibold  text-[#ECBD00]'>Payment gateway integration is simple and easy</h1>
                    <br />
                    <p className=' text-gray-700 font-medium'>AcceptPe payment gateway comes with simple SDKs and APIs along with detailed API documentation</p>
                        <br/>
                    <button className='px-4 py-2 bg-[#ECBD00] rounded-md text-white'>View API docs</button>
                </div>
            </div>


            {/* Payment gateway integration */}




        </>
    )
}

export default ApiIntgration