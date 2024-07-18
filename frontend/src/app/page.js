import React from "react";
import Navbar from "@/components/navbar/page";
import Banner from "@/components/banner/page";
import Filters from "@/components/filters/page";
import Cards from "../components/cards/cards";
import Footer from "@/components/footer/page";
/* import Muestras from "@/components/muestras/Muestras";  */
export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Banner />
     {/*  
     Aca están las cosas que voy modificando, se puede eliminar
     <Muestras /> */}

        <Filters />
        <Cards />
        <Footer />
      </main>
    </div>
  );
}
