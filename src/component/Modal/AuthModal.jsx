import React from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Modal from 'react-modal';
import './authModal.css'

Modal.setAppElement('#root');

const AuthModal = ({ isOpen, onClose, showLogin, toggleModalContent }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Login/Signup Modal"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <button className="modal-close" onClick={onClose}>
                &times;
            </button>
            {showLogin ? (
                <Login onClose={onClose} onSignupClick={toggleModalContent} />
            ) : (
                <Signup onClose={onClose} onLoginClick={toggleModalContent} />
            )}
        </Modal>
    );
};

export default AuthModal