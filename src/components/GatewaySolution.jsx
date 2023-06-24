import React from 'react'
import allSolution from "/allSolution.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
function GatewaySolution() {
    return (
        <>

            {/* Payment gateway integration */}
            {/* Payment gateway integration is simple and easy */}
                <div>
                <h1 className='text-4xl px-10 md:px-0  md:text-center font-semibold  text-[#ECBD00]'>Why choose Easebuzz payment gateway solution?</h1>
                <div className='flex-col md:flex-row flex md:mx-10 md:py-20 gap-y-6 md:gap-y-0'>
          
          <div className='flex-1 order-last mx-4'>
              <img src={allSolution} alt="" />
          </div>

          <div className=' flex-1 px-10 md:px-16'>
             
              <br />
              {/* --------------------------- */}
              <div className=' grid grid-cols-2 gap-y-6 md:mx-6  font-semibold text-[#ECBD00]'>
                  <div className='flex items-center gap-x-2'><FontAwesomeIcon icon={faCircleCheck} color='#17ee7b' /> Plug-and-play APIs</div>
                  <div className='flex items-center gap-x-2'><FontAwesomeIcon icon={faCircleCheck} color='#17ee7b' /> PCI DSS compliance level-1</div>
                  <div className='flex items-center gap-x-2'><FontAwesomeIcon icon={faCircleCheck} color='#17ee7b' />24*7 technical support</div>
                  <div className='flex items-center gap-x-2'><FontAwesomeIcon icon={faCircleCheck} color='#17ee7b' /> Quick onboarding</div>




              </div>

              {/* --------------------------- */}
          </div>



      </div>
                </div>
          


            {/* Payment gateway integration */}




        </>
    )
}

export default GatewaySolution