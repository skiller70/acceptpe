import React from 'react'
import APIGIF from "../../public/apiIntegration.png"
function ApiIntgration() {
    return (
        <>

            {/* Payment gateway integration */}
            {/* Payment gateway integration is simple and easy */}

            <div className='flex mx-10 my-20'>

                <div className='flex-1'>
                    <img src={APIGIF} alt="" />
                </div>

                <div className=' flex-1 px-16'>
                    <h1 className='text-4xl font-semibold  text-[#ECBD00]'>Payment gateway integration is simple and easy</h1>
                    <br />
                    <p className=''>Accept Pe payment gateway comes with simple SDKs and APIs along with detailed API documentation</p>

                    <button>View API docs</button>
                </div>
            </div>


            {/* Payment gateway integration */}




        </>
    )
}

export default ApiIntgration