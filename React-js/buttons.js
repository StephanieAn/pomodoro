import React from 'react';

 export default function Buttons(){
     // + btn
    function addMoreTime() {
        console.log(`You've added a minute to the timer`);
        const [count, setCount] = useState(0);
        setCount(count + 1);
    };

    // - btn
    function takeSomeTime() {
        console.log(`You've clicked on the - button`);
    };

    // start btn
    function startTimer() {
        console.log(`You've clicked on the start button`);
    };

    // reset btn
    function resetTimer() {
        console.log(`You've clicked on the reset button`);
    };

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
