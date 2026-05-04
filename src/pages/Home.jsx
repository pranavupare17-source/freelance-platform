import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import PopularServices from "../components/PopularServices";
import HowItWorks from "../components/HowItWorks";
import Business from "../components/Business";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TrustedBy/>
      <PopularServices/>
      <HowItWorks/>
      <Business/>
      <Footer/>
    </div>
  );
}

export default Home;