import React, { useState, useEffect } from "react";

import Player from '../../components/Player';
import "./styles.css";
import Modal from '../../components/Modal';
import GameButton from '../../components/GameButton';

import loadedData from '../../util';

const list = loadedData;
const playerList = [];

const playerDisplay = (player) => {
  return(
      <THead playerName={player}/>
  )
}

const scoreDisplay = (frame, savedPlayers, setShow, setGameComplete) => {
  return (
    <tr>
      <TTH frameNumber={frame.frame}/>
      {frame.scores.map((playerScore) => {
        if(frame.frame === 10 && playerScore.completed){
          playerList.push(playerScore.completed);
        }else if(playerList.length === savedPlayers.length){
          setShow(true);
          setGameComplete(true);
        }
        return(
          <TTD 
            downed={playerScore.downed} 
            score={playerScore.score}
          />
        )
      })}
    </tr>
  )
}

const sleep = async(millis)=> {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

const FrameBoard = ({ started, setPlayers, setStart }) => {
  const [gameData, setGameData] = useState();
  const [show, setShow] = useState(false);
  const [savedPlayers, setSavedPlayers] = useState([]);
  const [gameComplete, setGameComplete] = useState(false);

  const restart = () => {
    setShow(true);
  }
    const getGameData = async() => {
      try{
        for (let i = 1; i < list.length;i++) {
          await sleep(5000);
          setGameData(list[i]);
        }
      }catch(err){
          return err;
      }
   }

    useEffect(()=>{
      setGameData(list[0]);
      setSavedPlayers(list[0].players);
      getGameData();
    },[])
    return (
      <>
        {!gameData && <p>Loading.....</p>}
        {gameData && (
          <div className="table-responsive" id="tb-display">
          <table className="table table-borderless table-sm align-middle">
            <thead id="head">
              <tr>
                <th id='restart' scope="col">
                  <GameButton isStarted={started} handleClick={restart} 
                    setPlayers={setPlayers}
                    setStart={setStart}
                    setShow={setShow}
                  />
                </th>
                {gameData.players.map((player) => playerDisplay(player))}
              </tr>
            </thead>
            <tbody>
              {gameData.frames.map((frame) => scoreDisplay(frame, savedPlayers, setShow, setGameComplete))}
            </tbody>
          </table>
        </div>
        )}
        <Modal show={show} setPlayers={setPlayers}
        setStart={setStart}
        setShow={setShow}
        gameComplete={gameComplete}
        setGameComplete={setGameComplete}
        text={gameComplete 
          ? "Game comlete! Would like to start another game":"Are you sure you want torestart the game"
        }
        okButton={gameComplete ? "Start":"Restart"}
        cancel={gameComplete ? "Quit":"cancel"}
        />
      </>
    )
}

const THead = ({playerName}) => {
  return (
    <th scope="col">
      <div
            className='player form-control'
        >
                { playerName }
        </div>
    </th>

  )
}
const TTH = ({frameNumber}) => {
  return (
    <th scope="row" className="frame-number">
      <div className="form-control frame-board" >{ frameNumber }
      </div>
    </th>
  )
}

const TTD = ({downed, score}) => {
  return (
    <td><Player downed={downed} score ={score}/></td>
  )
}

export default FrameBoard;
