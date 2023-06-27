import React from 'react'
import CurrentAccount from "/CurrentAccount.png"
import DigitalCollections from "/DigitalCollections.png"
import ExpenseManagement from "/ExpenseManagement.png"
import Financial from "/Financial.png"
function BankingPayment() {
    return (
        <div className=' px-8 md:px-20 pb-20'>
            <div className=' flex gap-y-10 md:gap-y-0 items-center text-center md:flex-row flex-col '>
                <div className=' flex-1 flex justify-center'>
                    <ul className=' text-3xl font-semibold flex flex-col gap-y-6'>  <li>Banking.</li>
                        <li>Payments.</li>
                        <li>Accounting.</li>
                        <li className="text-xl text-[#ECBD00]">All at one place.</li></ul>

                </div>

                {/* IMAGE */}
                <div className='flex-1'>
                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className=' font-semibold border-2 rounded-3xl shadow-md flex flex-col items-center  py-16 gap-y-4 border-[#ECBD00]'>
                            <img src={CurrentAccount} alt="" />
                            Feature-packed Current Account</div>

                        <div className=' font-semibold border-2 rounded-3xl shadow-md flex flex-col items-center  py-16 gap-y-4  border-[#ECBD00] '>
                            <img src={Financial} alt="" />
                            <h1 className=' text-center'>Get Financial & Business Reports at one place</h1></div>
                        <div className=' font-semibold border-2 rounded-3xl shadow-md flex flex-col items-center  py-16 gap-y-4 border-[#ECBD00]'>
                            <img src={ExpenseManagement} alt="" />
                            Expense Management with SmartX</div>

                        <div className=' font-semibold border-2  rounded-3xl shadow-md flex flex-col items-center  py-16 gap-y-4  border-[#ECBD00]'>
                            <img src={DigitalCollections} alt="" />
                            <h1 className=' text-center'>Complete Payment Suite for Digital Collections & Payouts</h1></div>






                    </div>
                </div>
                {/* IMAGE */}

            </div>



        </div>
    )
}

export default BankingPayment