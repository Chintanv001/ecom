import React from 'react';
import Modal from 'react-modal';
import './signupPopup.css'; 
import SignUp from '../Signup/Signup';

Modal.setAppElement('#root'); 

const SignupPopup = ({ isOpen, onRequestClose, openLoginModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Signup Popup"
      className="signup-popup-content"
      overlayClassName="signup-popup-overlay"
    >
      <button className="closesignup-popup" onClick={onRequestClose}>
        <span>&times;</span>
      </button>
      <SignUp onClose={onRequestClose} onLoginClick={openLoginModal} />
    </Modal>
  );
};

export default SignupPopup;
