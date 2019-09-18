import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const TextInput = ({
    inputClass,
    inputId,
    error,
    fullWidth,
    label,
    minLength,
    onChange,
    required,
    value,
}) => (
    <TextField
        id={inputId}
        label={label}
        className={inputClass}
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
        margin="normal"
        minLength={minLength}
        required={required}
        error={error}
    />
);

TextInput.defaultProps = {
    inputClass: 'textInput',
    inputId: 'text-input',
    error: false,
    fullWidth: true,
    minLength: 0,
    required: false,
};

TextInput.propTypes = {
    error: PropTypes.bool,
    inputClass: PropTypes.string,
    inputId: PropTypes.string,
    fullWidth: PropTypes.bool,
    label: PropTypes.string,
    minLength: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
};

export default TextInput;
