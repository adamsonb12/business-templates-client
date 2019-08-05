import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
                    {/* todo => update reusable buttons */}
                    <Button onClick={closeModal} color="primary">
                        {cancelText}
                    </Button>
                    <Button onClick={handleAction} color="primary">
                        {submitText}
                    </Button>
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
