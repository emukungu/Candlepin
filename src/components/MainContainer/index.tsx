import React from 'react';

import './styles.css';

interface ContainerProps{
  children: React.ReactNode
}
const MainContainer = ({ children }: ContainerProps) => {
  return <div className='container-fluid' id='main'>
      <div  className='lane'>
        <p>Lane 3</p>
        <p className='elapsed-time'>Elapsed Time:</p>
      </div>
      <div id='ch-container'>
          { children }
      </div>
  </div>;
};

export default MainContainer;
