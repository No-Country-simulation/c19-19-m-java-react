import React from "react";
import Navbar from "@/components/navbar/page";
import Banner from "@/components/banner/page";
import Filters from "@/components/filters/page";
import Cards from "../components/cards/cards";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Banner />

        {/* Elementos de muestra */}
        <div className="m-40">
          <h2 className="text-center text-lg">Colores</h2>
          <p className="bg-customGrayLight"> customGrayLight</p>
          <p className="bg-customGray"> customGray</p>
          <p className="bg-customGreenLight"> customGreenLight</p>

          <p className="text-white bg-customGreen"> customGreen</p>
          <p className="text-white bg-customBlue"> customBlue</p>
          <p className="text-white bg-customGrayDark"> customGrayDark</p>
          <p className="text-white bg-customBrown"> customBrown</p>
          <p className="text-white bg-customBlueDark"> customBlueDark</p>
        </div>

        <div className="m-40">
          <h2 className="text-center text-lg">Fuentes</h2>
          <p className="m-5 text-lg font-txBarlow">Barlow</p>
          <p className="m-5 text-lg font-txPoppins">Poppins</p>
          <p className="m-5 text-lg font-txTitle">Titulo cavean Brush</p>
          <p className="m-5 text-lg font-txMogra">Mogra</p>
          <p className="m-5 text-lg font-txSpartan">League Spartan</p>
          <p className="m-5 text-lg font-txSansita">Sansita</p>
        </div>

        <Filters />
        <Cards />
        <Footer />
      </main>
    </div>
  );
}
