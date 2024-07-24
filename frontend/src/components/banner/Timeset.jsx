"use client";
import React, { useEffect, useState } from 'react';

function Timeset({ children }) {
    
    const [time, setTime] = useState(null);

    useEffect(() => {
        const fetchTime = async () => {
            const timeUrl = 'http://worldtimeapi.org/api/timezone/America/Bogota';
            try {
                const timeResponse = await fetch(timeUrl);
                const timeData = await timeResponse.json();
                setTime(timeData);
            } catch (error) {
                console.error(error);
            }
        };

    fetchTime();

    const intervalId = setInterval(() => {
        setTime((prevTime) => {
            if (prevTime) {
            const newTime = new Date(new Date(prevTime.datetime).getTime() + 1000);
            return { ...prevTime, datetime: newTime.toISOString() };
            }
            return prevTime;
        });
    }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return ( 
        <>
            {time && <p>{new Date(time.datetime).toLocaleTimeString()} {children}</p>}
        </>
    );
}

export default Timeset;