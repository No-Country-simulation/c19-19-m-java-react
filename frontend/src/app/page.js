import React from 'react';
import Navbar from '@/components/navbar/page';
import Banner from '@/components/banner/page';
import Filters from '@/components/filters/page';
import Cards from '../components/cards/cards';
import Footer from '@/components/footer/page';


export default function Home() {
  return (
    <div>
 
      <main>
        <Navbar/>
        <Banner/>
        <Filters/>
        <Cards/>
        <Footer/>
      
      </main>
    </div>
  );
}
