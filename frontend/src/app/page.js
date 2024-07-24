
import React from "react";
import Navbar from "@/components/navbar/page";
import Banner from "@/components/banner/page";
import Cards from "../components/cards/cards";
import Footer from "@/components/footer/page";
import AboutGuatape from "./aboutGuatape/page";
import Faqs from "./faqs/page";
import AboutUs from "./aboutUs/page";
export default function Home() {
  return (
    <div>
      <main>
     <Navbar />
        <Banner />
        <Cards />
      
       
        <AboutGuatape />
        <Faqs />
        <AboutUs />
        <Footer />
      </main>
    </div>
  );
}
