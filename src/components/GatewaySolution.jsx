import React from 'react'
import allSolution from "../../public/allSolution.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
function GatewaySolution() {
    return (
        <>

            {/* Payment gateway integration */}
            {/* Payment gateway integration is simple and easy */}

            <div className='flex mx-10 py-20'>

                <div className='flex-1'>
                    <img src={allSolution} alt="" />
                </div>

                <div className=' flex-1 px-16'>
                    <h1 className='text-4xl font-semibold  text-[#ECBD00]'>Why choose Easebuzz payment gateway solution?</h1>
                    <br />
                    {/* --------------------------- */}
                    <div className=' grid grid-cols-2 gap-y-6 mx-6  font-semibold text-[#ECBD00]'>
                        <div className='flex items-center gap-x-2'><FontAwesomeIcon icon={faCircleCheck} color='#17ee7b' /> Plug-and-play APIs</div>
                        <div className='flex items-center gap-x-2'><FontAwesomeIcon icon={faCircleCheck} color='#17ee7b' /> PCI DSS compliance level-1</div>
                        <div className='flex items-center gap-x-2'><FontAwesomeIcon icon={faCircleCheck} color='#17ee7b' />24*7 technical support</div>
                        <div className='flex items-center gap-x-2'><FontAwesomeIcon icon={faCircleCheck} color='#17ee7b' /> Quick onboarding</div>




                    </div>

                    {/* --------------------------- */}
                </div>



            </div>


            {/* Payment gateway integration */}




        </>
    )
}

export default GatewaySolution