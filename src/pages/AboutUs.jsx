import React, { useEffect } from 'react'
import aboutus from "/aboutus.png"

function AboutUs() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
        <div>
            <img src={aboutus} alt="" />
        </div>

        <div className='px-8 md:px-40 text-2xl py-16  font-normal  text-justify'>
        AcceptPe is a payment gateway that enables businesses to accept online payments securely and easily. With a focus on user experience, AcceptPe offers a simple and intuitive interface that allows merchants to easily manage transactions, view reports, and access customer support. Our payment platform uses advanced security protocols to ensure the safety of your customers' data, and our competitive pricing structure makes it an affordable solution for businesses of all sizes. At AcceptPe, we're committed to helping businesses succeed by providing a reliable and efficient payment processing service.
        </div>


    </div>
  )
}

export default AboutUs