import React, { useEffect } from 'react'
import aboutus from "/aboutus.png"
import Footer from "../components/Footer"
import CustomerEx from "/CustomerEx.png"
import InsightDriven from "/InsightDriven.png"
import Customer from "/Customer.png"
import AdvancedA from "/AdvancedA.png"
import PaymentT  from "/PaymentT.png"
import SecureP from "/SecureP.png"

function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div className=' '>
        <img src={aboutus} alt="" />
      </div>


      <div className='px-8 md:px-32 py-16 text-xl   leading-8  font-medium '>

Accepte Payment Gateway offers a secure and reliable payment solution for your business. With our advanced payment gateway, you can easily accept payments from your customers. Whether you run an online store, a subscription-based service, or any other type of business, our payment gateway ensures a smooth and hassle-free payment process.
<br />
<br />
One of the key features of Accepte Payment Gateway is its seamless payout system. You can easily transfer funds to your bank account or any other preferred payout method. We understand the importance of timely payouts for your business, which is why we ensure quick and efficient payout processing.
<br />
<br />
Our payment solutions are designed to cater to businesses of all sizes. Whether you are a small startup or an established enterprise, Accepte Payment Gateway provides a flexible payment solution that meets your unique business needs. Our user-friendly interface makes it easy for you to manage and track your payments, helping you streamline your financial operations.
<br />
<br />
Accepte Payment Gateway allows you to accept payments from various sources, including credit cards, debit cards, and online wallets. With our secure payment processing, you can offer your customers a convenient and trustworthy payment experience.
<br />
<br />
Start accepting payments and enjoy the benefits of a reliable payment gateway for your business. Accepte Payment Gateway ensures secure transactions, seamless payout, and a user-friendly interface. Take your business to new heights by offering your customers a convenient and efficient payment solution
      </div>


      <div className='  my-16 mx-8 md:mx-32'>
        <h1 className=' text-center font-semibold text-2xl my-8'>Why Choose US</h1>
        <br />
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-10'>


          <div className=' shadow-md py-10 px-10 border-2 border-[#ECBD00] rounded-lg'>
            <img src={InsightDriven} alt="" />
            <br />
            <h1 className=' text-xl'> Insight-driven Tools and Services</h1>
            <br />
            <p>Because ultimately, it is the insights that drive value, letting you have an advantage over your competitors.</p>
          </div>




          <div className=' shadow-md py-10 px-10 border-2 border-[#ECBD00] rounded-lg'>
            <img src={Customer} alt="" />
            <br />
            <h1 className=' text-xl'> Customer-oriented Service</h1>
            <br />
            <p>At Easebuzz, its all about focusing on helping customers meet their goals.</p>
          </div>



          <div className=' shadow-md py-10 px-10 border-2 border-[#ECBD00] rounded-lg'>
              <img src={CustomerEx} alt="" />
              <br />
            <h1 className=' text-xl'> Better Customer Experience & Interaction</h1>
            <br />
            <p>We believe in keeping our customers happy through Simpler and Convenient Payment Processes.</p>
          </div>

          <div className=' shadow-md py-10 px-10 border-2 border-[#ECBD00] rounded-lg'>
            <img src={AdvancedA} alt="" />
            <br />
            <h1 className=' text-xl'> Advanced Analytics</h1>
            <br />
            <p>Our digital solutions enable SMEs to streamline and offer customers the convenience of self-service digital experiences.</p>
          </div>



          <div className=' shadow-md py-10 px-10 border-2 border-[#ECBD00] rounded-lg'>
            <img src={SecureP} alt="" />
            <br />
            <h1 className=' text-xl'>Secure in Every Step</h1>
            <br />
            <p>Dedicated to providing the highest level of secure digital payment solutions.</p>
          </div>

          <div className=' shadow-md py-10 px-10 border-2 border-[#ECBD00] rounded-lg'>
            <img src={PaymentT} alt="" />
            <br />
            <h1 className=' text-xl'>Real time Payment Tracking & Analytics</h1>
            <br />
            <p>We provide Real-Time Payment Analytics that helps drive more business and minimize customer dropouts.</p>
          </div>




        </div>

      </div>




  
      <Footer />
    </div>
  )
}

export default AboutUs