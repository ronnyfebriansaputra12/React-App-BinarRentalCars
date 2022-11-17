import Navbar from "./navbar";
import Header from "./header";
import Service from "./service";
import WhyUs from "./whyUs";
import Testimoni from "./testimoni";
import Sewa from "./sewa";
import FAQ from "./faq";
import Footer from "./footer";
import React from 'react';

const LandingPages = () =>{
    return(
        <>
        <Navbar />
        <Header />
        <Service />
        <WhyUs />
        <Testimoni/>
        <Sewa/>
        <FAQ/>
        <Footer/>
      </>
    )
}

export default LandingPages