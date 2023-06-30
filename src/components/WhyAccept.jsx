import React from 'react'

import plug from "/Plug-and-play APIs.png"
import secure from "/secure.png"
import success from "/success.png"
import support from "/support.png"
import dashboard from "/dashboard.png"
import onBoarding from "/onBoarding.png"


function WhyAccept() {



    return (
        <>

            <div className='relative '>

                    <div className=' flex-col h-[100%]    w-[100%]  px-[8%] flex   md:justify-evenly items-center'>
                    <h1 className=' text-3xl font-semibold text-[#ECBD00] '>Why AcceptPe ?</h1>
                    <br />
                    <br />
                    <div className=' grid grid-cols-1 md:grid-cols-3 gap-y-16 text-gray-700 font-medium '>
                        <div className=' '> 
                            <img src={plug} alt="" width={40} />
                            <h1 className=' font-bold text-[#ECBD00] '>Plug-and-play APIs</h1>
                            <br />
                            <p className='w-[75%] font-medium'>We offer easy to integrate and developer-friendly plug-and-play APIs that comes with detailed API docs</p>
                        </div>
                        <div>
                            <img src={secure} alt="" width={40} />
                            <h1 className=' font-bold text-[#ECBD00] '>100% secure and reliable</h1>
                            <br />
                            <p className='w-[75%] font-medium'>We are PCI DSS Level-1 compliant and ensure safe and secure online payment processing</p>
                        </div>






                        <div>
                            <img src={success} alt="" width={40} />
                            <h1 className=' font-bold text-[#ECBD00] '>Higher success rates</h1>
                            <br />
                            <p className='w-[75%] font-medium'>Offer seamless checkout experience & higher success rates to your customers with integrated iFrame</p>
                        </div>






                        <div>
                            <img src={support} alt="" width={40} />
                            <h1 className=' font-bold text-[#ECBD00] '>24/7 technical support</h1>
                            <br />
                            <p className='w-[75%] font-medium'>We offer technical/ customer support through multiple channels like email, toll free phone call, WhatsApp and chatbot
                                Help desk  </p>
                        </div>







                        <div>
                            <img src={dashboard} alt="" width={40} />
                            <h1 className=' font-bold text-[#ECBD00] '> Unified dashboard</h1>
                            <br />
                            <p className='w-[75%] font-medium'>Unified dashboard that gives you real-time view about transaction data and reports</p>
                        </div>





                        <div>
                            <img src={onBoarding} alt="" width={40} />
                            <h1 className=' font-bold text-[#ECBD00] '>Quick onboarding</h1>
                            <br />
                            <p className='w-[75%] font-medium'>Get onboarded digitally with online KYC process and quick account verification</p>
                        </div>




                    </div>

                </div>


                {/* <img className=' '   src={accpetBack} /> */}



            </div>

        </>
    )
}

export default WhyAccept