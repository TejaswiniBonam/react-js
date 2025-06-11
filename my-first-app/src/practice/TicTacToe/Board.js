import { useState } from 'react';


export default function({values, onBoxClick, onReset}) {
    return (
        <>
            <h1>Let's Play TicTacToe</h1>
            <div>
                <Box value={values[0]} onBoxClick={() => { onBoxClick(0); }} />
                <Box value={values[1]} onBoxClick={() => { onBoxClick(1); }} />
                <Box value={values[2]} onBoxClick={() => { onBoxClick(2); }} />
            </div>
            <div>
                <Box value={values[3]} onBoxClick={() => { onBoxClick(3); }} />
                <Box value={values[4]} onBoxClick={() => { onBoxClick(4); }} />
                <Box value={values[5]} onBoxClick={() => { onBoxClick(5); }} />
            </div>
            <div>
                <Box value={values[6]} onBoxClick={() => { onBoxClick(6); }} />
                <Box value={values[7]} onBoxClick={() => { onBoxClick(7); }} />
                <Box value={values[8]} onBoxClick={() => { onBoxClick(8); }} />
            </div>
            <div>
                <button onClick={onReset}>Play Again</button>
            </div>
        </>
    );
}


function Box({ value, onBoxClick }) {
    //const [val, setVal] = useState(".");

    /*function clicked(){
        //setVal();
        console.log("CLICKED");
    }*/
    return (
        <button onClick={onBoxClick}>{value}</button>
    );
}