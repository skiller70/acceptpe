import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyAccept from "../components/WhyAccept";
import WhatsNew from "../components/WhatsNew";
import WeareDeveloper from "../components/WeareDeveloper";
import main from "/main.gif"
import mainMobile from "/mainMobile.gif"

export default function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>

      {/* MAIN HERO IMAGE */}
      <div className="relative hidden md:flex py-10">

        <div className=" w-[100%] h-[100%]  absolute">

          <div className=" flex-1 p-20">
            <ul className=" font-semibold text-4xl gap-y-2 flex flex-col text-[#ECBD00]"><li>Best payment gateway for</li>
              <li> accepting online payments </li>
              <li> for your business  </li>
            </ul>
            <br />
            <p className=" font-medium w-[40%] text-gray-600 ">Get onboarded with Acceptpe payment gateway that offers industry best success rates along with 100+ payment modes and seamless checkouts.</p>
          </div>
          <div className=" flex-1"></div>

        </div>
        <img src={main} height={800} />

      </div>

      {/* MAIN HERO IMAGE */}

      {/* MAIN HERO MOBILE IMAGE */}

      <div className=" flex md:hidden flex-col gap-y-16 mb-16 ">

        <div>
          <img src={mainMobile} alt="" />
        </div>

        <div className=" px-8">   <h1 className=" text-2xl font-semibold   justify-center items-center">
          Best payment gateway for accepting online payments for your business
        </h1>
        <br />
        <p>Get onboarded with Acceptpe payment gateway that offers industry best success rates along with 100+ payment modes and seamless checkouts.</p>
        </div>


      </div>
      {/* MAIN HERO MOBILE IMAGE */}

      <div className=" md:mt-20">
      <div> <WhyAccept /></div>
      </div>
      <div> <WeareDeveloper /></div>
      {/* <div><WhatsNew /></div> */}
      <div><Footer /></div>`
    </>
  );
}