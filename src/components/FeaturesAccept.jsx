import React from 'react'
import epos from "/epos.png"
import Upi from "/Upi.png"
import PaymentLink from "/PaymentLink.png"
import Invoice from "/Invoice.png"
import Withdraw from "/Withdraw.png"
import Hardware from "/Hardware.png"
import securePayment from "/securePayment.png"
import supportTeam from "/supportTeam.png"
function FeaturesAccept() {
    return (
        <div className='flex md:flex-row flex-col mx-4 gap-y-6 md:gap-y-0 my-16  md:mx-32'>
            <div className=' flex-1 flex  flex-col  justify-center'>
                <h1 className=' text-2xl flex items-center  font-semibold text-[#ECBD00] '><img src={epos} width={100} alt="Accept Epos" /> Features of AcceptPe ePOS</h1>
                <br />
                <p className=' text-gray-700 font-medium'>Accept payments conveniently using UPI QR and Payment links at Retail Stores & during home deliveries.</p>
            </div>

            <div className=' flex-1'>
                <ul className=' font-medium flex flex-col gap-y-4 border-2 p-6  rounded-md shadow-md '>

                    <li className=' border-2  p-2 rounded-lg flex  items-center gap-x-3'> <img src={Upi} />UPI QR based collection
                    </li>

                    <li className=' border-2  p-2 rounded-lg flex  items-center gap-x-3'> <img src={PaymentLink} /> Payment link
                    </li>
                    <li className=' border-2  p-2 rounded-lg  flex  items-center gap-x-3 '><img src={Invoice} />  Invoice for payment</li>
                    <li className=' border-2  p-2 rounded-lg flex  items-center gap-x-3 '><img src={Withdraw} />  Withdraw money anytime to bank account</li>
                    <li className=' border-2  p-2 rounded-lg flex  items-center gap-x-3 '><img src={Hardware} />  Eliminates the need of POS hardware </li>
                    <li className=' border-2  p-2 rounded-lg flex  items-center gap-x-3'><img src={securePayment} /> Secure payment transactions through the reliable group </li>
                    <li className=' border-2  p-2 rounded-lg flex  items-center gap-x-3'> <img src={supportTeam} />  Backed by dedicated support team</li>
                </ul>
            </div>
        </div>
    )
}

export default FeaturesAccept