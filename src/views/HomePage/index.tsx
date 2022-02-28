import React, { useState } from 'react';

import FrameBoard from '../FrameBoard';
import MainContainer from '../../components/MainContainer';
import GameButton from '../../components/GameButton';

import './styles.css';
import { ISButton } from '../../interfaces/Button.interface';

const userDisplay = (player: string, index: number) => {
    return(
        <div key={index} className='player'>
            <div
                className='form-control add-user'
            >
                    { player }
            </div>
        </div>
    )
}

const HomePage = () => {
    const [name, setName] = useState("");
    const [players, setPlayers] = useState<string[]>([]);
    const [started, setStart] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      };

    const handleSubmit = () => {
        if(name && players.length < 8){
            setPlayers(players => [...players, name]);
        }
        setName("");
    }

  return (
      <MainContainer>
          {!started ? (<>
            <div id='user-input'>
                <GameButton isStarted={started} handleClick={handleSubmit} players={players}
                    setPlayers={setPlayers}
                    setStart={setStart}
                 />
                {players && players.map((player, index) => {
                    return userDisplay(player, index);
                })}
                {players.length >= 8
                    ? null
                    : (<div className="col-auto">
                        <input type="text"
                            className="form-control"
                            id="name" placeholder="Name"
                            required
                            onChange={handleChange} />
                    </div>)}
                </div>
                <div className='start-score'>
                    {players.length >= 1 && <StartButton isStarted={started} handleClick={() => setStart(true)} />}
                </div>
            </>)
            : (<FrameBoard
                    started={started}
                    setPlayers={setPlayers}
                    setStart={setStart}
                />)
            }
      </MainContainer>
  );
};

const StartButton = ({isStarted, handleClick} : ISButton) => {
    return (
        <button type="button" 
            className={`btn btn-lg start-${isStarted ? 'remove' : 'btn'}`} 
            onClick={handleClick}
        >Start
        </button>
    )
}

export default HomePage;
