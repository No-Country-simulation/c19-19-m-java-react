
import React from 'react';
import Navbar from '@/components/navbar/page';
import Cards from './cards/cards';

export default function Home() {
  return (
    <div>
 
      <main>
        <Navbar/>
        <Cards/>
      </main>
    </div>
  );
}
