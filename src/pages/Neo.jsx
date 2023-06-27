import React, { useEffect } from 'react'
// import neoHero from "/neoHero.gif"




import BankingPayment from '../components/BankingPayment'
import mobileFinal from "/mobileFinal.gif"
import Footer from '../components/Footer'
import payoutChart from "/payoutChart.jpg"
import Highly from '../components/Highly'




function Neo() {



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      {/* MAIN HERO  */}
      <div className='relative h-screen flex flex-col md:flex-row px-4 bg-[#FBFBFB] md:px-20'>

        <div className='flex-1 order-last md:order-first  flex flex-col  justify-center'>
          <h1 className='text-5xl   font-semibold ' >Business banking made smart with</h1>
          <br />
          <p>Get a Current Account with connected banking, Payment Gateway with 100+ modes, Payouts with Zero-cooling Period, Expense Management with Prepaid Cards, and Working Capital for your business growth needs.</p>
        </div>
        <div className='flex-1 ' >
          {/* <video src={mobilevideo} controls autostart autoPlay alt="neo hero" type="video/mp4" /> */}
          <img src={mobileFinal} />
        </div>
      </div>

      {/* MAIN HERO  */}

      {/* Banking Payments Accounting */}

      <div className=' my-16'>

        <BankingPayment />
      </div>




      {/* Banking Payments Accounting */}

      {/* <div>
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
      <Footer />
    </>
  )
}

export default Neo