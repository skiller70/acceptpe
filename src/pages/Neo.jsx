import React, { useEffect } from 'react'
// import neoHero from "/neoHero.gif"




import BankingPayment from '../components/BankingPayment'
import mobileFinal from "/mobileFinal.gif"
import Footer from '../components/Footer'
import payoutChart from "/payoutChart.jpg"
import Highly from '../components/Highly'
import InstantPay from '../components/InstantPay'
import payoutM from "/payoutM.gif"
import payoutmain from "/payoutmain.gif"
import OneStop from '../components/OneStop'
import PayoutsR from '../components/PayoutsR'
import ExploreProduct from '../components/ExploreProduct'
import AcceptGram from '../components/AcceptGram'


function Neo() {



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      {/* MAIN HERO  */}
      <div className='relative h-screen flex flex-col md:flex-row px-4  md:px-20'>

        <div className='flex-1 order-last md:order-first  flex flex-col  justify-center'>
          <h1 className='text-5xl   font-semibold text-[#ECBD00]  ' >Safe secure seamless payout for your Business</h1>
          <br />
          <p className=' font-medium text-gray-600'>AcceptPe Payouts are a reliable solution that empowers businesses to make vendor payments and customer payouts efficiently at scale. With its ability to operate 24x7, even on bank holidays, Payouts ensures that your payment processes are never disrupted. By leveraging the power of automation, this tool allows you to save time, reduce errors, and provide a seamless experience to both your vendors and customers.</p>
        </div>
        <div className='flex-1 ' >
          {/* <video src={mobilevideo} controls autostart autoPlay alt="neo hero" type="video/mp4" /> */}
          <img src={payoutmain} />
        </div>
      </div>

      {/* MAIN HERO  */}

      {/* Banking Payments Accounting */}

      <div className=' my-16 md:mb-16'>

        {/* <BankingPayment /> */}
        <PayoutsR/>
      </div>  




      {/* Banking Payments Accounting */}
{/* 
      <div>
        <h1 className=' text-3xl text-center'>Banking the Payout Way</h1>
        <br />
        <p className=' text-center'>Powering new age businesses with Integrated & Comprehensive Current Account for managing Banking, Payments, Expenses and Working Capital.</p>
        <br />
        <br />
        <div className=' px-16'>
          <img src={payoutChart} />
        </div>
      </div> */}


<div>
  <Highly/>
</div>
    

<div>
  <InstantPay/>
</div>

        {/* <PayoutsR/> */}
<div className=' my-16'>
<OneStop/>
</div>  


<div>
  <ExploreProduct/>
</div>
<AcceptGram/>
      <Footer />
    </>
  )
}

export default Neo