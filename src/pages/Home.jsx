import React, { useEffect } from 'react'
import hero from "/hero.gif"
import heroMain from "/heroMain.gif"
import main from "/main.gif"
import AcceptCard from '../components/AcceptCard'
import ApiIntgration from '../components/ApiIntgration'
import Footer from '../components/Footer'
import GatewaySolution from '../components/GatewaySolution'
import seamlessC from "/Seamless checkouts.png"
import WhyAccept from '../components/WhyAccept'
import WhatsNew from '../components/WhatsNew'
import card from "/card.png"
import setting from "/setting.png"
import chart from "/chart.png"
import dash from "/dash.png"
import mainHero from "/mainHero.gif"
import seamlessP from "/seamlessP.png"
import seamlessPM from "/seamlessPM.png"

function Home() {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className='relative  pb-10 '>

        <div className=' hidden absolute mx-12  py-8 lg:py-10 lg:flex gap-x-4 lg:flex-row flex-col gap-y-8 lg:gap-y-0'>
          <div className='flex-1'>

          </div>
          <div className='flex-1 py-10  '>
            <h1 className=' text-2xl md:text-3xl lg:text-5xl font-bold  text-left lg:w-[95%] leading-none  md:leading-tight lg:leading-normal text-[#ECBD00]'>  Safe-secure-seamless payment  solution for your business </h1>

            <br />
            <p className='   font-medium text-gray-700  '>We provide a comprehensive payment solution designed to meet the unique requirements of businesses across various industries and sizes. Our secure and dependable platform enables you to effortlessly accept customer payments while streamlining your financial processes. Get in touch with us today to discover more about the outstanding payment services we offer for your business. </p>
          </div>





        </div>



        <div>
          <div className=' hidden md:flex'>
            <img src={mainHero} alt="" className='w-full pt-10 h-[30%] ' />

          </div>
          <div className='flex md:hidden'>
            <img src={heroMain} alt="" className='w-full pt-10  ' />

          </div>
        </div>
      </div>


      <div>
        <div className='flex-1 md:hidden px-10 '>
          <h1 className='text-[#ECBD00] text text-3xl md:text-3xl lg:text-5xl font-bold  text-left lg:w-[95%] leading-none  md:leading-tight lg:leading-normal'>  Safe-secure-seamless payment  solution for your business </h1>

          <br />
          <p className=' text-[#ECBD00]  font-medium '>We are one of India’s leading payment solutions platform, serving 5,000+ businesses with full-stack technology solutions to accept payments, send payouts & manage end-to-end financial operations with ease.

            Sign up n</p>
        </div>
      </div>

      {/* WHY ACCEPT PE */}
      <div className=' W-[100%] py-10 mx-10'>
        <div className=' text-center font-bold text-2xl text-[#ECBD00] pb-10   '>Why AcceptPe</div>
        <div className=' flex justify-center items-center'>
          <div className=' grid md:gap-x-20  grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-2'>

            <div className='flex justify-center'>   <AcceptCard title="Best payment success rate" text="Higher payment success rates for enhanced customer experience and improved business revenues" img={chart} /> </div>

            <div className='justify-center'>
              <AcceptCard title="Easy integration" text="Developer friendly APIs and plugins to ease the integration process supported by detailed API documentation" img={setting} />
            </div>

            <div className=' flex  justify-center'>
              <AcceptCard title="100+ payment options" text="Accept payments through credit cards, debit cards, UPI, wallets, EMI & BNPL with AcceptPe payment gateway" img={card} />
            </div>

            {/* <AcceptCard title="iFrame checkout"  text="Embed the hosted checkout page on your website or app easily and offer seamless checkouts for your customers"/> */}
            <div className=' justify-center'>
              <AcceptCard title="Unified dashboard" text="Dashboard with real-time transaction data, customisable reports, and detailed payment insights" img={dash} />
            </div>
            {/* <AcceptCard title="Dedicated technical support" text="24*7 technical support to help you with your integrations and any queries" /> */}




          </div>
        </div>

      </div>

      {/* WHY ACCEPT PE */}


      {/* Seamless checkouts with Accept Pe */}

      <div className='relative  hidden  md:flex mb-32 mt-16'>

       <div className=' absolute   px-10 flex-col md:flex-row flex py-16 items-center'>
       <div className='flex-1'>
          <h1 className=' text-3xl  text-gray-700 font-semibold '> Seamless checkouts with AcceptPe online payment gateway</h1>
          <br />
          <p className=' text-lg font-medium text-gray-700'>With AcceptPe, you can easily embed their hosted checkout page on your website or app. This allows your customers to make secure and convenient payments without ever leaving your platform. By offering a seamless checkout process, you can enhance the overall user experience and increase customer satisfaction. Start accepting payments with AcceptPe and watch your conversion rates soar!</p>
        </div>
        <div className='flex-1 flex justify-center'>

          

        </div>
       </div>

<img src={seamlessP} alt="" />
      </div>


      <div className=' md:hidden  gap-y-10  px-10 flex-col flex py-16 items-center'>
       <div className='flex-1'>
          <h1 className=' text-3xl  text-gray-700 font-semibold '> Seamless checkouts with AcceptPe online payment gateway</h1>
          <br />
          <p className=' text-lg font-medium text-gray-700'>With AcceptPe, you can easily embed their hosted checkout page on your website or app. This allows your customers to make secure and convenient payments without ever leaving your platform. By offering a seamless checkout process, you can enhance the overall user experience and increase customer satisfaction. Start accepting payments with AcceptPe and watch your conversion rates soar!</p>
        </div>
        <div className='flex-1 flex justify-center'>

              <img  src={seamlessPM}/>

        </div>
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



      <ApiIntgration />

      <GatewaySolution />

      {/* <WhyAccept/>
            <WhatsNew/> */}
      <Footer />
    </>
  )
}

export default Home