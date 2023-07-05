import React from 'react'

function AcceptGram

() {
  return (
    <div>



        {/* <img src={acceptGram} alt="" /> */}

      <div  className=' grid md:grid-cols-3 cols-1 mx-16 gap-3 my-16'>
          <div className=' shadow-sm p-6'>
            <h1 className=' font-medium'>1. Send</h1>
            <br />
            <p>Create a AcceptPe link and notify via email SMS or WhatsApp.</p>
          </div>
          <div className='shadow-sm p-6'>
            <h1 className=' font-medium '>2. Capture</h1>
            <br />
            <p>Beneficiary enters their bank account/ debit card/ UPI/ Paytm/Amazon Pay details.</p>
             </div>
          <div className='shadow-sm p-6'><h1 className=' font-medium '>
              3. Redeem
            </h1>
            <br />
            <p>Beneficiary receives a payout in their preferred account.</p>
            </div>
      </div>

        
    </div>
  )
}



export default AcceptGram