import React, { useEffect } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import multiple from "/pay.jpg"
import ePos from "/epos1.png"
import eposShop from "/eposShop.gif"
import eposMobileShop from "/eposMobileShop.gif"
import BenefitAccept from '../components/BenefitAccept'
import FeaturesAccept from '../components/FeaturesAccept'

function Epos() {



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>

      <div className=' h-screen flex flex-col md:flex-row  md:px-20'>

        <div className='flex-1 order-last md:order-first  flex flex-col my-16 px-8 md:my-36 '>
          <h1 className='text-4xl   font-semibold ' >Accept payments conveniently using UPI QR and Payment Links</h1>
          <br />
          <p className='  font-medium'>Get a Current Account with connected banking, Payment Gateway with 100+ modes, Payouts with Zero-cooling Period, Expense Management with Prepaid Cards, and Working Capital for your business growth needs.</p>
        </div>
        <div className='flex-1' >
          {/* <video src={mobilevideo} controls autostart autoPlay alt="neo hero" type="video/mp4" /> */}
          <img src={ePos} />
        </div>
      </div>



      {/* <div className=' py-16'>
        <div className='pb-16 text-center text-3xl'>Accept Payment through Multiple Payment Options</div>

        <div className='  '>
          <img src={multiple} alt=""  />
        </div>
      </div> */}


      <div className='mt-36 md:mt-0'>
        <p className=' relative text-center  text-3xl  font-semibold pb-6'>Acceptpe ePOS is for You</p>
        <div className='hidden md:flex justify-center'>
          <img src={eposShop} alt="" />
        </div>
        <div className='flex md:hidden justify-center'>
          <img src={eposMobileShop} alt="" />
        </div>
      </div>
      <div className=' '>

        <div >
          <FeaturesAccept />
        </div>

        <div className=' md:m-32'>
          <BenefitAccept />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Epos