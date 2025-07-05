import { useState } from 'react';
import {default as Board} from './Board';
import styles from './css_files/GameSpace.module.css';


function GameSpace() {
    const [values, setValues] = useState(Array(9).fill(""));
    const [move, setMove] = useState(0);
    const [player1, setPlayer1] = useState({ name: 'Player 1', emoji: '❌' });
    const [player2, setPlayer2] = useState({ name: 'Player 2', emoji: '⭕' });
    
    const emojiOptions = ['❌', '⭕', '❤️', '💜', '⚡', '🌟', '🔥', '🍕', '🐶', '🌈'];
    let turn = move % 2 === 0 ? player1.emoji : player2.emoji;
    let feedback = 'AME ON PLAY MODE';

    let newValues = values.slice();

    let status = 'GAME ON PLAY MODE';
    if (checkResult(values)) {
        if(checkResult(values)==="TIE"){
            status = `${player1.emoji}  🤝  ${player2.emoji} IT'S A TIE!!`;
        }else{
        status = checkResult(values) + ` ${turn%2==0?'player1':'player2'} WON!!!`;
        }
    }



    function checkResult() {
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
        for (let i = 0; i < winLines.length; i++) {
            if (values[winLines[i][0]] === values[winLines[i][1]] && values[winLines[i][1]] === values[winLines[i][2]] && values[winLines[i][2]] != '.') {
                //console.log("win line matched");
                return values[winLines[i][0]];
            }
        }
        if(!values.includes(""))
            return "TIE";
        return null;
    }

    function boxClicked(index) {
        if (values[index] !== '' || checkResult(values))
            return;
        newValues[index] = turn;
        setValues(newValues);
        setMove(move + 1);
    }

    function reset() {
        newValues = Array(9).fill('');
        setValues(newValues);
        setMove(0);
    }

    function isValid(){
        if (player1.name.trim() === player2.name.trim() || player1.emoji === player2.emoji) {

            return false;
        }
        return true;
    }



    function PlayerInput({playerNum, player, setPlayer}){
        return(
            <div className={styles.playerInput}>
                    <label>Player {playerNum} Name:</label>
                    <input 
                        type="text" 
                        value={player.name}
                        onChange={(e) => setPlayer({...player, name: e.target.value})}
                       
                    />
                    <select
                        value={player.emoji}
                        onChange={(e) => setPlayer({...player, emoji: e.target.value})}
                        
                    >
                        {emojiOptions.map(emoji => (
                            <option key={`p${playerNum}-${emoji}`} value={emoji}>{emoji}</option>
                        ))}
                    </select>
            </div>
        );
    }

    return (
        <div className={styles.gamespace}>
            <div className={`${styles.playerSettings}`}>
                <PlayerInput playerNum={1} player={player1} setPlayer={setPlayer1} />
                <PlayerInput playerNum={2} player={player2} setPlayer={setPlayer2} />
            </div>
            <div className={styles.boardspace}>
            {isValid() && <Board values={values} onBoxClick={boxClicked} onReset={reset} /> }
            <h1 className={styles.status}>{ isValid() ? status : `🚨Player Names or Emojis Can't be Same Please change them`}</h1> 
            </div>
        </div>
    );
}

export default GameSpace;