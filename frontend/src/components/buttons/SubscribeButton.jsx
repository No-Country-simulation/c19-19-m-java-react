"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const SubscribeButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/register?subscription=true');
    };

    return (
        <button 
            onClick={handleClick}
            className="fixed bottom-32 right-8 w-56 h-56 bg-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 hover:rotate-12 ease-in-out duration-300"
            aria-label="Suscríbete"
        >
            <span className="text-2xl font-bold">¡Suscríbete!</span>
        </button>
    );
};

export default SubscribeButton;


