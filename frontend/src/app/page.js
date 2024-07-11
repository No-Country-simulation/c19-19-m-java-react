import React from 'react';
import Navbar from '@/components/navbar/page';
import Banner from '@/components/banner/page';
import Filters from '@/components/filters/page';
import Cards from './cards/cards';


export default function Home() {
  return (
    <div>
 
      <main>
        <Navbar/>
        <Banner/>
        <Filters/>
        <Cards/>

      </main>
    </div>
  );
}
