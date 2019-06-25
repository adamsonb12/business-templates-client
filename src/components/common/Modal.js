import React from 'react';
import ReactModal from 'react-modal';

import '../../styles/common/modal.scss';

const Modal = ({ children, isOpen, modalType = 'standard', overlayClass = 'standardOverlay' }) => (
    <ReactModal isOpen={isOpen} className={modalType} overlayClassName={overlayClass}>
        {children}
    </ReactModal>
);

export default Modal;
