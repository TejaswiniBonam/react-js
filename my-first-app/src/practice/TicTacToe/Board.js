import { useState } from 'react';


export default function() {
    return (
        <>
            <h1>Let's Play TicTacToe</h1>
            <div>
                <Box value={values[0]} onBoxClick={() => { boxClicked(0); }} />
                <Box value={values[1]} onBoxClick={() => { boxClicked(1); }} />
                <Box value={values[2]} onBoxClick={() => { boxClicked(2); }} />
            </div>
            <div>
                <Box value={values[3]} onBoxClick={() => { boxClicked(3); }} />
                <Box value={values[4]} onBoxClick={() => { boxClicked(4); }} />
                <Box value={values[5]} onBoxClick={() => { boxClicked(5); }} />
            </div>
            <div>
                <Box value={values[6]} onBoxClick={() => { boxClicked(6); }} />
                <Box value={values[7]} onBoxClick={() => { boxClicked(7); }} />
                <Box value={values[8]} onBoxClick={() => { boxClicked(8); }} />
            </div>
            <div>
                <button onClick={reset}>Play Again</button>
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