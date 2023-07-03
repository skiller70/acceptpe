import React from 'react'
import RentalBusiness from "/RentalBusiness.png"
import OnlineGaming from "/OnlineGaming.png"
import Retailcommerce from "/Retailcommerce.png"
import PoliticalOrganisations from "/PoliticalOrganisations.png"
import Corporates from "/Corporates.png"
import BFSI from "/BFSI.png"
import Healthcare from "/Healthcare.png"
import Hospitality from "/Hospitality.png"

function OneStop() {
  return (
    <div className=' mx-6'>
  <div className='text-center text-3xl font-semibold   text-[#ECBD00]'>
  One stop solution for all business
            </div>
            <br />

<div className=' grid mt-10 cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6'>
<div className=' p-6  shadow-md'>
        {/* IMG */}
            <img src={Retailcommerce} width={50} alt="" />
      {/* IMG */}
<div className=' py-2'>
<h1 className=' font-medium'>Retail and E-commerce</h1>
</div>

<p>Refund cash-on-delivery orders instantly, process cashbacks and more</p>
</div>
<div className=' p-6  shadow-md'>
        {/* IMG */}
            <img src={OnlineGaming} width={50} alt="" />
      {/* IMG */}
<div className=' py-2'>
<h1 className=' font-medium'>Online Gaming</h1>
</div>

<p>Distribute prize money to players</p>
</div>
<div className=' p-6  shadow-md'>
        {/* IMG */}
            <img src={RentalBusiness} width={50} alt="" />
      {/* IMG */}
<div className=' py-2'>
<h1 className=' font-medium'>Rental Business
</h1>
</div>

<p>Refund security deposit for any kind of rental business - car, furniture, or appliances</p>
</div>
<div className=' p-6  shadow-md'>
        {/* IMG */}
            <img src={PoliticalOrganisations} width={50} alt="" />
      {/* IMG */}
<div className=' py-2'>
<h1 className=' font-medium'>NGOs & Political Organisations</h1>
</div>

<p>Reimburse field agents and volunteers</p>
</div>

<div className=' p-6  shadow-md'>
        {/* IMG */}
            <img src={Corporates} width={50} alt="" />
      {/* IMG */}
<div className=' py-2'>
<h1 className=' font-medium'>Corporates</h1>
</div>

<p>Pay marketing affiliates and disburse reimbursements to employees</p>
</div>


<div className=' p-6  shadow-md'>
        {/* IMG */}
            <img src={BFSI} width={50} alt="" />
      {/* IMG */}
<div className=' py-2'>
<h1 className=' font-medium'>BFSI</h1>
</div>

<p>Settle insurance claims and pay DSA incentives</p>
</div>



<div className=' p-6  shadow-md'>
        {/* IMG */}
            <img src={Healthcare} width={50} alt="" />
      {/* IMG */}
<div className=' py-2'>
<h1 className=' font-medium'>Healthcare</h1>
</div>

<p>Pay field agents, handle reimbursements, send refunds</p>
</div>




<div className=' p-6  shadow-md'>
        {/* IMG */}
            <img src={Hospitality} width={50} alt="" />
      {/* IMG */}
<div className=' py-2'>
<h1 className=' font-medium'>Travel and Hospitality</h1>
</div>

<p>Pay commissions to vendors, handle reimbursements and do refunds</p>
</div>




</div>


    </div>
  )
}

export default OneStop