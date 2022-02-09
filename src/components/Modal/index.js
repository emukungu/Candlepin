import Modal from "react-bootstrap/Modal";

import React from 'react';

const ModalView = (props) => {
  const { show, setShow, 
    setPlayers, setStart,
    text, okButton, cancel,
    gameComplete, setGameComplete
   } = props;

  const hideModal = () => {
    setShow(false);
  };

  const handleRestart = () => {
    setPlayers([]);
    setStart(false);
  }

  const handleStart = () => {
    setStart(false);
    setGameComplete(false);
  }

  const handleQuit = () => {
    handleRestart();
    hideModal();
    setGameComplete(false);
  }
  return (
    <Modal show={show} onHide={hideModal}>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer>
          <button onClick={gameComplete? handleQuit : hideModal}>{cancel}</button>
          <button onClick={gameComplete ? handleStart : handleRestart}>{okButton}</button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalView;
