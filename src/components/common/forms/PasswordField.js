import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const PasswordField = ({ error, fullWidth, label, onChange, passwordClass, passwordId, value }) => {
    const [showPassword, changeShowPassword] = useState(false);
    return (
        <FormControl className={passwordClass} fullWidth={fullWidth}>
            <InputLabel htmlFor={passwordId}>{label}</InputLabel>
            <Input
                id={passwordId}
                type={showPassword ? 'text' : 'password'}
                value={value}
                inputProps={{ minLength: 8 }}
                required
                onChange={onChange}
                error={error}
                endAdornment={(
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => changeShowPassword(!showPassword)}
                            onMouseDown={() => changeShowPassword(!showPassword)}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )}
            />
        </FormControl>
    );
};

PasswordField.defaultProps = {
    error: false,
    fullWidth: true,
    label: 'Password',
    passwordId: 'password',
    passwordClass: 'passwordField',
};

PasswordField.propTypes = {
    error: PropTypes.bool,
    fullWidth: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    passwordClass: PropTypes.string,
    passwordId: PropTypes.string,
    value: PropTypes.string.isRequired,
};

export default PasswordField;
