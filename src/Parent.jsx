import React, { useEffect, useState } from 'react'
import Landing from './pages/Landing'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Epos from './pages/Epos'
import Neo from './pages/Neo'
import ContactUs from './pages/ContactUs'

function Parent() {

    // STATE

    const [scrollP, setScrollP] = useState(0)

    // STATE
    // LIFE CYCLE

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }



    }, [scrollP])
    // LIFE CYCLE



    console.log(scrollP)

    // METHODS
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollP(position)

    }

    // METHODS





console.log(scrollP)
    return (
        <div className='w-[100%]'>
      <Navbar scrollYP={scrollP > 0 ? true : false} />
            <div >                  
            

                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/landing' Component={Landing} />
                    <Route path='/epos' Component={Epos} />
                    <Route path='/neo' Component={Neo} />
                    <Route path='/contact' Component={ContactUs} />

                </Routes>
            </div>
        </div>
    )
}

export default Parent