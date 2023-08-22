import React from 'react';
import Modal from 'react-modal';
import Login from '../Login/Login';
import './popup.css'

Modal.setAppElement('#root');

const LoginPopup = ({ isOpen, onRequestClose, openSignupModal }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Login Popup"
            className="login-popup-content"
            overlayClassName="login-popup-overlay"
        >
            <button className="close-popup" onClick={onRequestClose}>
                <span>&times;</span>
            </button>
            <Login openSignupModal={openSignupModal} />
        </Modal>
    );
};

export default LoginPopup;
