import React from 'react';

import './styles.css';


export const Player = ({downed, score}) => {
  return (
    <div className='form-group frame-inputs'>
      <div className="form-control frame" >{downed}</div>
      <div className="form-control frame" >{score}</div>
    </div>
  );
};


export default Player;
