import Card from "../Card/Card";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import isWinner from "../../helpers/IsWinner";

import './Grid.css'
import 'react-toastify/dist/ReactToastify.css';

function Grid({ numberofCards }) {
    const [turn, setTurn] = useState(true); //false : x & true : o
    const [board, setBoard] = useState(Array(numberofCards).fill(""));
    const [winner, setWinner] = useState(null);

    function onPlay(i){
        if(turn === true){
            board[i] = 'O';
        }else if(turn === false){
            board[i] = 'X'
        }

        const win = isWinner(board, turn ? 'O' : 'X');
        if(win){
            setWinner(win);
            toast.success(`Congratulation ${win} won the Game.`, {
                theme: "colored"
            })
        }

        setBoard([...board]);
        setTurn(!turn);

    }

    function handleReset(){
        setBoard(Array(numberofCards).fill(''));
        setTurn(true)
        setWinner(null)
    }


    return<div className="grid-wrapper">
        {winner && (
            <>
                <h1 className="turn">Winner is {winner} </h1>
                <button className="button-78" onClick={handleReset}>New Game</button>
                <ToastContainer position="top-center"/>
            </>
        )}
        <h1 className="turn">Current Turn : {turn ? 'O' : 'X'} </h1>
        <div className="grid">
            {board.map((el,i) => <Card gameEnd={winner ? true : false} key={i} player={el} onplay={onPlay} index={i} />)}
        </div>
    </div>
}

export default Grid;