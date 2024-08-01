import React from "react";
import Navbar from "@/components/navbar/page";
import Banner from "@/components/banner/page";
import Cards from "../components/cards/cards";
import Footer from "@/components/footer/page";
import AboutGuatape from "./aboutGuatape/page";
import Faqs from "./faqs/page";
import AboutUs from "./aboutUs/page";
import SubscribeButton from "@/components/buttons/SubscribeButton";

export default function Home() {
  return (
    
      <main>
     <Navbar />
        <Banner />
        <Cards />
        <AboutGuatape />
        <Faqs />
        <AboutUs />
        <Footer />
         <SubscribeButton />
      </main>
    );
}
