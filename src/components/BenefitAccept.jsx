import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import epos from "/epos.png"
function BenefitAccept() {
    return (
        <div className=' md:mx-16'>

            <h1 className=' px-4  md:px-0 text-xl font-semibold flex items-center gap'> <img  width={50}  src={epos}/> Benefits of Accept ePOS</h1>
            <br />

            <div className='flex md:flex-row flex-col'>

                <div className=' flex-1 px-4  md:px-0'>

                    <ul className=' font-medium flex flex-col gap-y-4'>


                        <li className=' flex  gap-x-2 items-center'><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /> User-friendly interface</li>

                        <li className=' flex  gap-x-2 items-center'><FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} />  Eliminates the need of POS machine</li>
                        <li className=' flex  gap-x-2 items-center'> <FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /> Cashless transactions every time</li>
                        <li ><div  className=' flex  gap-x-2 items-center'> <FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /> Multiple Payment Modes including Credit Cards, Debit Cards,</div><div className='ml-6'>
                            NetBanking, UPI, Wallets</div> </li>

                        <li></li>
                        <li className=' flex  gap-x-2 items-center'> <FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /> Keeps track of sales</li>
                        <li className=' flex  gap-x-2 items-center'> <FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} />Equipped with Acceptpe payment gateway</li>
                        <li  className=' flex  gap-x-2 items-center'> <FontAwesomeIcon color='#17ee7b' icon={faCircleCheck} /> Minimal chargeback</li>

                    </ul>

                </div>

                <div className='flex-1'>

                </div>

            </div>
        </div>
    )
}

export default BenefitAccept