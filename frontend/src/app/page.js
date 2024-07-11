
import React from 'react';
import Navbar from '@/components/navbar/page';
import Banner from '@/components/banner/page';
import Filters from '@/components/filters/page';

export default function Home() {
  return (
    <div>
 
      <main>
        <Navbar/>
        <Banner/>
        <Filters/>
       
    
      </main>
    </div>
  );
}
