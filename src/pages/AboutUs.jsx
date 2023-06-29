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


      <div className='px-8 md:px-32 py-16 text-xl   leading-8 font-normal  '>
        AcceptPe is a payment gateway that enables businesses to accept online payments securely and easily. With a focus on user experience, AcceptPe offers a simple and intuitive interface that allows merchants to easily manage transactions, view reports, and access customer support. Our payment platform uses advanced security protocols to ensure the safety of your customers' data, and our competitive pricing structure makes it an affordable solution for businesses of all sizes. At AcceptPe, we're committed to helping businesses succeed by providing a reliable and efficient payment processing service.
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