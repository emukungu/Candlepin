import Modal from "react-bootstrap/Modal";

import React from 'react';

const ModalView = (props) => {
  const { show, setShow, 
    setPlayers, setStart,
    text, okButton, cancel
   } = props;
  const hideModal = () => {
    setShow(false);
  };

  const handleRestart = () => {
    setPlayers([]);
    setStart(false);
  }
  return (
    <Modal show={show} onHide={hideModal}>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer>
          <button onClick={hideModal}>{cancel}</button>
          <button onClick={handleRestart}>{okButton}</button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalView;
