import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import EasyCollect from "/EasyCollect.png"
import Bulk from "/Bulk.png"
import tokenization from "/tokenization.png"
import Advance from "/Advance.png"
import AdvancePenny from "/AdvancePenny.png"
import Gst from "/Gst.png"



import 'swiper/css';
function WhatsNew() {
    return (
        <div className=' py-16 px-10'>

            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                scrollbar={{ draggable: true }}
                breakpoints={
                    {
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }

                }
            >

                <SwiperSlide>
                    <div>
                        <img src={tokenization} alt="" width={40} />
                        <h1 className=' font-bold'>Card tokenization</h1>
                        <br />
                        <p className='w-[75%] font-medium'>Card tokenization will encrypt and replace sensitive data such as 16-digit card numbers, names, expiry dates, and security codes with a 'token'</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={EasyCollect} alt="" width={40} />
                        <h1 className=' font-bold'>EasyCollect on Excel</h1>
                        <br />
                        <p className='w-[75%] font-medium'>EasyCollect is now available as Excel plugin to easily manage and share payment links</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div>
                        <img src={Bulk} alt="" width={40} />
                        <h1 className=' font-bold'>Bulk penny drop</h1>
                        <br />
                        <p className='w-[75%] font-medium'>Now trigger multiple penny drop requests by bulk uploading Excel workbook</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div>
                        <img src={Advance} alt="" width={40} />
                        <h1 className=' font-bold'>Advance penny drop verification</h1>
                        <br />
                        <p className='w-[75%] font-medium'>Verify account holder details & view percentage match through advance penny drop verification</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={AdvancePenny} alt="" width={40} />
                        <h1 className=' font-bold'>Multilingual transaction view</h1>
                        <br />
                        <p className='w-[75%] font-medium'>Track your payments in language you prefer, as the Acceptpe dashboard supports multilingual transaction view</p>
                    </div>
                </SwiperSlide>

               

                <SwiperSlide>
                    <div>
                        <img src={Gst} alt="" width={40} />
                        <h1 className=' font-bold'>Access to all challans for GST payments</h1>
                        <br />
                        <p className='w-[75%] font-medium'>Save and access all challans on your Wire dashboard for GST payments</p>
                    </div>
                </SwiperSlide>
            </Swiper>




        </div>
    )
}

export default WhatsNew