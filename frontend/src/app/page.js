"use client";

import React from "react";
import Navbar from "@/components/navbar/page";
import Banner from "@/components/banner/page";
import Cards from "../components/cards/cards";
import Footer from "@/components/footer/page";
import Paragraph from "@/components/texts/Paragraph";
export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Banner />
        <Cards />
        <Footer />
      </main>
    </div>
  );
}
