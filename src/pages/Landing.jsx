import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyAccept from "../components/WhyAccept";
import WhatsNew from "../components/WhatsNew";
import WeareDeveloper from "../components/WeareDeveloper";



export default function Landing() {
  return (
    <>

      <div> <WhyAccept /></div>
      <div> <WeareDeveloper /></div>
      <div><WhatsNew /></div>
      <div><Footer /></div>`
    </>
  );
}