import React from 'react';

import './styles.css';

const MainContainer = ({ children }) => {
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
