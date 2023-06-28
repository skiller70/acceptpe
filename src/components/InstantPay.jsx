import React, { useState } from 'react'

function InstantPay() {

    const [paymentMethod, setPaymentMethod] = useState("quick")



    return (
        <div className=' px-16'>
            <h1 className=' text-3xl'>Make instant payouts in real-time!</h1>
            <br />
            <div className='hidden md:flex  font-semibold '> <div className=' flex gap-x-6' ><button onClick={() => { setPaymentMethod("quick") }} className={` py-3 border-[#ECBD00]  ${paymentMethod == "quick" ? "border-b-4 " : ""}'`}>Quick Transfer</button> <button onClick={() => { setPaymentMethod("Bulk") }} className={` py-3 border-[#ECBD00]  ${paymentMethod == "Bulk" ? "border-b-4 " : ""}'`}>Bulk Payouts</button> <button onClick={() => { setPaymentMethod("Payouts") }} className={` py-3 border-[#ECBD00]  ${paymentMethod == "Payouts" ? "border-b-4 " : ""}'`}>Payouts API</button></div> </div>




            <div className='hidden md:flex items-center justify-center'>
                <div className=' flex-1'>

                </div>
                <div className='flex-1'>
                    <div className={` ${paymentMethod == "quick" ? "flex flex-col" : "hidden"}`}>
                        <h1 className=' text-xl font-medium'>Quick Transfer</h1>
                        <br />
                        <p>Do instant payout to users, customers, and vendors using Quick Transfer. Get flexibility on the fund source you want to disburse the money from and the transfer mode.</p>
                    </div>

                    <div className={` ${paymentMethod == "Bulk" ? "flex flex-col" : "hidden"}`}>
                        <h1 className=' text-xl font-medium'>Bulk Payouts</h1>
                        <br />
                        <p>Add beneficiaries and do up to 10,000 bulk payouts in one go with simple excel file upload. Track transfer status in real time and know exact reason for failure.</p>
                    </div>


                    <div className={` ${paymentMethod == "Payouts" ? "flex flex-col" : "hidden"}`}>
                        <h1 className=' text-xl font-medium'>
                            Payouts API</h1>
                        <br />
                        <p>Integrate Payouts with your native solution and expedite upto 10,000 payouts via APIs. Generate custom reports and gain insights - transfers, reversed transfers, statements and more.</p>
                    </div>



                </div>
            </div>
            <div className=' md:hidden'>
                <div className=' flex flex-col my-10'>

                    <div className=' flex-1 '>
                        <h1 className=' text-xl font-semibold text-center'>
                            Quick Transfer </h1>
                        <br />
                        <p>Do instant payout to users, customers, and vendors using Quick Transfer. Get flexibility on the fund source you want to disburse the money from and the transfer mode.</p>
                    </div>

                    <div className=' flex-1'>

                    </div>
                </div>

                <div className=' flex flex-col my-10'>

                    <div className=' flex-1 '>
                        <h1 className=' text-xl font-semibold text-center'>
                            Bulk Payouts </h1>
                        <br />
                        <p>Add beneficiaries and do up to 10,000 bulk payouts in one go with simple excel file upload. Track transfer status in real time and know exact reason for failure.</p>
                    </div>

                    <div className=' flex-1'>

                    </div>
                </div>




                <div className=' flex flex-col my-10'>

                    <div className=' flex-1 '>
                        <h1 className=' text-xl font-semibold text-center'>
                            Payouts API </h1>
                        <br />
                        <p>Integrate Payouts with your native solution and expedite upto 10,000 payouts via APIs. Generate custom reports and gain insights - transfers, reversed transfers, statements and more.</p>
                    </div>

                    <div className=' flex-1'>

                    </div>
                </div>





            </div>

        </div>
    )
}

export default InstantPay