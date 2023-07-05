import React from 'react'

import Payouts from "/Payouts.png"
import PaymentLinks from "/PaymentLinks.png"
import AutoCollect from "/AutoCollect.png"
import EasySplit from "/EasySplit.png"
function ExploreProduct() {
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold   text-[#ECBD00]'>  Explore other product</h1>

<br />
<br />
            <div className=' grid grid-cols-1  md:grid-cols-2  mx-8 gap-8'>

                <div className=' flex gap-4 flex-col md:flex-row p-10   shadow-md '>
                    <div>
                    <img src={Payouts} width={50}  />

                    </div>
                    <div className=' flex-1 '>
                        <h1 className=' font-medium'>Payouts</h1>
                        <br />
                        <p className=''>Fastest and easiest way to send money to any bank account/ UPI ID/ Wallet or cards, instantly 24x7, even on a bank holiday.</p>

                    </div>
                </div>

                <div className=' flex gap-4 flex-col md:flex-row    p-10 shadow-md '>
                    <div className='flex-1 '>
                    <img src={EasySplit} width={50}  />

                    </div>
                    <div>
                        <h1 className=' font-medium'>Easy Split</h1>
                        <br />
                        <p>Split vendor commissions and manage marketplace settlements.</p>

                    </div>
                </div>
                <div className=' flex gap-4 flex-col md:flex-row   p-10 shadow-md '>
                    <div >
                    <img src={PaymentLinks} width={50}  />

                    </div>
                    <div className='flex-1 '>
                        <h1 className=' font-medium'>Payment Links</h1>
                        <br />
                        <p>No-code payment links to collect payments over WhatsApp, SMS, Facebook, Twitter and other channels.</p>

                    </div>
                </div>

                <div className=' flex gap-4 flex-col md:flex-row    p-10 shadow-md '>
                    <div>
                    <img src={AutoCollect} width={50}    />

                    </div>
                    <div className=' flex-1 '>
                        <h1 className=' font-medium'>Auto Collect</h1>
                        <br />
                        <p>Collect and reconcile IMPS/NEFT/UPI payments using unique virtual accounts and UPI IDs.</p>

                    </div>
                </div>



          
            </div>



        </div>
    )
}

export default ExploreProduct