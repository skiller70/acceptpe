import React from "react";
import logo from "/logo.png"
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className=" px-16 flex flex-col md:flex-row text-[#ECBD00] shadow-lg">

        {/* FOOTER LOGO */}
        <div className=" flex justify-center  md:justify-start ">
          <img src={logo} width={250} />

        </div>
        {/* FOOTER LOGO */}



        {/* FOOTER LINK */}
        <div className=" text-center md:text-left gap-y-8 flex-1 flex flex-col md:flex-row  justify-between mx-16 mt-16 ">

          <div className="flex gap-y-2   flex-col">
            <h1 className=" font-bold">Products</h1>
            
         
            <Link to="/gateway">Payment Gateway</Link>
            <Link to="/epos">ePOS</Link>
            <Link to="/payout">Payout</Link>
          </div>


          <div className="flex gap-y-2   flex-col">
            <h1 className=" font-bold">Merchant Onboarding</h1>
            <p>KYC Documents Checklist</p>
            <h1 className=" font-bold">Developers</h1>
            <p>Documentation</p>
          </div>

          <div>

            <div className=" flex gap-y-2   flex-col ">
              <h1 className="font-bold" >Company</h1>
              <p className=" font-semibold">About Us</p>
              <p className=" font-semibold">blogs</p>
             


            </div>

            <div>

            </div>
          </div>

          <div className=" flex gap-y-2   flex-col  text-center"><h1 className=" font-bold">Resource</h1>
          <Link to="/contact" className=" font-semibold">Contact Us
          </Link>
          <p className=" font-semibold">Terms and Conditions</p>
          <p className=" font-semibold">Privacy</p>
          
          
           </div>
        
        </div>

        {/* FOOTER LINK */}

      </div>


    </>
  );
}