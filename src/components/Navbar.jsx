import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import logo from "../../public/logo.png"


function Navbar(props) {
    // STATE
    const [navToggle, setNavToggle] = useState(false)
    const [companyDrop, setCompanyDrop] = useState(false)
    // STATE


    // METHODS 
    const handleToggle = () => {
        setNavToggle(!navToggle)
    }
    // METHODS 









    return (
        <>

            <div className={`h-20 w-[100%]   top-0  sticky z-50   ${props.scrollYP ? "  delay-100 bg-white text-[#ECBD00]" : "bg-white text-[#ECBD00]"}`}>
                <div className='flex items-center h-full justify-evenly mx-20  lg:mx-0'>
                    {/* NAV BRAND */}
                    <div className=' font-bold w-[100%] lg:w-auto text-3xl justify-start  lg:justify-center'>
                        <img src={logo} height={150} width={150} />
                    </div>
                    {/* NAV BRAND */}

                    {/* NAV LINKS */}
                    <div className='  hidden lg:flex font-bold   gap-x-4 justify-evenly '   >
                        <Link>Home</Link>
                        <Link>Product</Link>

                        <Link>

                            <div onMouse={() => { setCompanyDrop(false) }} onClick={() => { setCompanyDrop(!companyDrop) }} className="relative inline-block text-left ">
                                <div>
                                    <button type="button" className="font-bold  text-[#ECBD00]   inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white    hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        Company
                                        <svg className="-mr-1 h-5 w-5  text-[#ECBD00]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>



                                <div className={`${companyDrop ? "" : "hidden"} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none `} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                    <div className="py-1" role="none">

                                        <Link href="#" className="text-[#ECBD00]  block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">About Us</Link>
                                        <Link href="#" className="text-[#ECBD00]  block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Blogs </Link>
                                        <Link href="#" className="text-[#ECBD00]  block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Contact Us
                                        </Link>

                                    </div>
                                </div>
                            </div>


                        </Link>
                        <Link>Pricing</Link>
                    </div>
                    {/* NAV LINKS */}

                    {/* NAV BUTTON */}
                    <div className='     justify-center  hidden lg:flex '>

                        <button className={`font-semibold px-6 bg-whit py-2  rounded-lg  bg-[#ffc900] text-white`}>Sign Up</button>
                    </div>
                    {/* NAV BUTTON */}

                    {/* NAVBAR TOGGLE */}
                    <div>
                        <button onClick={handleToggle}>
                            <FontAwesomeIcon icon={faBars} className=' lg:hidden text-3xl' />
                        </button>
                    </div>


                    {/* NAVBAR TOGGLE */}

                </div>



            </div>



            <div className={` ${navToggle ? "" : "hidden"} w-[100%] bg-white text-[#606C5D] py-10  font-bold fixed  z-50`}>
                <div className=' w-[100%] flex h-full justify-center items-center flex-col gap-y-6'>
                    <Link>Home</Link>
                    <Link>Payment Gateway</Link>
                    <Link>ePOS</Link>
                    <Link>AcceptPe Neo</Link>
                </div>
            </div>





        </>
    )
}

export default Navbar