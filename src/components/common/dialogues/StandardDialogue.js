import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { HugoButton } from '..';

const StandardDialogue = ({
    cancelText,
    children,
    contentMessage,
    customFooter,
    onAction,
    closeModal,
    open,
    submitText,
    title,
}) => {
    const handleAction = () => {
        if (onAction !== undefined) {
            onAction();
        }
        closeModal();
    };

    return (
        <Dialog open={open} aria-labelledby="form-dialog-title" className="standardDialogue">
            {title && <DialogTitle id="form-dialog-title">{title}</DialogTitle>}
            <DialogContent>
                {contentMessage && <DialogContentText>{contentMessage}</DialogContentText>}
                {children}
            </DialogContent>
            {!customFooter && (
                <DialogActions>
                    <HugoButton onClick={closeModal} color="secondary" text={cancelText} />
                    <HugoButton onClick={handleAction} color="primary" text={submitText} />
                </DialogActions>
            )}
        </Dialog>
    );
};

StandardDialogue.defaultProps = {
    cancelText: 'Cancel',
    contentMessage: '',
    customFooter: false,
    open: false,
    submitText: 'Submit',
    title: '',
};

StandardDialogue.propTypes = {
    cancelText: PropTypes.string,
    closeModal: PropTypes.func.isRequired,
    contentMessage: PropTypes.string,
    customFooter: PropTypes.bool,
    onAction: PropTypes.func,
    open: PropTypes.bool.isRequired,
    submitText: PropTypes.string,
    title: PropTypes.string,
};

export default StandardDialogue;
