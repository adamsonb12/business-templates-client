import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const EmailField = ({
    emailClass,
    emailId,
    error,
    fullWidth,
    label,
    onChange,
    required,
    value,
}) => (
    <TextField
        id={emailId}
        label={label}
        className={emailClass}
        value={value}
        onChange={onChange}
        inputProps={{ type: 'email' }}
        fullWidth={fullWidth}
        margin="normal"
        required={required}
        error={error}
    />
);

EmailField.defaultProps = {
    emailClass: 'emailField',
    emailId: 'email',
    error: false,
    fullWidth: true,
    label: 'Email',
    required: true,
};

EmailField.propTypes = {
    emailClass: PropTypes.string,
    emailId: PropTypes.string,
    error: PropTypes.bool,
    fullWidth: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
};

export default EmailField;
