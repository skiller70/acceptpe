import React from 'react'
import developApi from "/developApi.gif"

function WeareDeveloper() {
    return (

        <div className=' relative flex flex-col gap-8 md:flex-row   items-center mx-8 md:m-16 py-6 md:py-0'>



            <div className='flex-1'>
                <img src={developApi}/>
            </div>

            <div className=' flex-1 '>
                <div className=' text-2xl font-semibold'>We are
                    developer centric   </div>
                <br />
                <div className='md:w-[50%]'>Digitise your online payments and financial operations by easily integrating plug-and-play, developer-friendly APIs into your own tech stack, website, apps, ERPs and CRMs. Sign up and get started in minutes with Acceptpe payment solution platform.</div>
                <br />
                <button className=' px-6 py-2 bg-[#ECBD00] rounded-md text-white  font-semibold '>View API docs</button>
            </div>
        </div>
    )
}

export default WeareDeveloper