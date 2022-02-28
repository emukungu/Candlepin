import React from 'react';

import './styles.css';

export interface PlayerProps{
  downed: number,
  score: number
}

export const Player = ({downed, score}: PlayerProps) => {
  return (
    <div className='form-group frame-inputs'>
      <div className="form-control frame" >{downed}</div>
      <div className="form-control frame" >{score}</div>
    </div>
  );
};


export default Player;
