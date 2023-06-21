import React from "react";
import logo from "../../public/logo.png"
export default function Footer() {
  return (
    <>
      <div className=" px-16 flex  text-[#ECBD00] shadow-lg">

        {/* FOOTER LOGO */}
        <div>
          <img src={logo} width={250} />

        </div>
        {/* FOOTER LOGO */}



        {/* FOOTER LINK */}
        <div className=" flex-1 flex  justify-between mx-16 mt-16 ">

          <div>
            <h1 className=" font-bold">Products</h1>
          </div>


          <div>
            <h1 className=" font-bold">Price</h1>

          </div>

          <div>

            <div className=" flex gap-y-2   flex-col ">
              <h1 className="font-bold" >Company</h1>
              <p className=" font-semibold">About Us</p>
              <p className=" font-semibold">blogs</p>
              <p className=" font-semibold">contact us</p>


            </div>

            <div>

            </div>
          </div>

          <div><h1 className=" font-bold">About </h1> </div>
        </div>

        {/* FOOTER LINK */}

      </div>


    </>
  );
}