import React from 'react';

 // + btn
 const addMoreTime = () => {
    console.log(`You've added a minute to the timer`);
    const [count, setCount] = useState(0);
    setCount(count + 1);
};

// - btn
const takeSomeTime = () => {
    console.log(`You've clicked on the - button`);
};

// start btn
const startTimer = () => {
    console.log(`You've clicked on the start button`);
};

// reset btn
const resetTimer = () => {
    console.log(`You've clicked on the reset button`);
};

 export default function Buttons(){
    return (
        <>
            <div className={`timer__buttons`}>
                <button className={`buttons__plus`} onClick={() => addMoreTime()}>+</button>
                <button className={`buttons__less`} onClick={() => takeSomeTime()}>-</button>
                <button className={`buttons__start`} onClick={() => startTimer()}>Start</button>
                <button className={`buttons__reset`} onClick={() => resetTimer()}>Reset</button>
            </div>
        </>
    )
 };
