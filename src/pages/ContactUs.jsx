import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"
import Footer from '../components/Footer'


function ContactUs() {
    return (
        <>
            {/* Our team is here to help     */}
            <div>
                <h1 className=' text-2xl lg:text-3xl  text-center py-16  text-gray-600'> Our team is here to help</h1>
                <div className=' gap-y-16 md:gap-y-0 grid md:grid-cols-3  lg:grid-cols-4 grid-cols-1 mx-20 md:mx-36 lg:mx-56 gap-x-10'>
                    {/* ----------------------------------------- */}
                    <div className='bg-[#ECBD00] px-4  text-white h-56 rounded-xl shadow-lg'>
                        <h1 className=' font-semibold text-xl py-4 '>Support</h1>
                        <div className='font-medium flex flex-col gap-y-2'>
                            <p className='flex gap-x-2 items-center text-md'><FontAwesomeIcon icon={faPhone} />01144799354 </p>

                            <p className=' flex gap-x-2 items-center text-md'><FontAwesomeIcon icon={faAt} />info@acceptpe.com</p>
                        </div>
                    </div>
                    {/* ----------------------------------------- */}
                    <div className='bg-[white] px-4  text-gray-500  h-56 rounded-xl shadow-lg'>
                        <h1 className='font-semibold text-xl py-4 '>Grievances</h1>
                        <div className='font-medium flex flex-col gap-y-2'>
                            <p className='flex gap-x-2 items-center text-md'><FontAwesomeIcon icon={faPhone} />35008670 </p>

                            <p className=' flex gap-x-2 items-center text-md'><FontAwesomeIcon icon={faAt} />info@acceptpe.com</p>

                            <p>Anshumman Joshi  </p>
                        </div>
                    </div>
                    {/* ----------------------------------------- */}
                    <div className='bg-[#ECBD00] px-4   text-white h-56 rounded-xl shadow-lg'>
                        <h1 className='font-semibold text-xl py-4 '>Partner Program</h1>
                        <div className='font-medium flex flex-col gap-y-2'>
                            <p className='flex gap-x-2 items-center text-md'><FontAwesomeIcon icon={faAt} />info@acceptpe.com </p>

                            <p className=' flex gap-x-2 items-center text-md'>For partner related queries contact us</p>
                        </div>
                    </div>
                    {/* ----------------------------------------- */}
                    <div className='bg-[white] px-4  text-gray-500  h-56 rounded-xl shadow-lg'>
                        <h1 className='font-semibold text-xl py-4 '>Human Resources</h1>
                        <div className='font-medium flex flex-col gap-y-2'>
                            <p className=' flex gap-x-2 items-center text-md'><FontAwesomeIcon icon={faAt} />hr@easebuzz.in</p>
                            <p>Drop in your Resume if you want to be a part of our amazing team.</p>
                        </div>
                    </div>


                </div>
            </div>
            {/* Our team is here to help     */}

            {/* FORM */}
            <div className=' mx-6 py-16 flex flex-col items-center justify-center'>
                <p className='text-2xl lg:text-3xl  text-center py-16  text-gray-600 '> Get in touch!</p>
                <form className="w-full max-w-lg  ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Name
                            </label>
                            <input className="appearance-none block w-full  text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Email
                            </label>
                            <input className="appearance-none block w-full  text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="grid-city">
                                Number
                            </label>
                            <input className="appearance-none block w-full  text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                State
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>Choose one</option>
                                    <option>Missouri</option>
                                    <option>Texas</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>

                        <textarea id="message" rows="4" className=" my-10 block p-2.5 w-full text-sm bg-gray-50 rounded-lg border  focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                    </div>

                    <button className=' bg-[#ECBD00]  px-4 py-2  rounded-md text-white font-medium'>Send message</button>
                </form>

            </div>
            {/* FORM */}

            {/* Map */}
            <div className=' relative'>


                <h1 className=' text-2xl lg:text-3xl  text-center py-16  text-gray-600'>You can find us here</h1>
                <div className=' py-16'>
                    <iframe className=' w-[100%] h-96' frameBorder="0" src="https://maps.google.com/maps?width=1151&amp;height=400&amp;hl=en&amp;q=A-301 mittal commercia &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>










            {/* Map */}
            <Footer />

        </>
    )
}

export default ContactUs