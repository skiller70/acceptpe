import React from 'react'
import hero from "../../public/hero.gif"
import main from "../../public/main.gif"
import AcceptCard from '../components/AcceptCard'
import ApiIntgration from '../components/ApiIntgration'
import Footer from '../components/Footer'
import GatewaySolution from '../components/GatewaySolution'

function Home() {
  return (
    <>
      <div className='relative  pb-10 '>

        <div className=' hidden absolute mx-12 text-[#ECBD00] py-8 lg:py-10 lg:flex gap-x-4 lg:flex-row flex-col gap-y-8 lg:gap-y-0'>
          <div className='flex-1 '>
            <h1 className=' text-2xl md:text-3xl lg:text-5xl font-bold  text-left lg:w-[95%] leading-none  md:leading-tight lg:leading-normal'>   Technology solutions    to power your  payments and  financial operations </h1>

            <br />
            <p className='   font-medium '>We are one of India’s leading payment solutions platform, serving 85,000+ businesses with full-stack technology solutions to accept payments, send payouts & manage end-to-end financial operations with ease.

              Sign up n</p>
          </div>

          <div className='flex-1'>

          </div>



        </div>



        <div>
          <img src={main} alt="" className='w-full pt-10  ' />

        </div>
      </div>

      {/* WHY ACCEPT PE */}
      <div className=' W-[100%] py-10 mx-10'>
        <div className=' text-center font-bold text-2xl text-[#ECBD00] pb-10  '>Why Accept Pe</div>
        <div className='  grid  grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <AcceptCard />
          <AcceptCard />
          <AcceptCard />

          <AcceptCard />
          <AcceptCard />
          <AcceptCard />




        </div>

      </div>

      {/* WHY ACCEPT PE */}


      {/* Seamless checkouts with Accept Pe */}

      <div className=' bg-[#ECBD00] text-white px-10 flex py-16 '>

        <div className='flex-1'>
          <h1 className=' text-3xl '> Seamless checkouts with Accept pe online payment gateway</h1>
          <br />
          <p className=' text-lg'>Embed the hosted checkout page on your website or app easily and offer seamless checkouts for your customers</p>
        </div>
        <div className='flex-1'></div>

      </div>

      {/* Seamless checkouts with Accept Pe */}




      {/* Start accepting */}
      {/* 
      <div className=' mt-16'>
        <h1 className=' text-center text-3xl'>Start accepting online payments with
        <br />   100+ payment methods</h1>

        <div className='flex'>
          <div className='flex-1 gap-y-6 grid grid-cols-2 mx-32'>
         <div>   <button className='  rounded py-4 bg-[#ECBD00] text-white font-bold'>Card</button></div>
         <div>   <button className=' rounded py-4 bg-[#ECBD00] text-white font-bold'>UPI</button></div>

        
         <div>   <button className=' px-16 rounded py-4 bg-[#ECBD00] text-white font-bold'>Netbanking</button></div>
         <div>   <button className=' px-16 rounded py-4 bg-[#ECBD00] text-white font-bold'>Card</button></div>
         <div>   <button className=' px-16 rounded py-4 bg-[#ECBD00] text-white font-bold'>Card</button></div>
         <div>   <button className=' px-16 rounded py-4 bg-[#ECBD00] text-white font-bold'>Card</button></div>
          </div>
          <div className='flex-1'></div>
        </div>


      </div> */}

      {/* Start accepting */}

        <ApiIntgration/>

        <GatewaySolution/>
        <Footer/>
    </>
  )
}

export default Home