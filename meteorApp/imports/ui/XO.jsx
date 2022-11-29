import React, { useState } from 'react'
import './style.css'

function XO() {
    const [playersTurn, setPlayersTurn] = useState('X')
    const [boxes, setBoxes] = useState(Array(9).fill(null))
    const [boxCounter, setBoxCounter] = useState(1)
    const [hide, setHide] = useState("hide");
    const [wintext, setWintext] = useState("hide");
    const [xScore, setXscore] = useState(0);
    const [oScore, setOscore] = useState(0);

    // useEffect(() => {
    //    console.log("useEffect Run")
    // },[boxes]);

    function moveTracker(index){

        const newBoxes = [...boxes];

        if(boxes[0]===null){
            console.log("box 1 is null")
        }

        if(newBoxes[index]===null){
            newBoxes[index] = playersTurn;
            if(playersTurn==='X'){
                setPlayersTurn('O')
            }else{
                setPlayersTurn('X')
            }
            setBoxCounter(boxCounter+1)
            setBoxes(newBoxes)
                
            if(newBoxes[0]==='X'&&newBoxes[1]==='X'&&newBoxes[2]==='X'||
            newBoxes[3]==='X'&&newBoxes[4]==='X'&&newBoxes[5]==='X'||
            newBoxes[6]==='X'&&newBoxes[7]==='X'&&newBoxes[8]==='X'||
            newBoxes[0]==='X'&&newBoxes[3]==='X'&&newBoxes[6]==='X'||
            newBoxes[1]==='X'&&newBoxes[4]==='X'&&newBoxes[7]==='X'||
            newBoxes[2]==='X'&&newBoxes[5]==='X'&&newBoxes[8]==='X'||
            newBoxes[0]==='X'&&newBoxes[4]==='X'&&newBoxes[8]==='X'||
            newBoxes[2]==='X'&&newBoxes[4]==='X'&&newBoxes[6]==='X'){
                setHide("show")
                setWintext("Player X win")
                setXscore(xScore+1)
            }else if(newBoxes[0]==='O'&&newBoxes[1]==='O'&&newBoxes[2]==='O'||
            newBoxes[3]==='O'&&newBoxes[4]==='O'&&newBoxes[5]==='O'||
            newBoxes[6]==='O'&&newBoxes[7]==='O'&&newBoxes[8]==='O'||
            newBoxes[0]==='O'&&newBoxes[3]==='O'&&newBoxes[6]==='O'||
            newBoxes[1]==='O'&&newBoxes[4]==='O'&&newBoxes[7]==='O'||
            newBoxes[2]==='O'&&newBoxes[5]==='O'&&newBoxes[8]==='O'||
            newBoxes[0]==='O'&&newBoxes[4]==='O'&&newBoxes[8]==='O'||
            newBoxes[2]==='O'&&newBoxes[4]==='O'&&newBoxes[6]==='O'){
                setHide("show");
                setWintext("Player O win")
                setOscore(oScore+1)
            }else if(boxCounter===9){
                setHide("show");
                setWintext("Draw")
                console.log("box is full")
            }
        }else{
            console.log("box has a value already")
        }
    }

    function nextGame(){
        setHide("hide")
        setBoxes(Array(9).fill(null))
        setBoxCounter(1)
        setPlayersTurn('X')
    }

  return (
    <div className='xo-content'>
        <h4>Player's Turn: {playersTurn}</h4>
        <div className='score-board'>
            <div>
                <span>X: {xScore}</span>
            </div>
            <div>
                <span>O: {oScore}</span>
            </div>
        </div>
        <div className='xo-ic'>
            <div className='xo-board-wrapper'>
                <div onClick={()=>{moveTracker(0)}} className='box box1'>{boxes[0]}</div>
                <div onClick={()=>{moveTracker(1)}} className='box box2'>{boxes[1]}</div>
                <div onClick={()=>{moveTracker(2)}} className='box box3'>{boxes[2]}</div>
                <div onClick={()=>{moveTracker(3)}} className='box box4'>{boxes[3]}</div>
                <div onClick={()=>{moveTracker(4)}} className='box box5'>{boxes[4]}</div>
                <div onClick={()=>{moveTracker(5)}} className='box box6'>{boxes[5]}</div>
                <div onClick={()=>{moveTracker(6)}} className='box box7'>{boxes[6]}</div>
                <div onClick={()=>{moveTracker(7)}} className='box box8'>{boxes[7]}</div>
                <div onClick={()=>{moveTracker(8)}} className='box box9'>{boxes[8]}</div>
            </div>
            <div className={`xo-next-round ${hide}`}>
                <h5>{wintext}</h5>
                <button onClick={nextGame}>Proceed to next round</button>
            </div>
        </div>
    </div>
  )
}

export default XO