import React from 'react';
import { useState, useEffect } from 'react';

// timer 
export default function Timer(){
    const [minutes,setMinutes] = useState(25);
    const [seconds,setSeconds] = useState(0);
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    useEffect(() => {
        let interval = setInterval(() => {
          clearInterval(interval);
    
          if (seconds === 0) {
            if (minutes !== 0) {
              setSeconds(59);
              setMinutes(minutes - 1);
            }
          } else {
            setSeconds(seconds - 1);
          }
        }, 1000)
      },[seconds,minutes])

    return(
        <>
            <div className={`timer__value`}>
                <p className={`timer__counter`}>{`${timerMinutes}:${timerSeconds}`}</p>
            </div>
        </>
    );
};