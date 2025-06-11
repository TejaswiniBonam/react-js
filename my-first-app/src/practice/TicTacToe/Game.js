import { useState } from 'react';
import Board from './Board';


function checkResult(values){
    const winLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i=0; i<winLines.length; i++){
        if(values[winLines[i][0]] === values[winLines[i][1]] && values[winLines[i][1]] === values[winLines[i][2]] && values[winLines[i][2]] != '.'){
            console.log("win line matched");
            return values[winLines[i][0]];
        }
    }
    return null;

}

function Game() {
    const [values, setValues] = useState(Array(9).fill("."));
    console.log(values);
    const [move, setMove] = useState(0);
    let turn = move%2===0 ? 'X' : 'O';
    let newValues = values.slice();



    function boxClicked(index){
        if(values[index] != '.' || checkResult(values))
            return ;
        console.log(`current move : ${move}`);
        
        newValues[index] = turn;
        setValues(newValues);
        setMove(move + 1);
    }



    let status = 'GAME ON PLAY MODE';
    if (checkResult(values)){
        status = checkResult(values) + ' WON!!!';
    }
    console.log(status);


    function reset(){
        newValues = Array(9).fill('.');
        setValues(newValues);

    }


    return (
        <h1> Game</h1>

    );
}



export default Game;