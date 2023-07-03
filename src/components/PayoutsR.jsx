import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import MultipleAccounts from "/MultipleAccounts.png"
import EscrowAccounts from "/EscrowAccounts.png"
import CorporateCards from "/CorporateCards.png"
import PaytmWallets from "/PaytmWallets.png"
import ExternalCredit from "/ExternalCredit.png"
import acceptpeWallets from "/acceptpeWallets.png"


function PayoutsR() {
    return (
        <div className=' mx-8 '>
            <div className='text-center text-3xl font-semibold  text-[#ECBD00]'>
                Payouts, reimagined
            </div>
                    <br />
                <br />
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-6'>    

              

                <div className='  py-8 px-4 shadow-md'>
                    {/* IMG */}
                    <img src={EscrowAccounts} alt="" width={50} />

                    {/* IMG */}
                    <h1 className='my-2 font-semibold'> Escrow Accounts</h1>
                    <div className=' flex flex-col gap-y-2'>

                    <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>Easy reconciliation</p>

                        <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>Track transfer status and reasons for failure in real-time</p>

                       <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>Assisted escrow account opening</p>

                       <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>Move money directly from between accounts without any manual intervention</p>

                       
                    </div>


                </div>

                <div className=' py-8 px-4 shadow-md'>
                    {/* IMG */}
                    <img src={MultipleAccounts} alt="" width={50} />

                    {/* IMG */}
                    <h1 className='my-2 font-semibold'> Multiple Current Accounts</h1>
                    <div className=' flex flex-col gap-y-2'>

                        <p><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /> No need for manual recharges</p>
                        <p><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /> Make instant transfers</p>
                        <p> <FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /> Increase success rate with multi-bank accounts
                        </p>
                    </div>


                </div>

                <div className='  py-8 px-4 shadow-md'>
                    {/* IMG */}
                    <img src={CorporateCards} alt="" width={50} />

                    {/* IMG */}
                    <h1 className='my-2 font-semibold'> Corporate Credit Cards</h1>
                    <div className=' flex flex-col gap-y-2'>

                    <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>Add multiple corporate cards</p>
                    <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>Get access to funds immediately</p>
                    <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>Bring Your Own Corporate Credit Card</p>
                    </div>


                </div>

            

                <div className='  py-8 px-4 shadow-md'>
                    {/* IMG */}
                    <img src={ ExternalCredit} alt="" width={50} />
                   
                    {/* IMG */}
                    <h1 className='my-2 font-semibold'> Cashfree Wallet

</h1>
                    <div className=' flex flex-col gap-y-2'>

                    <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>Get industry-leading success rate using smart routing via multiple gateways</p>
                    <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>Recharge instantly and choose to pay to bank account, UPI ID, AmazonPay or any tokenized cards</p>
                    <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>Get the wallet balance updated in real-time</p>
                    </div>


                </div>


                <div className='  py-8 px-4 shadow-md'>
                    {/* IMG */}
                    <img src={PaytmWallets} alt="" width={50} />

                    {/* IMG */}
                    <h1 className='my-2 font-semibold'> Paytm Wallets</h1>
                    <div className=' flex flex-col gap-y-2'>

                    <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>No need for separate integration</p>
                    <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>Get instant transfer confirmation</p>
                    <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>Add your Paytm account instantly</p>
                    </div>


                </div>



                <div className='  py-8 px-4 shadow-md'>
                    {/* IMG */}
                    <img src={acceptpeWallets} alt="" width={50} />

                    {/* IMG */}
                    <h1 className='my-2 font-semibold'> External Credit Lines</h1>
                    <div className=' flex flex-col gap-y-2'>

                    <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>Get on-demand disbursals</p>
                    <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>Get a pre-approved credit limit from multiple lending partners</p>
                    <p className=' flex gap-x-2'><div><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /></div>Minimal documentation</p>
                    </div>


                </div>



      
            </div>


        </div>
    )
}

export default PayoutsR